"use client";

import React from "react";
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
import { Sparkles } from "lucide-react";

const groups = [
  {
    title: "Languages",
    tools: [
      { name: "TypeScript", where: "End-to-end strict types across Next.js & Node", icon: <SiTypescript /> },
      { name: "JavaScript", where: "Browser runtime, async flows, DOM work", icon: <FaJs /> },
      { name: "Java", where: "DSA, OOP & core CS problem solving", icon: <FaJava /> },
      { name: "Python", where: "Quick scripts & AI API integrations", icon: <FaPython /> },
    ],
  },
  {
    title: "Frontend & UI",
    tools: [
      { name: "Next.js", where: "App Router, Server Actions, SSR", icon: <SiNextdotjs /> },
      { name: "React", where: "Component systems, hooks, client state", icon: <FaReact /> },
      { name: "Tailwind CSS", where: "Custom tokens, responsive layouts", icon: <SiTailwindcss /> },
      { name: "Framer Motion", where: "Layout transitions & tactile springs", icon: <Sparkles className="w-4 h-4" /> },
    ],
  },
  {
    title: "Backend & Real-Time",
    tools: [
      { name: "Node.js", where: "Express APIs, auth middleware, cron jobs", icon: <FaNodeJs /> },
      { name: "Socket.IO", where: "Rooms, typing indicators, live threads", icon: <SiSocketdotio /> },
      { name: "WebRTC", where: "1:1 peer audio/video & ICE signaling", icon: <SiWebrtc /> },
      { name: "Redis", where: "Socket.IO pub/sub adapter & caching", icon: <SiRedis /> },
    ],
  },
  {
    title: "Data & Tooling",
    tools: [
      { name: "PostgreSQL", where: "RLS policies, relational schemas, triggers", icon: <SiPostgresql /> },
      { name: "MongoDB", where: "Chat messages, threads & user models", icon: <SiMongodb /> },
      { name: "Docker", where: "Local containers & reproducible builds", icon: <FaDocker /> },
      { name: "Git & GitHub", where: "Branching, PR reviews, team workflows", icon: <FaGitAlt /> },
    ],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 sm:py-24 border-t border-surface-border">
      <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <p className="text-xs font-mono text-accent uppercase tracking-widest mb-2.5">
              04 / Toolkit
            </p>
            <h2 className="h2 text-titanium-50">
              Tools I{" "}
              <span className="font-editorial text-accent font-normal">
                actually ship with
              </span>
            </h2>
          </div>
          <p className="max-w-md text-sm text-titanium-300 leading-relaxed">
            No arbitrary percentage bars—just the languages, databases, and libraries I use across my projects and internships.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-10">
          {groups.map((group) => (
            <div key={group.title}>
              <h3 className="text-xs font-mono uppercase tracking-widest text-titanium-400 pb-3 border-b border-surface-border mb-2">
                {group.title}
              </h3>

              <div className="divide-y divide-surface-border">
                {group.tools.map((tool) => (
                  <div
                    key={tool.name}
                    className="py-3.5 flex flex-col sm:flex-row sm:items-center justify-between gap-1.5 sm:gap-4 group"
                  >
                    <div className="flex items-center gap-3 min-w-0">
                      <span className="text-lg text-titanium-400 group-hover:text-accent transition-colors shrink-0">
                        {tool.icon}
                      </span>
                      <span className="text-sm font-heading font-semibold text-titanium-50 shrink-0">
                        {tool.name}
                      </span>
                    </div>
                    <span className="text-xs font-mono text-titanium-400 sm:text-right pl-7 sm:pl-0">
                      {tool.where}
                    </span>
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
