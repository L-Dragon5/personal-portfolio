import { Reveal } from "@/components/Reveal";
import { Section } from "@/components/Section";
import { experience } from "@/data/resume";

export function Experience() {
  return (
    <Section
      id="experience"
      eyebrow="02 / Experience"
      title={
        <>
          Where I&apos;ve <span className="text-gradient">shipped</span>.
        </>
      }
    >
      <ol className="relative ml-3 border-l border-border">
        {experience.map((role, i) => (
          <li
            key={`${role.company}-${role.title}`}
            className="relative pb-12 pl-8 last:pb-0"
          >
            <Reveal delay={i * 0.05}>
              {/* node */}
              <span className="absolute -left-[7px] top-1.5 size-3.5 rounded-full bg-gradient-to-br from-forest to-emerald ring-4 ring-background" />
              <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                <h3 className="text-xl font-semibold">
                  {role.title}{" "}
                  <span className="text-muted-foreground">
                    · {role.company}
                  </span>
                </h3>
                <span className="font-mono text-sm text-muted-foreground">
                  {role.period}
                </span>
              </div>
              <ul className="mt-3 flex flex-col gap-2 text-muted-foreground">
                {role.points.map((point) => (
                  <li key={point.slice(0, 28)} className="flex gap-2.5">
                    <span className="mt-2.5 size-1.5 shrink-0 rounded-full bg-amber" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
          </li>
        ))}
      </ol>
    </Section>
  );
}
