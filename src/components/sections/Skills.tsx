import { Reveal } from "@/components/Reveal";
import { LogoLoop } from "@/components/reactbits/LogoLoop";
import { Section } from "@/components/Section";
import { Badge } from "@/components/ui/badge";
import { skills, techMarquee } from "@/data/resume";

const marqueeLogos = techMarquee.map((tech) => ({
  node: (
    <span className="font-mono text-lg font-medium text-foreground/80">
      {tech}
    </span>
  ),
  title: tech,
}));

export function Skills() {
  return (
    <Section
      id="skills"
      eyebrow="03 / Skills"
      title={
        <>
          The <span className="text-gradient">toolbox</span>.
        </>
      }
    >
      <Reveal>
        <div className="mb-14 rounded-xl border border-border bg-card/40 py-6">
          <LogoLoop
            logos={marqueeLogos}
            speed={70}
            gap={56}
            logoHeight={28}
            pauseOnHover
            scaleOnHover
            fadeOut
            fadeOutColor="oklch(1 0 0)"
            ariaLabel="Technologies I work with"
          />
        </div>
      </Reveal>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {skills.map((group, i) => (
          <Reveal
            key={group.label}
            delay={i * 0.05}
            className="rounded-xl border border-border bg-card/60"
          >
            <div className="flex h-full flex-col gap-4 p-6">
              <h3 className="font-mono text-sm tracking-widest text-primary uppercase">
                {group.label}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <Badge key={item} variant="secondary" className="font-mono">
                    {item}
                  </Badge>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
