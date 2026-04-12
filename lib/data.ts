import React from 'react';
import { LuBriefcaseBusiness, LuGraduationCap } from 'react-icons/lu';
import gitletImg from '@/public/gitlet.png';
import expresImg from '@/public/expres.png';
import groveImg from '@/public/grove.png';

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

export const introText = `**Hello, I'm Julius**, a full-stack developer co-op currently building network automation software at **Nokia**.`;

export const aboutText = `
  I'm a software developer co-op at Nokia, where I build full-stack features
  for a distributed network automation platform.
  Before that, I studied through
  [the OSSU curriculum](https://github.com/ossu/computer-science)
  and am completing my Computer Programming diploma at Algonquin College (GPA: 3.99/4.0).
  I enjoy building with serverless platforms and advocate for simple, consistent, and functional code.`;

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
      "GPA: 3.99/4.0. Dean's Honour List.",
    icon: React.createElement(LuGraduationCap),
    date: '2024 – 2026',
  },
  {
    title: 'Software Developer Co-op',
    location: 'Nokia, Ottawa, ON',
    description: [
      'Delivered end-to-end features across frontend, backend, and infrastructure for a container-based network automation platform.',
      'Designed cross-service communication using WebSockets, reverse proxy configuration, and async backend handling.',
      'Deployed core services on Kubernetes (GKE) with secure connectivity and external access.',
      'Built a real-time SSH console for containerized environments, enabling interactive remote access through the browser via a bastion architecture.',
    ],
    icon: React.createElement(LuBriefcaseBusiness),
    date: '2025 – present',
  },
] as const;

export const projectsData = [
  {
    title: 'Exprès',
    description:
      'Serverless AI writing feedback platform with revision-aware analysis, SSE streaming, and AI observability.',
    tags: ['React', 'TypeScript', 'Cloudflare Workers', 'Hono', 'Drizzle'],
    imageUrl: expresImg,
  },
  {
    title: 'Grove',
    description:
      'Personal productivity suite that captures and connects thoughts with AI-powered generation.',
    tags: ['Svelte', 'TypeScript', 'Cloudflare Workers', 'Drizzle', 'Better Auth'],
    imageUrl: groveImg,
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
  'TypeScript',
  'React',
  'Python',
  'Svelte',
  'Next.js',
  'Redux',
  'Tailwind',
  'FastAPI',
  'Node.js',
  'Express',
  'Hono',
  'PostgreSQL',
  'MongoDB',
  'Drizzle',
  'Docker',
  'Kubernetes',
  'Cloudflare Workers',
  'WebSockets',
  'Git',
  'GitHub Actions',
  'Playwright',
  'Vitest',
] as const;
