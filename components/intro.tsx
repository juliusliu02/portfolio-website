'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Markdown from 'react-markdown';
import Link from 'next/link';
import { BsArrowRight, BsGithub, BsLinkedin } from 'react-icons/bs';
import { HiDownload } from 'react-icons/hi';
import { useSectionInView } from '@/lib/hooks';
import { useActiveSectionContext } from '@/context/active-section-context';
import { introText } from '@/lib/data';

function Intro() {
  const { ref } = useSectionInView('Home', 0.5);
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

  return (
    <section
      ref={ref}
      id='home'
      className='mb-28 max-w-[50rem] scroll-mt-[100rem] text-center sm:mb-0'
    >
      <div className='flex items-center justify-center'>
        <div className='relative'>
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: 'tween',
              duration: 0.2,
            }}
          >
            <Image
              src='https://avatars.githubusercontent.com/u/131168602'
              alt='Portrait'
              width='200'
              height='200'
              priority={true}
              className='h-24 w-24 rounded-full border-[0.35rem] border-white object-cover shadow-xl'
            />
          </motion.div>
          <motion.span
            className='absolute bottom-0 right-0 text-4xl'
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: 'spring',
              stiffness: 125,
              delay: 0.1,
              duration: 0.7,
            }}
          >
            😎
          </motion.span>
        </div>
      </div>

      <motion.h1
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <Markdown className='text-body mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] prose-p:my-5 sm:text-4xl'>
          {introText}
        </Markdown>
      </motion.h1>

      <motion.div
        className='flex flex-col items-center justify-center gap-2 px-4 text-lg font-medium sm:flex-row'
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.1,
        }}
      >
        <Link
          href='#contact'
          className='group sm:flowing-redistribution transition flex items-center gap-2 rounded-full bg-gray-900 px-7 py-3 text-white outline-none hover:scale-110 hover:bg-gray-950 focus:scale-110 active:scale-105'
          onClick={() => {
            setActiveSection('Contact');
            setTimeOfLastClick(Date.now());
          }}
        >
          Contact me{' '}
          <BsArrowRight className='opacity-70 transition' />
        </Link>
        <a
          href='/CV.pdf'
          download
          className='borderBlack sm:flowing-redistribution flex cursor-pointer items-center gap-2 rounded-full bg-white px-7 py-3 outline-none transition hover:scale-110 focus:scale-110 active:scale-105 dark:bg-white/10'
        >
          Résumé <HiDownload className='opacity-60' />
        </a>
        <a
          href='https://github.com/juliusliu02'
          target='_blank'
          rel='noopener noreferrer'
          className='borderBlack sm:flowing-redistribution flex cursor-pointer items-center gap-2 rounded-full bg-white p-4 text-gray-700 outline-none transition hover:scale-[1.15] hover:text-gray-950 focus:scale-[1.15] active:scale-105 dark:bg-white/10 dark:text-white/60'
        >
          <BsLinkedin />
        </a>
        <a
          href='https://github.com/juliusliu02'
          target='_blank'
          rel='noopener noreferrer'
          className='borderBlack sm:flowing-redistribution flex cursor-pointer items-center gap-2 rounded-full bg-white p-4 text-gray-700 outline-none transition hover:scale-[1.15] hover:text-gray-950 focus:scale-[1.15] active:scale-105 dark:bg-white/10 dark:text-white/60'
        >
          <BsGithub />
        </a>
      </motion.div>
    </section>
  );
}

export default Intro;
