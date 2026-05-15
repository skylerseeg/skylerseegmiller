"use client";

import { motion } from "framer-motion";

import { ScreenshotHolder } from "@/components/ui/ScreenshotHolder";
import { Section } from "@/components/ui/Section";
import { getSection } from "@/lib/content";
import { fadeUp } from "@/lib/motion";
import { cn } from "@/lib/utils";

export function FieldBridge() {
  const data = getSection("fieldbridge");

  return (
    <Section id={data.id} eyebrow={data.eyebrow}>
      <div className="space-y-28 md:space-y-40">
        {data.features.map((feature, i) => {
          const reverse = i % 2 === 1;
          return (
            <motion.article
              key={feature.id}
              initial={fadeUp.initial}
              whileInView={fadeUp.whileInView}
              viewport={fadeUp.viewport}
              transition={fadeUp.transition}
              className={cn(
                "grid items-center gap-10 md:grid-cols-2 md:gap-16",
                reverse && "md:[&>*:first-child]:order-2"
              )}
            >
              <div className="space-y-5 md:max-w-md">
                <span className="font-mono text-caption uppercase text-sage-muted">
                  {String(i + 1).padStart(2, "0")} · {feature.title}
                </span>
                <h3 className="text-heading font-serif font-light">
                  {feature.title}
                </h3>
                <p className="text-body-lg text-bone/75">
                  {feature.description}
                </p>
              </div>

              <ScreenshotHolder
                desktopImages={feature.desktopImages}
                mobileImages={feature.mobileImages}
                priority={i === 0}
              />
            </motion.article>
          );
        })}
      </div>
    </Section>
  );
}
