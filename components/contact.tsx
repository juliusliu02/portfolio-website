'use client';

import React from 'react';
import SectionHeading from '@/components/section-heading';
import { motion } from 'framer-motion';
import { useSectionInView } from '@/lib/hooks';
import { sendEmail } from '@/actions/send-email';
import SubmitButton from '@/components/submit-button';
import toast from 'react-hot-toast';
import Script from "next/script";

function Contact() {
  const { ref } = useSectionInView('Contact');

  return (
    <motion.section
      ref={ref}
      id='contact'
      className='mb-20 w-[min(100%,38rem)] text-center sm:mb-28 will-change-transform'
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 0.5,
      }}
      viewport={{
        once: true,
      }}
    >
      <SectionHeading>Contact me</SectionHeading>
      <p className='-mt-5 text-gray-700 dark:text-white/80'>
        Contact me directly at{' '}
        <a
          href='mailto:contact@juliusliu.dev'
          className='display-link font-light'
        >
          contact@juliusliu.dev
        </a>{' '}
        or use this form to say hi!
      </p>

      <form
        className='mt-10 flex flex-col dark:text-black'
        action={async (formData) => {
          const { error } = await sendEmail(formData);
          if (error) {
            toast.error(error);
            return;
          }

          toast.success('Email sent successfully.');
        }}
      >
        <input
          className='borderBlack h-14 rounded-lg px-4 transition-all dark:bg-white dark:bg-opacity-80 dark:outline-none dark:focus:bg-opacity-100'
          type='email'
          name='email'
          id='email'
          placeholder='hello@example.com'
          required
        />
        <textarea
          className='borderBlack my-3 h-52 rounded-lg p-4 transition-all dark:bg-white dark:bg-opacity-80 dark:outline-none dark:focus:bg-opacity-100'
          name='message'
          id='message'
          placeholder='Your message'
          required
        />
        <div className={"flex gap-8 items-center"}>
        <SubmitButton />
          <Script
            src="https://challenges.cloudflare.com/turnstile/v0/api.js"
            async
            defer
          ></Script>
          <div
            className="cf-turnstile mx-0"
            data-sitekey={process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY}
            data-callback="javascriptCallback"
          ></div>
        </div>
      </form>
    </motion.section>
  );
}

export default Contact;
