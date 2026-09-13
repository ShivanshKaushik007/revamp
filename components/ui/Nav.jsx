"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { useActiveSection } from "@/lib/useActiveSection";

const links = [
  { name: "Overview", path: "/#home", id: "home" },
  { name: "Projects", path: "/#work", id: "work" },
  { name: "Career", path: "/#career", id: "career" },
  { name: "Stack", path: "/#skills", id: "skills" },
  { name: "About", path: "/#about", id: "about" },
  { name: "Journal", path: "/blog", id: "blog" },
];

const Nav = ({ activeSection: propActive, setActiveSection: propSetActive }) => {
  const hookState = useActiveSection();
  const activeSection = propActive !== undefined ? propActive : hookState.activeSection;
  const setActiveSection = propSetActive || hookState.setActiveSection;
  const pathname = usePathname();
  const isHomePage = pathname === "/" || pathname === "";

  const handleNavClick = (e, link) => {
    if (link.id === "blog") {
      setActiveSection("blog");
      return;
    }

    if (isHomePage) {
      e.preventDefault();
      setActiveSection(link.id);
      const targetEl = document.getElementById(link.id);
      if (targetEl) {
        targetEl.scrollIntoView({ behavior: "smooth" });
        window.history.pushState(null, "", `#${link.id}`);
      }
    } else {
      setActiveSection(link.id);
    }
  };

  return (
    <nav className="flex items-center gap-1 p-1 rounded-full bg-white/[0.03] border border-white/5 relative">
      {links.map((link) => {
        const isActive = activeSection === link.id;

        return (
          <Link
            href={link.path}
            key={link.id}
            onClick={(e) => handleNavClick(e, link)}
            className={`relative px-4 py-1.5 rounded-full text-xs font-medium tracking-wide transition-colors duration-200 z-10 select-none ${
              isActive
                ? "text-white font-semibold"
                : "text-titanium-400 hover:text-white hover:bg-white/[0.04]"
            }`}
          >
            {/* Sliding Pill Background via Framer Motion */}
            {isActive && (
              <motion.span
                layoutId="activeNavPill"
                transition={{ type: "spring", stiffness: 380, damping: 30 }}
                className="absolute inset-0 rounded-full bg-white/10 shadow-sm border border-white/10 -z-10"
              />
            )}

            <span>{link.name}</span>

            {/* Glowing Accent Indicator Under Active Tab */}
            {isActive && (
              <motion.span
                layoutId="activeNavIndicator"
                transition={{ type: "spring", stiffness: 380, damping: 30 }}
                className="absolute -bottom-0.5 left-1/2 -translate-x-1/2 w-3 h-0.5 rounded-full bg-accent shadow-[0_0_8px_#38bdf8]"
              />
            )}
          </Link>
        );
      })}
    </nav>
  );
};

export default Nav;
