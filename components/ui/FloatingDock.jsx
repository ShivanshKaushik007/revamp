"use client";

import { useRef, useState } from "react";
import {
  AnimatePresence,
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import { LayoutGrid, X } from "lucide-react";
import { cn } from "@/lib/utils";

/**
 * Aceternity UI-inspired macOS-style magnification floating dock,
 * adapted to the portfolio's obsidian surface and signal-amber accent palette.
 */
export function FloatingDock({
  items,
  desktopClassName,
  mobileClassName,
  mobileCollapse = false,
}) {
  return (
    <>
      <FloatingDockDesktop items={items} className={desktopClassName} />
      {mobileCollapse ? (
        <FloatingDockMobileMenu items={items} className={mobileClassName} />
      ) : (
        <FloatingDockMobileBar items={items} className={mobileClassName} />
      )}
    </>
  );
}

function FloatingDockMobileBar({ items, className }) {
  return (
    <div
      className={cn(
        "inline-flex md:hidden items-center gap-2.5 rounded-2xl bg-surface/90 backdrop-blur-md px-3 py-2 border border-surface-border shadow-lg",
        className
      )}
    >
      {items.map((item) => {
        const isExternal = item.href?.startsWith("http");
        return (
          <a
            key={item.title}
            href={item.href}
            target={isExternal ? "_blank" : undefined}
            rel={isExternal ? "noopener noreferrer" : undefined}
            aria-label={item.title}
            title={item.title}
            className="flex h-10 w-10 items-center justify-center rounded-full bg-surface-elevated border border-surface-border text-titanium-300 hover:text-accent hover:border-accent/50 active:scale-95 transition-all"
          >
            <div className="h-4 w-4 flex items-center justify-center">{item.icon}</div>
          </a>
        );
      })}
    </div>
  );
}

function FloatingDockMobileMenu({ items, className }) {
  const [open, setOpen] = useState(false);

  return (
    <div className={cn("relative block md:hidden", className)}>
      <AnimatePresence>
        {open && (
          <motion.div
            layoutId="floating-dock-mobile"
            className="absolute bottom-full mb-2 inset-x-0 flex flex-col gap-2 rounded-2xl bg-surface/95 backdrop-blur-md p-2 border border-surface-border"
          >
            {items.map((item, idx) => {
              const isExternal = item.href?.startsWith("http");
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{
                    opacity: 0,
                    y: 10,
                    transition: { delay: idx * 0.05 },
                  }}
                  transition={{ delay: (items.length - 1 - idx) * 0.05 }}
                >
                  <a
                    href={item.href}
                    target={isExternal ? "_blank" : undefined}
                    rel={isExternal ? "noopener noreferrer" : undefined}
                    aria-label={item.title}
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-surface-elevated border border-surface-border text-titanium-200 hover:text-accent transition-colors"
                  >
                    <div className="h-4 w-4 flex items-center justify-center">{item.icon}</div>
                  </a>
                </motion.div>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        aria-label={open ? "Close social links" : "Open social links"}
        aria-expanded={open}
        className="flex h-10 w-10 items-center justify-center rounded-full bg-surface border border-surface-border text-titanium-300 hover:text-accent transition-colors"
      >
        {open ? <X className="h-4 w-4" /> : <LayoutGrid className="h-4 w-4" />}
      </button>
    </div>
  );
}

function FloatingDockDesktop({ items, className }) {
  const mouseX = useMotionValue(Infinity);

  return (
    <motion.div
      onMouseMove={(e) => mouseX.set(e.clientX)}
      onMouseLeave={() => mouseX.set(Infinity)}
      className={cn(
        "hidden md:inline-flex h-14 gap-3 items-end rounded-2xl bg-surface/90 backdrop-blur-md px-3.5 pb-2.5 border border-surface-border shadow-[0_10px_30px_rgba(0,0,0,0.45)]",
        className
      )}
    >
      {items.map((item) => (
        <DockIconContainer mouseX={mouseX} key={item.title} {...item} />
      ))}
    </motion.div>
  );
}

function DockIconContainer({ mouseX, title, icon, href }) {
  const ref = useRef(null);
  const [hovered, setHovered] = useState(false);

  const distance = useTransform(mouseX, (val) => {
    const bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };
    return val - bounds.x - bounds.width / 2;
  });

  const widthTransform = useTransform(distance, [-140, 0, 140], [38, 66, 38]);
  const heightTransform = useTransform(distance, [-140, 0, 140], [38, 66, 38]);

  const widthTransformIcon = useTransform(distance, [-140, 0, 140], [17, 30, 17]);
  const heightTransformIcon = useTransform(distance, [-140, 0, 140], [17, 30, 17]);

  const springConfig = { mass: 0.1, stiffness: 165, damping: 13 };
  const width = useSpring(widthTransform, springConfig);
  const height = useSpring(heightTransform, springConfig);
  const widthIcon = useSpring(widthTransformIcon, springConfig);
  const heightIcon = useSpring(heightTransformIcon, springConfig);

  const isExternal = href?.startsWith("http");

  return (
    <a
      href={href}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noopener noreferrer" : undefined}
      aria-label={title}
      className="focus:outline-none"
    >
      <motion.div
        ref={ref}
        style={{ width, height }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className="aspect-square rounded-full bg-surface-elevated border border-surface-border hover:border-accent/55 hover:bg-surface-muted text-titanium-300 hover:text-accent flex items-center justify-center relative shadow-md transition-colors"
      >
        <AnimatePresence>
          {hovered && (
            <motion.div
              initial={{ opacity: 0, y: 8, x: "-50%" }}
              animate={{ opacity: 1, y: 0, x: "-50%" }}
              exit={{ opacity: 0, y: 3, x: "-50%" }}
              transition={{ duration: 0.14 }}
              className="px-2.5 py-1 whitespace-pre rounded-md bg-surface-elevated border border-surface-border text-titanium-50 font-mono text-[11px] absolute left-1/2 -top-9 w-fit shadow-lg pointer-events-none"
            >
              {title}
            </motion.div>
          )}
        </AnimatePresence>
        <motion.div
          style={{ width: widthIcon, height: heightIcon }}
          className="flex items-center justify-center"
        >
          {icon}
        </motion.div>
      </motion.div>
    </a>
  );
}

export default FloatingDock;
