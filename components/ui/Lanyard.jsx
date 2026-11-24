"use client";

import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import { Move } from "lucide-react";

const ReactBitsLanyard = dynamic(() => import("./ReactBitsLanyard"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-[460px] lg:h-[540px] flex items-center justify-center">
      <div className="text-xs font-mono text-titanium-400 px-3.5 py-1.5 rounded-full border border-surface-border bg-surface">
        loading badge...
      </div>
    </div>
  ),
});

export default function Lanyard() {
  const [mounted, setMounted] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setMounted(true);
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  if (!mounted) {
    return (
      <div className="w-full h-[460px] sm:h-[520px] lg:h-[580px] flex items-center justify-center">
        <div className="text-xs font-mono text-titanium-400 px-3.5 py-1.5 rounded-full border border-surface-border bg-surface">
          loading badge...
        </div>
      </div>
    );
  }

  return (
    <div className="w-full relative flex flex-col items-center">
      <div className="absolute bottom-4 z-20 pointer-events-none flex items-center gap-1.5 px-3 py-1 rounded-full bg-surface/90 backdrop-blur-md border border-surface-border text-[11px] font-mono text-titanium-300">
        <Move className="w-3 h-3 text-accent" />
        <span>drag or flick the badge</span>
      </div>

      <ReactBitsLanyard
        position={isMobile ? [0, -0.4, 14.8] : [0, -0.6, 13.0]}
        fov={isMobile ? 26 : 24}
        transparent={true}
      />
    </div>
  );
}
