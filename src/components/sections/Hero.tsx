import { ArrowDown, FileText, Github, Mail } from "lucide-react";
import { motion } from "motion/react";
import { lazy, Suspense } from "react";
import GradientText from "@/components/reactbits/GradientText";
import SplitText from "@/components/reactbits/SplitText";
import { Button } from "@/components/ui/button";
import { profile } from "@/data/resume";

// Aurora pulls in OGL (WebGL); it's purely decorative, so load it lazily after
// the page renders rather than in the initial bundle.
const Aurora = lazy(() => import("@/components/reactbits/Aurora"));

export function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-dvh flex-col items-center justify-center overflow-hidden px-6 text-center"
    >
      {/* WebGL aurora wash, kept behind content; loaded lazily */}
      <div className="pointer-events-none absolute inset-0 -z-10 opacity-50">
        <Suspense fallback={null}>
          <Aurora
            colorStops={["#ff2e93", "#22d3ee", "#a855f7"]}
            amplitude={1.1}
            blend={0.6}
            speed={0.8}
          />
        </Suspense>
      </div>
      <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-background/30 via-background/55 to-background" />

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="mb-7 inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-4 py-1.5 font-mono text-xs text-muted-foreground backdrop-blur"
      >
        <span className="relative flex size-2">
          <span className="absolute inline-flex size-full animate-ping rounded-full bg-lime opacity-75" />
          <span className="relative inline-flex size-2 rounded-full bg-lime" />
        </span>
        Building APIs &amp; frontends @ EverTrue
      </motion.div>

      <GradientText
        colors={["#15803d", "#10b981", "#0891b2", "#7c3aed", "#15803d"]}
        animationSpeed={7}
        className="!max-w-none font-display text-6xl font-extrabold tracking-tight sm:text-7xl md:text-8xl"
      >
        {profile.name}
      </GradientText>

      <SplitText
        text={profile.role}
        tag="h1"
        className="mt-4 font-display text-2xl font-semibold text-foreground/90 sm:text-3xl md:text-4xl"
        delay={28}
        duration={0.8}
        splitType="chars"
        from={{ opacity: 0, y: 30 }}
        to={{ opacity: 1, y: 0 }}
      />

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.8 }}
        className="mt-5 max-w-xl font-mono text-sm text-muted-foreground sm:text-base"
      >
        {profile.tagline}
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.7 }}
        className="mt-10 flex flex-wrap items-center justify-center gap-3"
      >
        <Button asChild size="lg" className="font-medium">
          <a href="#projects">
            <ArrowDown data-icon="inline-start" />
            View my projects
          </a>
        </Button>
        <Button asChild size="lg" variant="secondary">
          <a href="#contact">
            <Mail data-icon="inline-start" />
            Get in touch
          </a>
        </Button>
        <Button asChild size="lg" variant="ghost">
          <a href={profile.resume} target="_blank" rel="noreferrer">
            <FileText data-icon="inline-start" />
            Résumé
          </a>
        </Button>
        <Button asChild size="icon" variant="ghost" aria-label="GitHub">
          <a href={profile.github} target="_blank" rel="noreferrer">
            <Github />
          </a>
        </Button>
      </motion.div>

      <motion.a
        href="#about"
        aria-label="Scroll to about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 1 }}
        className="absolute bottom-8 text-muted-foreground"
      >
        <ArrowDown className="size-5 animate-bounce" />
      </motion.a>
    </section>
  );
}
