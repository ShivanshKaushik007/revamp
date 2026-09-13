"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  FaReact,
  FaNodeJs,
  FaJava,
  FaJs,
  FaPython,
  FaDocker,
  FaGitAlt,
} from "react-icons/fa";
import {
  SiTypescript,
  SiNextdotjs,
  SiTailwindcss,
  SiMongodb,
  SiRedis,
  SiSocketdotio,
  SiWebrtc,
  SiPostgresql,
} from "react-icons/si";
import { Terminal, Cpu, Database, Layout, Sparkles, Layers } from "lucide-react";

const skillCategories = [
  {
    category: "Languages & Runtimes",
    description: "Core programming paradigms, algorithms, and system foundations",
    icon: <Terminal className="w-4 h-4 text-accent" />,
    skills: [
      { name: "Java", level: "Advanced", note: "DSA, OOP & Backend architecture", icon: <FaJava /> },
      { name: "TypeScript", level: "Advanced", note: "Type-safe full-stack workflows", icon: <SiTypescript /> },
      { name: "JavaScript", level: "Expert", note: "ESNext, Event Loop, Async runtime", icon: <FaJs /> },
      { name: "Python", level: "Intermediate", note: "Scripting, AI APIs & data tools", icon: <FaPython /> },
    ],
  },
  {
    category: "Real-Time & Backend Systems",
    description: "Low-latency networking, event loops, and distributed communication",
    icon: <Cpu className="w-4 h-4 text-accent" />,
    skills: [
      { name: "Node.js", level: "Advanced", note: "Express microservices, Auth, REST", icon: <FaNodeJs /> },
      { name: "Socket.IO", level: "Advanced", note: "Bi-directional live messaging", icon: <SiSocketdotio /> },
      { name: "WebRTC", level: "Proficient", note: "P2P audio/video streaming & signaling", icon: <SiWebrtc /> },
      { name: "Redis", level: "Proficient", note: "Socket adapter, pub/sub & caching", icon: <SiRedis /> },
    ],
  },
  {
    category: "Frontend & Design Engineering",
    description: "Component architecture, fluid motion, and responsive interfaces",
    icon: <Layout className="w-4 h-4 text-accent" />,
    skills: [
      { name: "React.js", level: "Advanced", note: "Hooks, custom reconcilers, state", icon: <FaReact /> },
      { name: "Next.js", level: "Advanced", note: "App Router, SSR, Server Actions", icon: <SiNextdotjs /> },
      { name: "Tailwind CSS", level: "Expert", note: "Design systems, responsive tokens", icon: <SiTailwindcss /> },
      { name: "Framer Motion", level: "Advanced", note: "Spring physics & micro-interactions", icon: <Sparkles /> },
    ],
  },
  {
    category: "Databases & Cloud Tooling",
    description: "Data modeling, version control, and containerization",
    icon: <Database className="w-4 h-4 text-accent" />,
    skills: [
      { name: "MongoDB", level: "Advanced", note: "Document schemas & indexing", icon: <SiMongodb /> },
      { name: "PostgreSQL", level: "Proficient", note: "Relational queries & ACID guarantees", icon: <SiPostgresql /> },
      { name: "Docker", level: "Intermediate", note: "Containerized deployment environments", icon: <FaDocker /> },
      { name: "Git & GitHub", level: "Advanced", note: "Trunk-based branch flow, CI/CD", icon: <FaGitAlt /> },
    ],
  },
];

const Skills = () => {
  const [activeCategoryIndex, setActiveCategoryIndex] = useState(0);

  return (
    <section id="skills" className="py-20 sm:py-28 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-12 max-w-7xl">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-accent uppercase tracking-widest mb-3">
              <Layers className="w-3.5 h-3.5" />
              <span>Technical Ecosystem</span>
            </div>
            <h2 className="h2 text-white font-heading font-extrabold">
              Stack & Architectural Radar.
            </h2>
          </div>
          <p className="max-w-md text-sm sm:text-base text-titanium-300 font-sans leading-relaxed">
            The programming languages, frameworks, and infrastructure tools I leverage to build production-grade web systems.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {skillCategories.map((cat, catIdx) => (
            <div
              key={catIdx}
              className="p-6 sm:p-8 rounded-3xl bg-[#11131C]/80 border border-white/[0.08] hover:border-accent/30 hover:bg-[#141624] transition-all duration-300 shadow-xl"
            >
              <div className="flex items-center gap-3 mb-2">
                <div className="w-8 h-8 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center">
                  {cat.icon}
                </div>
                <h3 className="text-lg sm:text-xl font-heading font-bold text-white">
                  {cat.category}
                </h3>
              </div>
              <p className="text-xs text-titanium-400 font-mono mb-6">
                {cat.description}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {cat.skills.map((skill, sIdx) => (
                  <div
                    key={sIdx}
                    className="p-3.5 rounded-2xl bg-white/[0.02] border border-white/[0.06] hover:border-accent/40 hover:bg-white/[0.05] transition-all group flex items-start gap-3"
                  >
                    <div className="text-2xl text-titanium-400 group-hover:text-accent transition-colors shrink-0 mt-0.5">
                      {skill.icon}
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-sm font-heading font-semibold text-white group-hover:text-accent transition-colors">
                          {skill.name}
                        </span>
                        <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-white/5 text-accent">
                          {skill.level}
                        </span>
                      </div>
                      <p className="text-[11px] text-titanium-400 font-mono mt-0.5 leading-snug">
                        {skill.note}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
