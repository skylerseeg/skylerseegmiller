"use client";

import { ArrowUpRight } from "lucide-react";
import { motion, type Variants } from "framer-motion";

import { Section } from "@/components/ui/Section";
import { getSection } from "@/lib/content";

const easeOutExpo: [number, number, number, number] = [0.22, 1, 0.36, 1];

const gridVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: easeOutExpo,
      staggerChildren: 0.08,
    },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: easeOutExpo },
  },
};

export function Connect() {
  const data = getSection("connect");

  return (
    <Section id={data.id} eyebrow={data.eyebrow}>
      <div className="grid gap-8 md:grid-cols-[auto_1fr] md:gap-16">
        <div className="text-caption font-sans uppercase text-sage-muted md:pt-3">
          {data.index}
        </div>

        <div className="space-y-12">
          <h2 className="text-display font-serif font-light">
            {data.headline}{" "}
            <span className="italic">{data.headlineEmphasis}</span>
          </h2>

          <motion.ul
            variants={gridVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 gap-px bg-bone/10 md:grid-cols-2"
          >
            {data.cards.map((card) => (
              <motion.li
                key={card.platform}
                variants={cardVariants}
                className="bg-ink"
              >
                <a
                  href={card.href}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="group flex h-full flex-col gap-6 p-8 transition-colors duration-300 hover:bg-bone/[0.04] md:p-10"
                >
                  <div className="flex items-start justify-between gap-6">
                    <h3 className="text-heading font-serif font-light">
                      {card.platform}
                    </h3>
                    <ArrowUpRight
                      aria-hidden
                      strokeWidth={1.25}
                      className="mt-2 h-5 w-5 text-sage transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                    />
                  </div>

                  <p className="text-body text-bone/70">{card.description}</p>

                  <span className="mt-auto pt-4 font-mono text-caption uppercase text-bone/40">
                    {card.handle}
                  </span>
                </a>
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </div>
    </Section>
  );
}
