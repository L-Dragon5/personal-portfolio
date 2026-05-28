import type { ReactNode } from "react";
import { Reveal } from "@/components/Reveal";
import { cn } from "@/lib/utils";

interface SectionProps {
  id: string;
  /** Small mono kicker shown above the title. */
  eyebrow: string;
  title: ReactNode;
  children: ReactNode;
  className?: string;
}

export function Section({
  id,
  eyebrow,
  title,
  children,
  className,
}: SectionProps) {
  return (
    <section
      id={id}
      className={cn(
        "mx-auto w-full max-w-6xl scroll-mt-24 px-6 py-24 sm:px-8 md:py-32",
        className,
      )}
    >
      <Reveal className="mb-12 md:mb-16">
        <p className="mb-3 font-mono text-sm tracking-[0.25em] text-primary uppercase">
          {eyebrow}
        </p>
        <h2 className="max-w-3xl text-4xl font-bold text-balance md:text-5xl">
          {title}
        </h2>
      </Reveal>
      {children}
    </section>
  );
}
