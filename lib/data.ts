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

export const introText = `**Hello, I'm Julius.** I'm a **Computer Programming** student with **3 years** of experience.
I strive to create *intuitive and elegant solutions*.

My focus is **React (Next.js)**.`;

export const aboutText = `I started studying programming by taking online courses following
  [the OSSU curriculum](https://github.com/ossu/computer-science),
  which equipped me with a solid understanding of object-oriented and
  functional programming, data structures and algorithm. My favorite part of
  programming is the problem-solving aspect.
  I love the idea of divide and conquer, where problems are solved by
  first being divided into smaller manageable pieces.`;

export const experiencesData = [
  {
    title: 'Open Source Society University',
    location: 'Online',
    description:
      'Where I built solid understanding of programming paradigms, data structures and algorithms, operating systems, and computer networking.',
    icon: React.createElement(LuGraduationCap),
    date: '2022 – 2024',
  },
  {
    title: 'Computer Programming Diploma',
    location: 'Algonquin College, Ottawa, ON',
    description:
      "I'm now a Computer Programming student at Algonquin College. My tech stack is React, Next.js, and MongoDB. I'm open to co-op opportunities.",
    icon: React.createElement(FaReact),
    date: '2024 - present',
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
  },
] as const;

export const skillsData = [
  'HTML',
  'CSS',
  'JavaScript',
  'TypeScript',
  'React',
  'Next.js',
  'Node.js',
  'Git',
  'Tailwind',
  'MongoDB',
  'Redux',
  'GraphQL',
  'Apollo',
  'Express',
  'PostgreSQL',
  'Python',
  'Django',
  'Framer Motion',
] as const;
