"use client";

import React, { useState } from "react";
import dynamic from "next/dynamic";
import { MapPin } from "lucide-react";
import ClickSpark from "@/components/ui/ClickSpark";

const CrystalizedBall = dynamic(
  () => import("@/components/ui/CrystalizedBall"),
  {
    ssr: false,
    loading: () => (
      <div className="w-full h-full flex items-center justify-center text-xs font-mono text-titanium-500">
        initializing shader...
      </div>
    ),
  }
);

const orbMoods = [
  { id: "ember", label: "Ember", color: "#F27D42" },
  { id: "solar", label: "Solar", color: "#FFD36E" },
  { id: "aurora", label: "Aurora", color: "#5CFFC8" },
  { id: "eclipse", label: "Eclipse", color: "#F2EFE9" },
];

const About = () => {
  const [activeMood, setActiveMood] = useState(orbMoods[0]);

  return (
    <section id="about" className="py-20 sm:py-24 border-t border-surface-border">
      <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left: Human Story */}
          <div className="lg:col-span-6">
            <p className="text-xs font-mono text-accent uppercase tracking-widest mb-2.5">
              01 / About
            </p>
            <h2 className="h2 text-titanium-50 mb-6">
              A little more{" "}
              <span className="font-editorial text-accent font-normal">
                context
              </span>
            </h2>

            <div className="space-y-4 text-sm sm:text-base text-titanium-300 leading-relaxed">
              <p>
                I'm currently in my third/fourth year studying Computer Science at{" "}
                <span className="text-titanium-100 font-medium">IET Lucknow</span>. Most of what I know came from picking a problem I didn't fully understand—like Postgres Row-Level Security or WebRTC peer state—and building an app around it until the edges stopped breaking.
              </p>
              <p>
                Outside of personal builds, I spend a lot of time working with student teams: running technical operations for{" "}
                <span className="text-titanium-100 font-medium">E-Cell</span> and{" "}
                <span className="text-titanium-100 font-medium">Hult Prize</span> on campus, and coordinating recruitment drives with the Training & Placement Cell.
              </p>
              <p className="text-titanium-400">
                Right now I'm looking for 2027 software engineering internships or full-time roles where I can work across the stack and learn from strong product engineers.
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-surface-border flex flex-wrap items-center gap-x-6 gap-y-2 text-xs font-mono text-titanium-400">
              <span className="inline-flex items-center gap-1.5 text-titanium-200">
                <MapPin className="w-3.5 h-3.5 text-accent" />
                Lucknow, India
              </span>
              <span>Open to Bengaluru · Delhi-NCR · Mumbai · Remote</span>
            </div>
          </div>

          {/* Right: Interactive Crystalized Ball */}
          <div className="lg:col-span-6">
            <div className="rounded-2xl bg-[#08080A] border border-surface-border overflow-hidden">
              <div className="px-4 py-3 border-b border-surface-border bg-surface flex flex-wrap items-center justify-between gap-2">
                <span className="text-xs font-mono text-titanium-300">
                  shader / crystalized-ball
                </span>

                <div className="flex items-center gap-1">
                  {orbMoods.map((mood) => {
                    const active = activeMood.id === mood.id;
                    return (
                      <ClickSpark
                        key={mood.id}
                        className="inline-flex !w-auto !h-auto"
                        sparkColor={mood.color}
                        sparkSize={8}
                        sparkRadius={18}
                        sparkCount={6}
                        duration={360}
                      >
                        <button
                          type="button"
                          onClick={() => setActiveMood(mood)}
                          className={`px-2.5 py-1 rounded-full text-[11px] font-mono transition-colors ${
                            active
                              ? "bg-titanium-50 text-primary font-semibold"
                              : "text-titanium-400 hover:text-titanium-100"
                          }`}
                        >
                          {mood.label}
                        </button>
                      </ClickSpark>
                    );
                  })}
                </div>
              </div>

              <div className="relative h-[340px] sm:h-[400px] w-full cursor-crosshair">
                <CrystalizedBall
                  preset={activeMood.id}
                  color={activeMood.color}
                  size={0.76}
                  particleCount={10000}
                  interactive={true}
                  hoverStrength={0.75}
                />
              </div>

              <div className="px-4 py-2.5 border-t border-surface-border bg-surface flex items-center justify-between text-[11px] font-mono text-titanium-400">
                <span>move cursor to swirl · click orb to spark</span>
                <span className="text-accent">ogl / webgl2</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
