'use client';

import React, { Fragment } from 'react';
import SectionHeading from '@/components/section-heading';
import { projectsData } from '@/lib/data';
import Project from '@/components/project';
import { useSectionInView } from '@/lib/hooks';

function Projects() {
  const { ref } = useSectionInView('Projects', 0.5);

  return (
    <section ref={ref} id='projects' className='mb-28 scroll-mt-28'>
      <SectionHeading>My projects</SectionHeading>
      <div>
        {projectsData.map((project, index) => (
          <Fragment key={index}>
            <Project {...project} />
          </Fragment>
        ))}
      </div>
    </section>
  );
}

export default Projects;
