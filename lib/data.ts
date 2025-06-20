import React from 'react';
import { FaReact } from 'react-icons/fa';
import { LuGraduationCap } from 'react-icons/lu';
import gitletImg from '@/public/gitlet.png';
import morphImg from '@/public/morph.png';
import ibkrStatementParserImg from '@/public/ibkrStatementParser.png';

export const links = [
  {
    name: 'Home',
    hash: '#home',
  },
  {
    name: 'About',
    hash: '#about',
  },
  {
    name: 'Projects',
    hash: '#projects',
  },
  {
    name: 'Skills',
    hash: '#skills',
  },
  {
    name: 'Experience',
    hash: '#experience',
  },
  {
    name: 'Contact',
    hash: '#contact',
  },
] as const;

export const introText = `**Hello, I'm Julius**, an aspiring full-stack developer with **3 years** of academic experience.
I strive to create *intuitive and elegant solutions*.

My focus is **React (Next.js)**.`;

export const aboutText = `
  I started studying programming by taking online courses in
  [the OSSU curriculum](https://github.com/ossu/computer-science),
  which equipped me with a solid understanding of object-oriented and
  functional programming, data structures and algorithm.
  During my free time, I experiment with cutting-edge technologies and  
  as a passionate full-stack developer, I advocate for simple, consistent, and functional code.`;

export const experiencesData = [
  {
    title: 'Open Source Society University',
    location: 'Online',
    description:
      'Curated high-quality courses helped me gain solid understanding of programming paradigms, design patterns, data structures and algorithms.',
    icon: React.createElement(LuGraduationCap),
    date: '2022 – 2024',
  },
  {
    title: 'Computer Programming Diploma',
    location: 'Algonquin College, Ottawa, ON',
    description:
      "I'm studying Computer Programming, acquiring hands-on experience with database management, operating systems, and networking. I'm looking for co-op opportunities.",
    icon: React.createElement(FaReact),
    date: '2024 – present',
  },
] as const;

export const projectsData = [
  {
    title: 'Morph',
    description:
      'A smart AI-powered essay editor. Users can get polished essays following a multi-step editing process with just a few clicks.',
    tags: ['React', 'Next.js', 'MongoDB', 'Tailwind', 'Prisma'],
    imageUrl: morphImg,
  },
  {
    title: 'IBKR Statement Parser',
    description:
      `Automated conversion tool from IBKR's export to Portfolio Profit-compatible CSV format.`,
    tags: ['Go', 'Abstract Data Type', 'Functional Programming', 'File I/O'],
    imageUrl: ibkrStatementParserImg,
  },
  {
    title: 'Gitlet',
    description:
      'An object-oriented implementation of Git. Supports branch merging with automatic conflict resolution.',
    tags: ['Java', 'Serialization', 'Data Structures', 'Error Handling'],
    imageUrl: gitletImg,
  }
] as const;

export const skillsData = [
  'HTML',
  'CSS',
  'JavaScript',
  'TypeScript',
  'React',
  'Node.js',
  'Next.js',
  'Tailwind',
  'shadcn/ui',
  'MongoDB',
  'Prisma',
  'Drizzle',
  'Redux',
  'GraphQL',
  'Apollo',
  'Express',
  'Hono',
  'PostgreSQL',
  'Django',
  'Git',
  'Framer Motion',
] as const;
