import { ArrowUpRight, Github } from "lucide-react";
import { type CSSProperties, type PointerEvent, useRef } from "react";
import { Reveal } from "@/components/Reveal";
import { Section } from "@/components/Section";
import { Badge } from "@/components/ui/badge";
import { type Project, projects } from "@/data/projects";
import { cn } from "@/lib/utils";

function ProjectCard({ project }: { project: Project }) {
  const ref = useRef<HTMLElement>(null);

  // pointer-following spotlight tinted with the project's accent
  const handleMove = (e: PointerEvent<HTMLElement>) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    el.style.setProperty("--mx", `${e.clientX - rect.left}px`);
    el.style.setProperty("--my", `${e.clientY - rect.top}px`);
  };

  return (
    <article
      ref={ref}
      onPointerMove={handleMove}
      style={{ "--accent": project.accent } as CSSProperties}
      className="group relative flex flex-col overflow-hidden rounded-2xl border border-border bg-card/60 transition-transform duration-300 hover:-translate-y-1"
    >
      {/* spotlight glow */}
      <div
        className="pointer-events-none absolute inset-0 z-10 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background:
            "radial-gradient(420px circle at var(--mx) var(--my), color-mix(in oklch, var(--accent) 22%, transparent), transparent 60%)",
        }}
      />

      {/* banner: screenshot if available, else an accent gradient */}
      <div className="relative aspect-[16/9] overflow-hidden">
        {project.image ? (
          <img
            src={project.image}
            alt={`${project.name} screenshot`}
            loading="lazy"
            className="size-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div
            className="flex size-full items-center justify-center"
            style={{
              background:
                "linear-gradient(135deg, color-mix(in oklch, var(--accent) 70%, black), color-mix(in oklch, var(--accent) 25%, black))",
            }}
          >
            <span className="font-display text-2xl font-bold text-white/90">
              {project.name}
            </span>
          </div>
        )}
        <span
          className="absolute inset-x-0 bottom-0 h-px"
          style={{ background: "var(--accent)" }}
        />
      </div>

      <div className="relative z-20 flex flex-1 flex-col gap-4 p-6">
        <div className="flex items-center justify-between gap-3">
          <h3 className="font-display text-xl font-bold">{project.name}</h3>
          {project.draft && (
            <Badge
              variant="outline"
              className="shrink-0 font-mono text-[0.7rem] text-muted-foreground"
            >
              details soon
            </Badge>
          )}
        </div>

        <p className="flex-1 text-muted-foreground">{project.tagline}</p>

        <div className="flex flex-wrap gap-1.5">
          {project.stack.map((tech) => (
            <Badge key={tech} variant="secondary" className="font-mono text-xs">
              {tech}
            </Badge>
          ))}
        </div>

        <div className="mt-1 flex items-center gap-4 font-mono text-sm">
          {project.repoUrl && (
            <a
              href={project.repoUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 text-muted-foreground transition-colors hover:text-foreground"
            >
              <Github className="size-4" />
              Code
            </a>
          )}
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer"
              className={cn(
                "inline-flex items-center gap-1 font-medium transition-colors",
                "text-foreground hover:text-primary",
              )}
            >
              Live site
              <ArrowUpRight className="size-4" />
            </a>
          )}
        </div>
      </div>
    </article>
  );
}

export function Projects() {
  return (
    <Section
      id="work"
      eyebrow="04 / Selected Work"
      title={
        <>
          Things I&apos;ve <span className="text-gradient">built</span>.
        </>
      }
    >
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, i) => (
          <Reveal key={project.name} delay={(i % 3) * 0.08}>
            <div className="h-full">
              <ProjectCard project={project} />
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
