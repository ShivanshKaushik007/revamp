"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Briefcase,
  Award,
  GraduationCap,
  Users,
  ChevronRight,
  Sparkles,
  Calendar,
  MapPin,
  ExternalLink,
} from "lucide-react";

const careerData = {
  experience: [
    {
      role: "Technical Head",
      organization: "E-Cell IET Lucknow",
      type: "Leadership & Engineering",
      duration: "Apr 2026 – Present",
      location: "Lucknow, UP",
      summary:
        "Directing the engineering team, architecting full-stack web solutions, and managing technical infrastructure for campus-wide entrepreneurial initiatives.",
      highlights: [
        "Led full rewrite of the E-Cell web application serving 1,200+ active users",
        "Mentored junior developers in Next.js, Git workflows, and performance optimization",
      ],
      tag: "Active Role",
    },
    {
      role: "Coordinator — Training & Placement Cell",
      organization: "Institute of Engineering & Technology",
      type: "Institutional Leadership",
      duration: "May 2026 – Present",
      location: "Lucknow, UP",
      summary:
        "Elected as Student Placement Coordinator representing 1,200+ engineering students. Directing placement portal development and corporate recruitment operations.",
      highlights: [
        "Liaised with 50+ corporate recruiters for campus drives and technical interviews",
        "Spearheaded digitizing student placement verification workflows",
      ],
      tag: "Active Role",
    },
    {
      role: "Software Engineer Intern",
      organization: "Minitaka",
      type: "Industry Internship",
      duration: "Nov 2025 – Feb 2026",
      location: "Bengaluru, IN (Remote)",
      summary:
        "Contributed to core frontend and API integration pipelines, optimizing load performance and component reusability.",
      highlights: [
        "Built responsive client modules in React & TypeScript with 99% test coverage",
        "Streamlined state management and asynchronous data fetching",
      ],
      tag: "Internship",
    },
    {
      role: "Technical Lead & Web Developer",
      organization: "E-Cell IET Lucknow",
      type: "Engineering",
      duration: "Sep 2024 – Mar 2026",
      location: "Lucknow, UP",
      summary:
        "Engineered registration portals, event countdowns, and dynamic dashboards for startup summits.",
      highlights: [
        "Implemented high-converting landing pages with interactive micro-animations",
      ],
      tag: "Leadership",
    },
    {
      role: "Technical Head & Web Developer",
      organization: "Hult Prize IET Lucknow",
      type: "Engineering & Operations",
      duration: "Oct 2024 – Present",
      location: "Lucknow, UP",
      summary:
        "Developed the official competition hub for the On-Campus Hult Prize, handling applicant evaluation workflows.",
      highlights: [
        "Coordinated technical operations for 50+ social enterprise teams",
      ],
      tag: "Engineering",
    },
  ],
  achievements: [
    {
      title: "NEC IIT Bombay Finalist",
      organizer: "E-Cell, IIT Bombay",
      date: "National Level",
      badge: "Top Tier",
      description:
        "Qualified as a national finalist in the National Entrepreneurship Challenge at IIT Bombay among 600+ competing institutions across India.",
    },
    {
      title: "4th Position — Hack with UP Hackathon",
      organizer: "Hack with UP / State Level",
      date: "Hackathon",
      badge: "Top 4 of 430+",
      description:
        "Architected 'PhysioGo', an AI-assisted physiotherapy diagnosis and appointment platform, competing against 430+ developer teams.",
    },
  ],
  education: [
    {
      degree: "Bachelor of Technology — Computer Science & Engineering",
      institution: "Institute of Engineering & Technology (IET), Lucknow",
      period: "2023 – 2027",
      status: "In Progress (Undergraduate)",
      details:
        "Coursework: Data Structures & Algorithms, Operating Systems, Database Management Systems, Computer Networks, Object-Oriented Programming (Java).",
    },
    {
      degree: "Senior Secondary (Intermediate)",
      institution: "De Paul School",
      period: "2020 – 2022",
      status: "Completed",
      details: "Science & Mathematics Stream (Physics, Chemistry, Mathematics).",
    },
  ],
};

const tabs = [
  { id: "all", label: "Complete Trajectory", icon: <Briefcase className="w-3.5 h-3.5" /> },
  { id: "experience", label: "Experience & Roles", icon: <Users className="w-3.5 h-3.5" /> },
  { id: "achievements", label: "Milestones & Awards", icon: <Award className="w-3.5 h-3.5" /> },
  { id: "education", label: "Academic Foundation", icon: <GraduationCap className="w-3.5 h-3.5" /> },
];

const Resume = () => {
  const [activeTab, setActiveTab] = useState("all");

  return (
    <section id="career" className="py-20 sm:py-28 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-12 max-w-7xl">
        {/* Section Title */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-accent uppercase tracking-widest mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Career Progression</span>
            </div>
            <h2 className="h2 text-white font-heading font-extrabold">
              Experience & Leadership.
            </h2>
          </div>
          <p className="max-w-md text-sm sm:text-base text-titanium-300 font-sans leading-relaxed">
            A comprehensive record of engineering internships, institutional leadership roles, and hackathon milestones.
          </p>
        </div>

        {/* Tab Controls */}
        <div className="flex flex-wrap items-center gap-2 mb-12 border-b border-white/[0.08] pb-4">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-full text-xs font-mono transition-all duration-200 ${
                activeTab === tab.id
                  ? "bg-accent text-primary font-semibold shadow-lg shadow-sky-500/20"
                  : "bg-white/[0.03] border border-white/10 text-titanium-400 hover:text-white hover:border-white/20"
              }`}
            >
              {tab.icon}
              <span>{tab.label}</span>
            </button>
          ))}
        </div>

        {/* Dynamic Tab Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Main Timeline Stream */}
          <div className="lg:col-span-8">
            <AnimatePresence mode="wait">
              {(activeTab === "all" || activeTab === "experience") && (
                <motion.div
                  key="experience-group"
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="space-y-6 mb-12"
                >
                  <h3 className="text-xs font-mono text-titanium-400 uppercase tracking-widest mb-4 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-accent" />
                    Professional Experience & Team Leadership
                  </h3>

                  <div className="relative pl-6 sm:pl-8 border-l border-white/10 space-y-8">
                    {careerData.experience.map((item, idx) => (
                      <div key={idx} className="relative group">
                        {/* Timeline Node Pip */}
                        <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-[#11131C] border-2 border-accent group-hover:scale-125 transition-transform" />

                        <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/[0.07] hover:border-accent/30 hover:bg-white/[0.04] transition-all">
                          <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                            <span className="text-xs font-mono px-2.5 py-0.5 rounded bg-accent/10 border border-accent/20 text-accent">
                              {item.tag}
                            </span>
                            <span className="text-xs font-mono text-titanium-400 flex items-center gap-1">
                              <Calendar className="w-3 h-3" />
                              {item.duration}
                            </span>
                          </div>

                          <h4 className="text-lg sm:text-xl font-heading font-bold text-white mb-0.5">
                            {item.role}
                          </h4>
                          <p className="text-sm font-medium text-titanium-300 mb-3 flex items-center gap-2">
                            <span>{item.organization}</span>
                            <span className="text-white/20">•</span>
                            <span className="text-xs text-titanium-400">{item.location}</span>
                          </p>

                          <p className="text-xs sm:text-sm text-titanium-300 leading-relaxed mb-4">
                            {item.summary}
                          </p>

                          {item.highlights && (
                            <ul className="space-y-1.5 border-t border-white/5 pt-3">
                              {item.highlights.map((hl, i) => (
                                <li key={i} className="flex items-start gap-2 text-xs text-titanium-400">
                                  <ChevronRight className="w-3 h-3 text-accent shrink-0 mt-0.5" />
                                  <span>{hl}</span>
                                </li>
                              ))}
                            </ul>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}

              {/* Achievements Tab Content */}
              {(activeTab === "all" || activeTab === "achievements") && (
                <motion.div
                  key="achievements-group"
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="space-y-6 mb-12"
                >
                  <h3 className="text-xs font-mono text-titanium-400 uppercase tracking-widest mb-4 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-accent" />
                    Recognitions & Hackathons
                  </h3>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {careerData.achievements.map((ach, idx) => (
                      <div
                        key={idx}
                        className="p-6 rounded-2xl bg-white/[0.02] border border-white/[0.07] hover:border-accent/30 transition-all flex flex-col justify-between"
                      >
                        <div>
                          <div className="flex items-center justify-between mb-3">
                            <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-white/5 border border-white/10 text-accent">
                              {ach.badge}
                            </span>
                            <Award className="w-4 h-4 text-accent" />
                          </div>
                          <h4 className="text-base sm:text-lg font-heading font-bold text-white mb-1">
                            {ach.title}
                          </h4>
                          <p className="text-xs font-mono text-titanium-400 mb-3">
                            {ach.organizer}
                          </p>
                          <p className="text-xs text-titanium-300 leading-relaxed">
                            {ach.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}

              {/* Education Tab Content */}
              {(activeTab === "all" || activeTab === "education") && (
                <motion.div
                  key="education-group"
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="space-y-6"
                >
                  <h3 className="text-xs font-mono text-titanium-400 uppercase tracking-widest mb-4 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-accent" />
                    Academic Foundation
                  </h3>

                  <div className="space-y-4">
                    {careerData.education.map((edu, idx) => (
                      <div
                        key={idx}
                        className="p-6 rounded-2xl bg-white/[0.02] border border-white/[0.07] hover:border-accent/30 transition-all"
                      >
                        <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                          <span className="text-xs font-mono text-accent">
                            {edu.period}
                          </span>
                          <span className="text-xs font-mono px-2 py-0.5 rounded bg-white/5 text-titanium-400">
                            {edu.status}
                          </span>
                        </div>
                        <h4 className="text-base sm:text-lg font-heading font-bold text-white mb-1">
                          {edu.degree}
                        </h4>
                        <p className="text-xs sm:text-sm text-titanium-300 mb-2">
                          {edu.institution}
                        </p>
                        <p className="text-xs text-titanium-400 font-mono">
                          {edu.details}
                        </p>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Right Column: Leadership & Impact Snapshot */}
          <div className="lg:col-span-4 space-y-6">
            {/* Leadership Spotlight Card */}
            <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-b from-surface-elevated to-surface border border-white/10 shadow-2xl relative overflow-hidden">
              <div className="w-10 h-10 rounded-2xl bg-accent/10 border border-accent/20 flex items-center justify-center text-accent mb-6">
                <Users className="w-5 h-5" />
              </div>
              <h4 className="text-xl font-heading font-bold text-white mb-2">
                Student Leadership & Impact
              </h4>
              <p className="text-xs sm:text-sm text-titanium-300 leading-relaxed mb-6 font-sans">
                As Training & Placement Cell Coordinator and Technical Head at E-Cell IET Lucknow, I bridge the gap between technical execution and institutional leadership.
              </p>

              <div className="space-y-3 font-mono text-xs">
                <div className="p-3 rounded-xl bg-white/[0.03] border border-white/5 flex items-center justify-between">
                  <span className="text-titanium-400">Cohort Reach</span>
                  <span className="text-white font-semibold">1,200+ Students</span>
                </div>
                <div className="p-3 rounded-xl bg-white/[0.03] border border-white/5 flex items-center justify-between">
                  <span className="text-titanium-400">Tech Team Size</span>
                  <span className="text-white font-semibold">12 Developers</span>
                </div>
                <div className="p-3 rounded-xl bg-white/[0.03] border border-white/5 flex items-center justify-between">
                  <span className="text-titanium-400">Platform Uptime</span>
                  <span className="text-accent font-semibold">99.9% Reliable</span>
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-white/10">
                <a
                  href="https://drive.google.com/file/d/1zK3OaLAySnfmUmpQZJyUfCMZeQn__r5I/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-mono text-titanium-200 hover:text-white transition-all"
                >
                  <span>Download Full Curriculum Vitae</span>
                  <ExternalLink className="w-3.5 h-3.5 text-accent" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
