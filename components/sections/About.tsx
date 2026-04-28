"use client";

import { motion, type Variants } from "framer-motion";

import { Section } from "@/components/ui/Section";
import { getSection } from "@/lib/content";
import { cn } from "@/lib/utils";

const easeOutExpo: [number, number, number, number] = [0.22, 1, 0.36, 1];

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15 },
  },
};

const paragraphVariants: Variants = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: easeOutExpo },
  },
};

export function About() {
  const data = getSection("about");

  return (
    <Section id={data.id} eyebrow={data.eyebrow}>
      <div className="grid gap-8 md:grid-cols-[auto_1fr] md:gap-16">
        <div className="text-caption font-sans uppercase text-sage-muted md:pt-3">
          {data.index}
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="max-w-3xl space-y-10"
        >
          {data.paragraphs.map((paragraph, i) => (
            <motion.p
              key={i}
              variants={paragraphVariants}
              className={cn(
                "text-heading font-serif font-light",
                paragraph.italic && "italic",
                paragraph.muted ? "text-bone/60" : "text-bone"
              )}
            >
              {paragraph.text}
            </motion.p>
          ))}
        </motion.div>
      </div>
    </Section>
  );
}
