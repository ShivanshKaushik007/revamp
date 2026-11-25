"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { useActiveSection } from "@/lib/useActiveSection";

const links = [
  { name: "Home", path: "/#home", id: "home" },
  { name: "About", path: "/#about", id: "about" },
  { name: "Experience", path: "/#career", id: "career" },
  { name: "Work", path: "/#work", id: "work" },
  { name: "Toolkit", path: "/#skills", id: "skills" },
  { name: "Notes", path: "/#notes", id: "notes" },
];

const Nav = ({ activeSection: propActive, setActiveSection: propSetActive }) => {
  const hookState = useActiveSection();
  const activeSection = propActive !== undefined ? propActive : hookState.activeSection;
  const setActiveSection = propSetActive || hookState.setActiveSection;
  const pathname = usePathname();
  const isHomePage = pathname === "/" || pathname === "";

  const handleNavClick = (e, link) => {
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
    <nav className="flex items-center gap-1 relative">
      {links.map((link) => {
        const isActive = activeSection === link.id;

        return (
          <Link
            href={link.path}
            key={link.id}
            onClick={(e) => handleNavClick(e, link)}
            className={`relative px-3.5 py-1.5 text-[13px] font-medium transition-colors duration-200 select-none ${
              isActive
                ? "text-titanium-50"
                : "text-titanium-400 hover:text-titanium-100"
            }`}
          >
            <span>{link.name}</span>

            {isActive && (
              <motion.span
                layoutId="activeNavUnderline"
                transition={{ type: "spring", stiffness: 420, damping: 32 }}
                className="absolute bottom-0 left-3.5 right-3.5 h-[1.5px] bg-accent rounded-full"
              />
            )}
          </Link>
        );
      })}
    </nav>
  );
};

export default Nav;
