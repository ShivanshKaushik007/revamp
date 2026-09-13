"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const links = [
  { name: "Overview", path: "/#home" },
  { name: "Projects", path: "/#work" },
  { name: "Career", path: "/#career" },
  { name: "Stack", path: "/#skills" },
  { name: "About", path: "/#about" },
  { name: "Journal", path: "/blog" },
];

const Nav = () => {
  const pathname = usePathname();
  const [activeHash, setActiveHash] = useState("#home");

  useEffect(() => {
    if (pathname.includes("/blog")) {
      setActiveHash("/blog");
      return;
    }

    const updateActiveHash = () => {
      const hash = window.location.hash || "#home";
      setActiveHash(hash);
    };

    updateActiveHash();
    window.addEventListener("hashchange", updateActiveHash);
    return () => window.removeEventListener("hashchange", updateActiveHash);
  }, [pathname]);

  return (
    <nav className="flex items-center gap-1 p-1 rounded-full bg-white/[0.03] border border-white/5">
      {links.map((link, index) => {
        const isJournal = link.path === "/blog";
        const isActive = isJournal
          ? activeHash === "/blog"
          : activeHash === link.path.replace("/", "");

        return (
          <Link
            href={link.path}
            key={index}
            onClick={() => setActiveHash(isJournal ? "/blog" : link.path.replace("/", ""))}
            className={`relative px-4 py-1.5 rounded-full text-xs font-medium tracking-wide transition-all duration-200 ${
              isActive
                ? "text-white bg-white/10 shadow-sm"
                : "text-titanium-400 hover:text-white hover:bg-white/[0.04]"
            }`}
          >
            {link.name}
            {isActive && (
              <span className="absolute -bottom-0.5 left-1/2 -translate-x-1/2 w-3 h-0.5 rounded-full bg-accent" />
            )}
          </Link>
        );
      })}
    </nav>
  );
};

export default Nav;
