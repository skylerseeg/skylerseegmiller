"use client";

import { motion } from "framer-motion";

import { Section } from "@/components/ui/Section";
import { getSection } from "@/lib/content";
import { fadeUp } from "@/lib/motion";

export function Building() {
  const data = getSection("building");

  return (
    <Section id={data.id} eyebrow={data.eyebrow}>
      <div className="grid gap-8 md:grid-cols-[auto_1fr] md:gap-16">
        <div className="text-caption font-sans uppercase text-sage-muted md:pt-3">
          {data.index}
        </div>

        <motion.div
          initial={fadeUp.initial}
          whileInView={fadeUp.whileInView}
          viewport={fadeUp.viewport}
          transition={fadeUp.transition}
          className="space-y-8"
        >
          <h2 className="text-display font-serif font-light">
            {data.headline}
          </h2>

          <p className="max-w-2xl text-body-lg text-bone/75">{data.body}</p>

          <ul className="flex flex-wrap gap-2">
            {data.tags.map((tag) => (
              <li
                key={tag}
                className="rounded-full border border-sage/30 px-3 py-1.5 font-mono text-caption uppercase text-sage-muted"
              >
                {tag}
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </Section>
  );
}
