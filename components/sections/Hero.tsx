"use client";

import { motion } from "framer-motion";

import { Section } from "@/components/ui/Section";
import { getSection } from "@/lib/content";
import { pageEnter, wordReveal, wordRevealContainer } from "@/lib/motion";

const renderWord = (word: string, key: string) => (
  <span
    key={key}
    className="mr-[0.22em] inline-block overflow-hidden pb-[0.08em] align-bottom"
  >
    <motion.span variants={wordReveal} className="inline-block">
      {word}
    </motion.span>
  </span>
);

export function Hero() {
  const data = getSection("hero");
  const firstWords = data.nameFirst.split(" ");
  const lastWords = data.nameLast.split(" ");
  const [beforeAccent, afterAccent] = data.sub.split("{accent}");

  return (
    <Section id={data.id} eyebrow={data.eyebrow}>
      <motion.div
        initial={pageEnter.initial}
        animate={pageEnter.animate}
        transition={pageEnter.transition}
        className="pt-4 md:pt-12"
      >
        <motion.h1
          variants={wordRevealContainer}
          initial="initial"
          animate="animate"
          className="text-display font-serif"
        >
          <span className="block">
            {firstWords.map((w, i) => renderWord(w, `f-${i}`))}
          </span>
          <span className="block font-extralight italic text-bone/95">
            {lastWords.map((w, i) => renderWord(w, `l-${i}`))}
          </span>
        </motion.h1>

        <p className="mt-10 max-w-xl text-body-lg text-bone/80">
          {beforeAccent}
          <a
            href="#fieldbridge"
            className="text-sage underline-offset-4 transition-colors hover:text-bone hover:underline"
          >
            {data.subAccent}
          </a>
          {afterAccent}
        </p>
      </motion.div>
    </Section>
  );
}
