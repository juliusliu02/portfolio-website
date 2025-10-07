import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/header';
import ActiveSectionContextProvider from '@/context/active-section-context';
import React from 'react';
import { Toaster } from 'react-hot-toast';
import Footer from '@/components/footer';
import ThemeSwitch from '@/components/theme-switch';
import ThemeContextProvider from '@/context/theme-context';

export const metadata: Metadata = {
  title: 'Julius Liu | Portfolio',
  description: 'Full Stack Developer',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' className='scroll-smooth!'>
      <body
        className={`relative bg-gray-50 pt-28 text-gray-950 sm:pt-36 dark:bg-gray-900 dark:text-gray-50/90`}
      >
        <div className='absolute right-44 -top-24 -z-10 h-125 w-125 rounded-full bg-[#fbe2e3] blur-[10rem] sm:w-275 dark:bg-[#946263]'></div>
        <div className='absolute -left-140 -top-4 -z-10 h-125 w-200 rounded-full bg-[#dbd7fb] blur-[10rem] sm:w-275 md:-left-132 lg:-left-112 xl:-left-60 2xl:-left-20 dark:bg-[#676394]'></div>

        <ThemeContextProvider>
          <ActiveSectionContextProvider>
            <Header />
            {children}
            <Footer />
            <Toaster position='top-right' />
            <ThemeSwitch />
          </ActiveSectionContextProvider>
        </ThemeContextProvider>
      </body>
    </html>
  );
}
