"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Award, GraduationCap, Briefcase, ExternalLink } from "lucide-react";

const experience = [
  {
    role: "Technical Head",
    organization: "E-Cell IET Lucknow",
    duration: "Apr 2026 – Present",
    location: "Lucknow",
    summary:
      "Leading the campus entrepreneurship cell's web team—maintaining the main portal, registration pipelines, and mentoring junior developers.",
    bullets: [
      "Shipped the redesigned E-Cell web app for 1,200+ campus participants",
      "Earlier served as Technical Lead (Mar 2025 – Mar 2026) and Web Developer (Sep 2024 – Apr 2025)",
    ],
  },
  {
    role: "Coordinator — Training & Placement Cell",
    organization: "IET Lucknow",
    duration: "May 2026 – Present",
    location: "Lucknow",
    summary:
      "Elected student coordinator supporting placement operations and building tooling for the campus T&P cell, after serving a year as Representative (May 2025 – Apr 2026).",
    bullets: [
      "Coordinating recruitment drives and company schedules with 50+ visiting recruiters",
      "Helping streamline student verification and placement portal workflows",
    ],
  },
  {
    role: "Software Engineer Intern",
    organization: "Minitaka",
    duration: "Nov 2025 – Feb 2026",
    location: "Bengaluru (Remote)",
    summary:
      "Worked on frontend product modules and API integrations in React and TypeScript across a four-month remote internship.",
    bullets: [
      "Built reusable UI components and tightened asynchronous data fetching flows",
      "Collaborated with the product team on performance and responsive fixes",
    ],
  },
  {
    role: "Technical Head & Web Developer",
    organization: "Hult Prize IET Lucknow",
    duration: "Oct 2024 – Present",
    location: "Lucknow",
    summary:
      "Built and run the competition portal for the On-Campus Hult Prize edition, supporting 50+ student teams through registration and pitch rounds.",
  },
];

const awards = [
  {
    title: "NEC IIT Bombay Finalist",
    meta: "E-Cell IIT Bombay · Top Finalist (600+ colleges)",
    detail:
      "Represented E-Cell IET Lucknow at the National Entrepreneurship Challenge finals at IIT Bombay.",
  },
  {
    title: "4th Place — Hack with UP",
    meta: "State Hackathon · Out of 430+ teams",
    detail:
      "Built PhysioGo, an AI-assisted physiotherapy recommendation and booking app, finishing 4th overall.",
  },
];

const education = [
  {
    degree: "B.Tech in Computer Science & Engineering",
    school: "Institute of Engineering & Technology (IET), Lucknow",
    period: "2023 – 2027",
    note: "DSA, Operating Systems, DBMS, Computer Networks, OOP (Java)",
  },
  {
    degree: "Senior Secondary (Class XII)",
    school: "De Paul School",
    period: "2020 – 2022",
    note: "Physics, Chemistry, Mathematics",
  },
];

const filters = [
  { id: "all", label: "Everything" },
  { id: "experience", label: "Experience" },
  { id: "milestones", label: "Awards & Education" },
];

const Resume = () => {
  const [filter, setFilter] = useState("all");

  return (
    <section id="career" className="py-20 sm:py-24 border-t border-surface-border">
      <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <p className="text-xs font-mono text-accent uppercase tracking-widest mb-2.5">
              02 / Experience
            </p>
            <h2 className="h2 text-titanium-50">
              Where I've{" "}
              <span className="font-editorial text-accent font-normal">
                worked & led
              </span>
            </h2>
          </div>

          <div className="flex items-center gap-2">
            {filters.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setFilter(tab.id)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-mono transition-colors ${
                  filter === tab.id
                    ? "bg-titanium-50 text-primary font-semibold"
                    : "text-titanium-400 hover:text-titanium-100 border border-surface-border"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left: Experience Ledger */}
          <AnimatePresence mode="wait">
            {(filter === "all" || filter === "experience") && (
              <motion.div
                key="exp-col"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className={filter === "experience" ? "lg:col-span-12" : "lg:col-span-7"}
              >
                <div className="flex items-center gap-2 text-xs font-mono text-titanium-400 uppercase tracking-wider mb-6">
                  <Briefcase className="w-3.5 h-3.5 text-accent" />
                  <span>Roles & Internships</span>
                </div>

                <div className="divide-y divide-surface-border border-y border-surface-border">
                  {experience.map((item, idx) => (
                    <div key={idx} className="py-6 first:pt-5 last:pb-5">
                      <div className="flex flex-wrap items-baseline justify-between gap-2 mb-1">
                        <h3 className="text-lg font-heading font-bold text-titanium-50">
                          {item.role}
                        </h3>
                        <span className="text-xs font-mono text-titanium-400">
                          {item.duration}
                        </span>
                      </div>
                      <p className="text-sm text-accent font-medium mb-3">
                        {item.organization} <span className="text-titanium-500">· {item.location}</span>
                      </p>
                      <p className="text-sm text-titanium-300 leading-relaxed mb-3">
                        {item.summary}
                      </p>
                      {item.bullets && (
                        <ul className="space-y-1">
                          {item.bullets.map((b, i) => (
                            <li key={i} className="flex items-start gap-2 text-xs text-titanium-400">
                              <span className="text-accent font-mono">—</span>
                              <span>{b}</span>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Right: Awards & Education */}
          <AnimatePresence mode="wait">
            {(filter === "all" || filter === "milestones") && (
              <motion.div
                key="milestones-col"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className={`${filter === "milestones" ? "lg:col-span-12 grid grid-cols-1 md:grid-cols-2 gap-8" : "lg:col-span-5 space-y-10"}`}
              >
                {/* Awards */}
                <div>
                  <div className="flex items-center gap-2 text-xs font-mono text-titanium-400 uppercase tracking-wider mb-5">
                    <Award className="w-3.5 h-3.5 text-accent" />
                    <span>Hackathons & Finals</span>
                  </div>
                  <div className="space-y-4">
                    {awards.map((award, idx) => (
                      <div
                        key={idx}
                        className="p-5 rounded-xl bg-surface border border-surface-border"
                      >
                        <h4 className="text-base font-heading font-bold text-titanium-50 mb-1">
                          {award.title}
                        </h4>
                        <p className="text-[11px] font-mono text-accent mb-2">
                          {award.meta}
                        </p>
                        <p className="text-xs sm:text-sm text-titanium-300 leading-relaxed">
                          {award.detail}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Education */}
                <div>
                  <div className="flex items-center gap-2 text-xs font-mono text-titanium-400 uppercase tracking-wider mb-5">
                    <GraduationCap className="w-3.5 h-3.5 text-accent" />
                    <span>Education</span>
                  </div>
                  <div className="space-y-4">
                    {education.map((edu, idx) => (
                      <div
                        key={idx}
                        className="p-5 rounded-xl bg-surface border border-surface-border"
                      >
                        <div className="flex items-center justify-between gap-2 mb-1">
                          <span className="text-[11px] font-mono text-accent">
                            {edu.period}
                          </span>
                        </div>
                        <h4 className="text-base font-heading font-bold text-titanium-50 mb-0.5">
                          {edu.degree}
                        </h4>
                        <p className="text-xs sm:text-sm text-titanium-300 mb-2">
                          {edu.school}
                        </p>
                        <p className="text-xs font-mono text-titanium-400 leading-relaxed">
                          {edu.note}
                        </p>
                      </div>
                    ))}

                    <a
                      href="https://drive.google.com/file/d/1hGu1UvcQ64tME9tXWXm-22r_JTMZCFb9/view?usp=sharing"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-xs font-mono text-titanium-200 hover:text-accent transition-colors pt-2"
                    >
                      <span>Open full resume (PDF)</span>
                      <ExternalLink className="w-3.5 h-3.5 text-accent" />
                    </a>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default Resume;
