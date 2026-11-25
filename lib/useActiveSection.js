"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

export const SECTION_IDS = ["home", "about", "career", "work", "skills", "notes", "contact"];

export function useActiveSection() {
  const pathname = usePathname();
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    if (pathname && pathname.startsWith("/blog")) {
      setActiveSection("notes");
      return;
    }

    if (pathname !== "/" && pathname !== "") {
      return;
    }

    const determineActiveSection = () => {
      const scrollY = window.scrollY;
      const viewportHeight = window.innerHeight;
      const scrollBottom = scrollY + viewportHeight;
      const docHeight = document.documentElement.scrollHeight;

      if (scrollBottom >= docHeight - 70) {
        setActiveSection("contact");
        return;
      }

      if (scrollY < 120) {
        setActiveSection("home");
        return;
      }

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

      setActiveSection("home");
    };

    determineActiveSection();

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
