"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

export const SECTION_IDS = ["home", "work", "career", "skills", "about", "contact"];

export function useActiveSection() {
  const pathname = usePathname();
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    // If on blog route, always focus Journal
    if (pathname && pathname.startsWith("/blog")) {
      setActiveSection("blog");
      return;
    }

    // Only monitor scroll on homepage
    if (pathname !== "/" && pathname !== "") {
      return;
    }

    const determineActiveSection = () => {
      const scrollY = window.scrollY;
      const viewportHeight = window.innerHeight;
      const scrollBottom = scrollY + viewportHeight;
      const docHeight = document.documentElement.scrollHeight;

      // 1. If at or very close to the bottom of the page, activate contact
      if (scrollBottom >= docHeight - 70) {
        setActiveSection("contact");
        return;
      }

      // 2. If near the top of the page, activate home
      if (scrollY < 120) {
        setActiveSection("home");
        return;
      }

      // 3. Focal gaze line: 180px below viewport top (accounting for sticky header height ~80px)
      const focalLine = scrollY + 180;

      for (let i = SECTION_IDS.length - 1; i >= 0; i--) {
        const id = SECTION_IDS[i];
        const el = document.getElementById(id);
        if (el) {
          const top = el.offsetTop;
          if (focalLine >= top) {
            setActiveSection(id);
            return;
          }
        }
      }

      // Fallback
      setActiveSection("home");
    };

    // Run initial determination
    determineActiveSection();

    // Use requestAnimationFrame for high-performance scroll tracking
    let ticking = false;
    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          determineActiveSection();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [pathname]);

  return { activeSection, setActiveSection };
}
