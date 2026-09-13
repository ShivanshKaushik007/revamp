"use client";

import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import { Compass } from "lucide-react";

// Dynamically import the React Bits Lanyard with SSR disabled
const ReactBitsLanyard = dynamic(() => import("./ReactBitsLanyard"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-[500px] lg:h-[560px] flex items-center justify-center">
      <div className="flex items-center gap-2 text-xs font-mono text-titanium-400 px-4 py-2 rounded-full bg-white/[0.03] border border-white/10">
        <Compass className="w-4 h-4 text-accent animate-spin" />
        <span>Initializing 3D Physics Canvas...</span>
      </div>
    </div>
  ),
});

export default function Lanyard() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="w-full h-[500px] lg:h-[560px] flex items-center justify-center">
        <div className="flex items-center gap-2 text-xs font-mono text-titanium-400 px-4 py-2 rounded-full bg-white/[0.03] border border-white/10">
          <Compass className="w-4 h-4 text-accent animate-spin" />
          <span>Loading 3D Physics Lanyard...</span>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full relative flex flex-col items-center">
      {/* Interactive Drag Pill Hint */}
      <div className="absolute top-2 z-20 pointer-events-none flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#11131C]/85 backdrop-blur-md border border-white/10 text-xs font-mono text-titanium-300 shadow-xl">
        <Compass
          className="w-3.5 h-3.5 text-accent animate-spin"
          style={{ animationDuration: "8s" }}
        />
        <span>Grab & fling the 3D lanyard pass</span>
      </div>

      <ReactBitsLanyard position={[0, 0, 24]} fov={22} transparent={true} />
    </div>
  );
}
