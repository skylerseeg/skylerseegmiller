"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useState } from "react";

import { SECTIONS } from "@/lib/content";
import { useReducedMotion } from "@/lib/motion";
import { cn } from "@/lib/utils";

export function SiteNav() {
  const reduce = useReducedMotion();
  const { scrollY, scrollYProgress } = useScroll();

  const bgOpacity = useTransform(
    scrollY,
    reduce ? [239, 240] : [200, 280],
    [0, 1]
  );
  const progressHeight = useTransform(
    scrollYProgress,
    [0, 1],
    ["0%", "100%"]
  );

  const [activeId, setActiveId] = useState<string>(SECTIONS[0].id);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: "-50% 0px -50% 0px", threshold: 0 }
    );

    const observed: Element[] = [];
    SECTIONS.forEach((s) => {
      const el = document.getElementById(s.id);
      if (el) {
        observer.observe(el);
        observed.push(el);
      }
    });

    return () => {
      observed.forEach((el) => observer.unobserve(el));
      observer.disconnect();
    };
  }, []);

  const handleDotClick = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;
    el.scrollIntoView({ behavior: reduce ? "auto" : "smooth", block: "start" });
  };

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50">
        <motion.div
          aria-hidden
          style={{ opacity: bgOpacity }}
          className="pointer-events-none absolute inset-0 border-b border-bone/10 bg-ink/80 backdrop-blur-md"
        />
        <div className="relative mx-auto flex max-w-5xl items-center justify-between px-section-x py-6">
          <div className="flex items-center gap-2.5 font-mono text-caption uppercase text-bone">
            <span aria-hidden className="h-1.5 w-1.5 rounded-full bg-sage" />
            <span>Skyler Seegmiller</span>
          </div>
          <span className="font-mono text-caption uppercase text-bone/60">
            Est. Utah
          </span>
        </div>
      </header>

      <nav
        aria-label="Section navigation"
        className="fixed right-6 top-1/2 z-40 hidden -translate-y-1/2 lg:block"
      >
        <ul className="flex flex-col gap-4">
          {SECTIONS.map((s) => {
            const active = activeId === s.id;
            return (
              <li key={s.id}>
                <button
                  type="button"
                  aria-label={`Scroll to ${s.id}`}
                  aria-current={active ? "true" : undefined}
                  onClick={() => handleDotClick(s.id)}
                  className={cn(
                    "block h-1.5 w-1.5 rounded-full transition-all duration-300",
                    "hover:scale-150",
                    active ? "bg-sage" : "bg-bone/30"
                  )}
                />
              </li>
            );
          })}
        </ul>
      </nav>

      <div
        aria-hidden
        className="fixed bottom-0 right-2 top-0 z-40 w-px bg-bone/10 lg:hidden"
      >
        <motion.div
          style={{ height: progressHeight }}
          className="w-full bg-sage"
        />
      </div>
    </>
  );
}
