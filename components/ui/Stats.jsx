"use client";

import CountUp from "react-countup";
import { Code2, GitFork, Cpu, Award } from "lucide-react";

const stats = [
  {
    num: 4,
    suffix: "+",
    label: "Years of Craft",
    subtext: "System building & DSA",
    icon: <Code2 className="w-4 h-4 text-accent" />,
  },
  {
    num: 6,
    suffix: "+",
    label: "Production Apps",
    subtext: "Full-stack & real-time",
    icon: <Cpu className="w-4 h-4 text-accent" />,
  },
  {
    num: 15,
    suffix: "+",
    label: "Core Technologies",
    subtext: "Next.js, Node, WebRTC",
    icon: <GitFork className="w-4 h-4 text-accent" />,
  },
  {
    num: 1200,
    suffix: "+",
    label: "Students Impacted",
    subtext: "Placement & E-Cell Head",
    icon: <Award className="w-4 h-4 text-accent" />,
  },
];

const Stats = () => {
  return (
    <div className="w-full pt-6 pb-2">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        {stats.map((item, index) => {
          return (
            <div
              key={index}
              className="p-5 rounded-2xl bg-white/[0.02] border border-white/[0.07] hover:border-accent/30 hover:bg-white/[0.04] transition-all duration-300 group"
            >
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-mono uppercase tracking-wider text-titanium-400">
                  {item.label}
                </span>
                <div className="w-7 h-7 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center text-accent group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
              </div>
              <div className="flex items-baseline gap-1">
                <CountUp
                  end={item.num}
                  duration={3}
                  delay={0.5}
                  className="text-3xl sm:text-4xl font-heading font-extrabold text-white tracking-tight"
                />
                <span className="text-2xl font-heading font-bold text-accent">
                  {item.suffix}
                </span>
              </div>
              <p className="text-xs text-titanium-400 mt-1 font-mono">
                {item.subtext}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Stats;
