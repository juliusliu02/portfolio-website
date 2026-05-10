import React from "react";
import { LuBriefcaseBusiness, LuGraduationCap } from "react-icons/lu";
import containerlabImg from "@/public/containerlab.png";
import expresImg from "@/public/expres.png";
import mrAgentImg from "@/public/mr-agent.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const introText = `**Hello, I'm Julius**, a software developer on co-op at **Nokia**, focused on **TypeScript/React, Python, and AI agents**.`;

export const aboutText = `
  I'm a software developer with two years writing TypeScript and Python, currently on co-op at Nokia
  where I ship end-to-end features across React, FastAPI, and Kubernetes — from browser UI to containerized services.
  Lately I've been building AI agents and evaluation pipelines. Outside work, I build tools for my own workflow — most of my projects started as something I wished existed.`;

export const experiencesData = [
  {
    title: "Software Developer Co-op",
    location: "Nokia, Ottawa, ON",
    description: [
      "Delivered end-to-end functionality across a distributed system, designing FastAPI backend services and APIs with comprehensive unit and E2E test coverage.",
      "Built a WebSocket-based SSH console for Kubernetes containers, enabling real-time terminal access and SFTP through a bastion architecture.",
      "Led improvements to frontend accessibility and testability by introducing ARIA labels and semantic attributes, enabling Playwright-based E2E testing and improving selector reliability.",
      "Implemented online and offline evaluation pipelines for AI agents using Langfuse, integrating dataset-driven testing and CI workflows to evaluate and improve LLM-based agent performance.",
    ],
    icon: React.createElement(LuBriefcaseBusiness),
    date: "2025 – present",
  },
  {
    title: "Computer Programming Diploma",
    location: "Algonquin College, Ottawa, ON",
    description: "GPA: 3.99/4.0. Dean's Honour List.",
    icon: React.createElement(LuGraduationCap),
    date: "2024 – 2026",
  },
] as const;

export const projectsData = [
  {
    title: "Exprès",
    description:
      "Serverless AI writing feedback platform with revision-aware analysis, SSE streaming, and AI observability.",
    tags: ["React", "TypeScript", "Cloudflare Workers", "Hono", "Drizzle"],
    imageUrl: expresImg,
  },
  {
    title: "vscode-containerlab",
    description:
      "Open-source VS Code extension for network labs — contributed a link impairment panel and refactored the webview messaging layer for type safety.",
    tags: ["TypeScript", "React", "VS Code Extension", "Open Source"],
    imageUrl: containerlabImg,
  },
  {
    title: "MR Review Agent",
    description:
      "Multi-agent system that reviews GitLab merge requests via a custom MCP server exposing diffs, metadata, and pipeline context.",
    tags: ["Python", "Google ADK", "MCP", "Docker"],
    imageUrl: mrAgentImg,
  },
] as const;

export const skillsData = [
  "TypeScript",
  "React",
  "Next.js",
  "Tailwind",
  "Python",
  "FastAPI",
  "Node.js",
  "Hono",
  "REST APIs",
  "PostgreSQL",
  "Drizzle",
  "Langfuse",
  "MCP",
  "Google ADK",
  "Vitest",
  "Playwright",
  "Docker",
  "Kubernetes",
  "Cloudflare Workers",
  "GCP",
  "CI/CD",
  "Git",
] as const;
