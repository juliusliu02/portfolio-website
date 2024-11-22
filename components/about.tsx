'use client';

import React from 'react';
import Markdown from 'react-markdown';
import SectionHeading from '@/components/section-heading';
import { motion } from 'framer-motion';
import { useSectionInView } from '@/lib/hooks';
import { aboutText } from '@/lib/data';

function About() {
  const { ref } = useSectionInView('About');

  return (
    <motion.section
      ref={ref}
      id='about'
      className='mb-28 max-w-[45rem] scroll-mt-28 text-center leading-8 sm:mb-40'
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
    >
      <SectionHeading>About me</SectionHeading>
      <Markdown
        // Pass custom component for external links.
        components={{
          a({ children, ...props }) {
            try {
              new URL(props.href ?? '');
              // If we don't get an error, then it's an absolute URL.

              props.target = '_blank';
              props.rel = 'noopener noreferrer';
            } catch (e) {
              console.error(e);
            }

            // Remove extra props.
            delete props.node;

            return (
              <a
                className="text-indigo-600 after:content-['_↗'] dark:text-indigo-300"
                {...props}
              >
                {children}
              </a>
            );
          },
        }}
        className='mb-3 prose-strong:font-medium'
      >
        {aboutText}
      </Markdown>
      <p></p>
    </motion.section>
  );
}

export default About;
