import { GraduationCap, MapPin } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { Section } from "@/components/Section";
import { education, profile } from "@/data/resume";

export function About() {
  return (
    <Section
      id="about"
      eyebrow="01 / About"
      title={
        <>
          I build products that are{" "}
          <span className="text-gradient">fast, polished, and fun</span> to use.
        </>
      }
    >
      <div className="grid gap-10 md:grid-cols-[1.5fr_1fr]">
        <Reveal delay={0.05}>
          <div className="flex flex-col gap-5 text-lg leading-relaxed text-muted-foreground">
            {profile.blurb.map((para) => (
              <p key={para.slice(0, 24)}>{para}</p>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.15}>
          <dl className="flex flex-col gap-5 rounded-xl border border-border bg-card/50 p-6 font-mono text-sm">
            <div className="flex items-start gap-3">
              <GraduationCap className="mt-0.5 size-5 shrink-0 text-cyan" />
              <div>
                <dt className="text-foreground">{education.degree}</dt>
                <dd className="text-muted-foreground">{education.school}</dd>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <MapPin className="mt-0.5 size-5 shrink-0 text-pink" />
              <div>
                <dt className="text-foreground">Based remote</dt>
                <dd className="text-muted-foreground">
                  Working with teams anywhere
                </dd>
              </div>
            </div>
          </dl>
        </Reveal>
      </div>
    </Section>
  );
}
