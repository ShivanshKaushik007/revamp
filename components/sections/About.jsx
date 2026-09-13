"use client";

import React from "react";
import {
  Compass,
  Code,
  Flame,
  Globe,
  HeartHandshake,
  Sparkles,
  Terminal,
  Cpu,
  ArrowUpRight,
} from "lucide-react";
import { FaGithub, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

const About = () => {
  return (
    <section id="about" className="py-20 sm:py-28 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-12 max-w-7xl">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-accent uppercase tracking-widest mb-3">
              <Compass className="w-3.5 h-3.5" />
              <span>Personal Blueprint</span>
            </div>
            <h2 className="h2 text-white font-heading font-extrabold">
              Engineering Mindset & Philosophy.
            </h2>
          </div>
          <p className="max-w-md text-sm sm:text-base text-titanium-300 font-sans leading-relaxed">
            A behind-the-scenes look at how I think about systems, developer craft, and collaboration.
          </p>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* Card 1: Core Engineering Philosophy (Large 8-col) */}
          <div className="md:col-span-8 p-6 sm:p-10 rounded-3xl bg-gradient-to-br from-[#121422] to-[#0D0E16] border border-white/10 shadow-2xl relative overflow-hidden flex flex-col justify-between">
            <div className="mb-6">
              <div className="w-10 h-10 rounded-2xl bg-accent/10 border border-accent/20 flex items-center justify-center text-accent mb-6">
                <Terminal className="w-5 h-5" />
              </div>
              <h3 className="text-xl sm:text-2xl font-heading font-bold text-white mb-3">
                Building Software as a Cohesive System, Not a Set of Isolated Pages.
              </h3>
              <p className="text-sm sm:text-base text-titanium-300 leading-relaxed font-sans mb-4">
                I believe modern web engineering requires both ends of the craft: deep architectural rigor on the backend (concurrency, event-driven sockets, multi-tenant persistence) and uncompromising attention to detail on the frontend (fluid motion, typography scale, accessible interaction).
              </p>
              <p className="text-xs sm:text-sm text-titanium-400 leading-relaxed font-mono">
                A feature isn't done when it is saved in a database — it is done when it arrives instantly, handles network drops gracefully, and leaves the user feeling delighted.
              </p>
            </div>

            <div className="flex flex-wrap gap-2 pt-4 border-t border-white/10 text-xs font-mono text-accent">
              <span>#DistributedSystems</span>
              <span>#WebSockets</span>
              <span>#DesignSystems</span>
              <span>#Performance</span>
            </div>
          </div>

          {/* Card 2: Current Focus / Now (4-col) */}
          <div className="md:col-span-4 p-6 sm:p-8 rounded-3xl bg-[#11131C] border border-white/10 shadow-xl flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono uppercase tracking-widest text-accent flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                  Current Focus
                </span>
                <span className="text-xs font-mono text-titanium-500">2026</span>
              </div>
              <h4 className="text-lg font-heading font-bold text-white mb-3">
                Exploring Real-Time P2P Mesh & Distributed Brokers
              </h4>
              <p className="text-xs sm:text-sm text-titanium-300 leading-relaxed mb-4">
                Actively expanding my work with WebRTC peer mesh optimization, Socket.IO multi-instance clustering via Redis, and high-performance React component trees.
              </p>
            </div>

            <div className="p-3 rounded-2xl bg-white/[0.03] border border-white/5 text-xs font-mono text-titanium-300">
              <span className="text-white font-semibold">Reading & Researching:</span> Distributed systems consistency models & React 19 concurrent features.
            </div>
          </div>

          {/* Card 3: Leadership & Impact (5-col) */}
          <div className="md:col-span-5 p-6 sm:p-8 rounded-3xl bg-[#11131C] border border-white/10 shadow-xl flex flex-col justify-between">
            <div>
              <div className="w-9 h-9 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center text-accent mb-4">
                <HeartHandshake className="w-4 h-4" />
              </div>
              <h4 className="text-lg font-heading font-bold text-white mb-2">
                Campus Leadership & Community
              </h4>
              <p className="text-xs sm:text-sm text-titanium-300 leading-relaxed">
                As Placement Coordinator and Tech Head at E-Cell IET Lucknow, I lead technical teams, organize entrepreneurship summits, and support over 1,200 student engineers in career readiness and software development.
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-xs font-mono text-titanium-400">
              <span>IET Lucknow (2023 – 2027)</span>
              <span className="text-accent">Active Role</span>
            </div>
          </div>

          {/* Card 4: Location & Availability (7-col) */}
          <div className="md:col-span-7 p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-surface-elevated to-surface border border-white/10 shadow-xl flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <div className="flex items-center gap-2 text-xs font-mono text-accent mb-2">
                <Globe className="w-3.5 h-3.5" />
                <span>Location & Relocation</span>
              </div>
              <h4 className="text-xl font-heading font-bold text-white mb-2">
                Based in Lucknow, India.
              </h4>
              <p className="text-xs sm:text-sm text-titanium-300 max-w-md font-sans">
                Available for on-site software engineering roles in Bengaluru, Delhi-NCR, Mumbai, and hybrid/remote opportunities worldwide.
              </p>
            </div>

            <a href="#contact" className="shrink-0">
              <button className="px-5 py-3 rounded-full bg-accent text-primary font-semibold text-xs font-mono hover:bg-accent-hover shadow-lg shadow-sky-500/20 transition-all flex items-center gap-1.5">
                <span>Contact Shivansh</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
