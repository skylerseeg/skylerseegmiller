import * as React from "react";

import { cn } from "@/lib/utils";

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  id: string;
  eyebrow?: string;
}

export const Section = React.forwardRef<HTMLElement, SectionProps>(
  ({ id, eyebrow, className, children, ...props }, ref) => {
    return (
      <section
        ref={ref}
        id={id}
        className={cn(
          "min-h-screen w-full snap-start scroll-mt-24",
          "mx-auto max-w-5xl",
          "px-section-x py-24 md:py-36",
          className
        )}
        {...props}
      >
        {eyebrow ? (
          <div className="mb-10 flex items-center gap-3 text-sage-muted">
            <span
              aria-hidden
              className="inline-block h-1.5 w-1.5 rounded-full bg-sage"
            />
            <span className="text-caption font-sans uppercase">{eyebrow}</span>
          </div>
        ) : null}
        {children}
      </section>
    );
  }
);
Section.displayName = "Section";
