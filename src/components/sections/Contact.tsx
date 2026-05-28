import { ArrowUpRight, FileText, Github, Mail } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { Button } from "@/components/ui/button";
import { profile } from "@/data/resume";

const links = [
  {
    label: "Email",
    value: profile.email,
    href: `mailto:${profile.email}`,
    icon: Mail,
  },
  {
    label: "GitHub",
    value: `@${profile.handle}`,
    href: profile.github,
    icon: Github,
    external: true,
  },
  {
    label: "Résumé",
    value: "View / download",
    href: profile.resume,
    icon: FileText,
    external: true,
  },
];

export function Contact() {
  return (
    <section
      id="contact"
      className="mx-auto w-full max-w-6xl scroll-mt-24 px-6 py-24 sm:px-8 md:py-32"
    >
      <Reveal>
        <div className="relative overflow-hidden rounded-3xl border border-border bg-card/50 px-6 py-16 text-center sm:px-12">
          <div className="pointer-events-none absolute inset-0 -z-10 opacity-60 [background:radial-gradient(40rem_20rem_at_50%_-20%,color-mix(in_oklch,var(--pink)_30%,transparent),transparent)]" />
          <p className="mb-3 font-mono text-sm tracking-[0.25em] text-primary uppercase">
            05 / Contact
          </p>
          <h2 className="mx-auto max-w-2xl text-4xl font-bold text-balance md:text-5xl">
            Like what you see?{" "}
            <span className="text-gradient">Let&apos;s talk.</span>
          </h2>
          <p className="mx-auto mt-5 max-w-md text-lg text-muted-foreground">
            I'm always open to interesting problems and good teams. The fastest
            way to reach me is email.
          </p>

          <div className="mt-9 flex flex-wrap justify-center gap-3">
            <Button asChild size="lg">
              <a href={`mailto:${profile.email}`}>
                <Mail data-icon="inline-start" />
                {profile.email}
              </a>
            </Button>
          </div>

          <div className="mx-auto mt-12 grid max-w-2xl gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-3">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.external ? "_blank" : undefined}
                rel={link.external ? "noreferrer" : undefined}
                className="group flex flex-col items-center gap-2 bg-card/60 p-6 transition-colors hover:bg-card"
              >
                <link.icon className="size-5 text-muted-foreground transition-colors group-hover:text-primary" />
                <span className="font-mono text-xs tracking-widest text-muted-foreground uppercase">
                  {link.label}
                </span>
                <span className="inline-flex items-center gap-1 text-sm font-medium">
                  {link.value}
                  {link.external && (
                    <ArrowUpRight className="size-3.5 opacity-60" />
                  )}
                </span>
              </a>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  );
}
