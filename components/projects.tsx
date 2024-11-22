'use client';

import React, { Fragment } from 'react';
import SectionHeading from '@/components/section-heading';
import { projectsData } from '@/lib/data';
import Project from '@/components/project';
import { useSectionInView } from '@/lib/hooks';
import { motion } from 'framer-motion';

function Projects() {
  const { ref } = useSectionInView('Projects', 0.5);

  return (
    <motion.section ref={ref} id='projects' className='mb-28 scroll-mt-28'
                    initial={{ opacity: 0, y: 100 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}>
      <SectionHeading>My projects</SectionHeading>
      <div>
        {projectsData.map((project, index) => (
          <Fragment key={index}>
            <Project {...project} />
          </Fragment>
        ))}
      </div>
    </motion.section>
  );
}

export default Projects;
