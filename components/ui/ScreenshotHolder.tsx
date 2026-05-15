"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

import type { FieldBridgeImage } from "@/lib/content";
import { useReducedMotion } from "@/lib/motion";
import { cn } from "@/lib/utils";

const CYCLE_MS = 4200;
const FADE: [number, number, number, number] = [0.22, 1, 0.36, 1];

interface ScreenshotHolderProps {
  desktopImages: FieldBridgeImage[];
  mobileImages?: FieldBridgeImage[];
  priority?: boolean;
}

export function ScreenshotHolder({
  desktopImages,
  mobileImages,
  priority,
}: ScreenshotHolderProps) {
  const hasMobile = (mobileImages?.length ?? 0) > 0;

  return (
    <div className="relative">
      <DesktopFrame
        images={desktopImages}
        priority={priority}
        offsetForPhone={hasMobile}
      />
      {hasMobile ? <PhoneFrame images={mobileImages!} /> : null}
    </div>
  );
}

function DesktopFrame({
  images,
  priority,
  offsetForPhone,
}: {
  images: FieldBridgeImage[];
  priority?: boolean;
  offsetForPhone: boolean;
}) {
  const { index, setIndex, multi, frameProps } = useCycle(images.length);

  return (
    <div
      {...frameProps}
      className={cn("relative", offsetForPhone && "md:pr-20 lg:pr-28")}
    >
      <div className="relative overflow-hidden rounded-xl border border-bone/10 bg-ink shadow-[0_30px_80px_-40px_rgba(0,0,0,0.8)]">
        <div className="relative aspect-[16/9] w-full">
          {images.map((img, i) => (
            <motion.div
              key={img.src}
              animate={{ opacity: i === index ? 1 : 0 }}
              transition={{ duration: 0.7, ease: FADE }}
              className="absolute inset-0"
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                priority={priority && i === 0}
                sizes="(min-width: 1024px) 620px, (min-width: 640px) 80vw, 100vw"
                className="object-cover object-top"
              />
            </motion.div>
          ))}
        </div>
      </div>
      {multi ? (
        <Pagination count={images.length} index={index} onSelect={setIndex} />
      ) : null}
    </div>
  );
}

function PhoneFrame({ images }: { images: FieldBridgeImage[] }) {
  const { index, setIndex, multi, frameProps } = useCycle(images.length);

  return (
    <div
      {...frameProps}
      className={cn(
        "mt-6 flex items-center gap-4",
        "md:absolute md:right-0 md:top-1/2 md:mt-0 md:-translate-y-1/2",
        "md:flex-col md:items-end"
      )}
    >
      <div className="relative w-32 shrink-0 overflow-hidden rounded-[1.75rem] border border-bone/15 bg-ink shadow-[0_20px_50px_-25px_rgba(0,0,0,0.9)] md:w-36 lg:w-40">
        <div className="relative aspect-[9/19] w-full">
          {images.map((img, i) => (
            <motion.div
              key={img.src}
              animate={{ opacity: i === index ? 1 : 0 }}
              transition={{ duration: 0.7, ease: FADE }}
              className="absolute inset-0"
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                sizes="160px"
                className="object-cover object-top"
              />
            </motion.div>
          ))}
        </div>
      </div>
      {multi ? (
        <Pagination
          count={images.length}
          index={index}
          onSelect={setIndex}
          vertical
        />
      ) : null}
    </div>
  );
}

function useCycle(length: number) {
  const reduce = useReducedMotion();
  const [index, setIndex] = useState(0);
  const inViewRef = useRef(false);
  const hoveredRef = useRef(false);
  const elRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (length <= 1 || reduce) return;
    const el = elRef.current;
    if (!el) return;

    const io = new IntersectionObserver(
      ([entry]) => {
        inViewRef.current = entry.isIntersecting;
      },
      { threshold: 0.25 }
    );
    io.observe(el);

    const tick = window.setInterval(() => {
      if (!inViewRef.current || hoveredRef.current) return;
      if (document.visibilityState !== "visible") return;
      setIndex((i) => (i + 1) % length);
    }, CYCLE_MS);

    return () => {
      io.disconnect();
      window.clearInterval(tick);
    };
  }, [length, reduce]);

  return {
    index,
    setIndex,
    multi: length > 1,
    frameProps: {
      ref: elRef,
      onMouseEnter: () => {
        hoveredRef.current = true;
      },
      onMouseLeave: () => {
        hoveredRef.current = false;
      },
    },
  };
}

function Pagination({
  count,
  index,
  onSelect,
  vertical,
}: {
  count: number;
  index: number;
  onSelect: (i: number) => void;
  vertical?: boolean;
}) {
  return (
    <div
      className={cn(
        "mt-4 flex justify-center gap-1.5",
        vertical && "mt-0 flex-col"
      )}
    >
      {Array.from({ length: count }).map((_, i) => (
        <button
          key={i}
          type="button"
          aria-label={`Show screenshot ${i + 1} of ${count}`}
          aria-current={i === index ? "true" : undefined}
          onClick={() => onSelect(i)}
          className={cn(
            "rounded-full transition-all duration-300",
            vertical ? "h-1.5 w-1.5" : "h-1 w-6",
            i === index ? "bg-sage" : "bg-bone/20 hover:bg-bone/40"
          )}
        />
      ))}
    </div>
  );
}
