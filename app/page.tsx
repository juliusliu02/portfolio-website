import Intro from '@/components/intro';
import SectionDivider from '@/components/section-divider';
import About from '@/components/about';
import Projects from '@/components/projects';
import Skills from '@/components/skills';
import Experience from '@/components/experience';
import React from 'react';
import Contact from '@/components/contact';
import { headers } from "next/headers";
import BrowserCheck from "@/components/browser-check";

export default async function Home() {
  const userAgent = (await headers()).get("user-agent");

  return (
    <main className='flex flex-col items-center px-4'>
      <Intro />
      <SectionDivider />
      <About />
      <Projects />
      <Skills />
      <Experience />
      <Contact />
      { !userAgent?.includes('Chrome') && <BrowserCheck />}
    </main>
  );
}
