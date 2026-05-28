/** Single source of truth for the bio / experience / skills content.
 *  Sourced from Joseph's 2026 resume. */

export const profile = {
  name: "Joseph Oh",
  handle: "L-Dragon5",
  role: "Full-stack Web Developer",
  tagline: "TypeScript · React · Laravel",
  location: "Remote",
  email: "me@joseph-oh.com",
  github: "https://github.com/L-Dragon5",
  resume:
    "https://docs.google.com/document/d/e/2PACX-1vR6GtezGh7XRZroTFWu3e8y28yFAsI42ERn09YmwpL3ol3lJkA2dJBjwQFbqLCfwkufohavmBdVitAO/pub",
  blurb: [
    "I'm a full-stack developer who lives mostly on the frontend. I like building things people actually want to use, and I sweat the small interactions most teams skip past.",
    "Lately that's TypeScript and React on top of Laravel, Bun, and ElysiaJS. I'm comfortable dropping into a codebase I've never seen, and I'm usually the person who sets the conventions that keep a frontend from rotting as the team grows.",
    "I also build with AI in the loop every day. Claude Code handles a lot of my scaffolding, refactors, and first-pass code review, so I can move fast and spend my time on the harder design and architecture calls. When an app needs AI features of its own, I reach for Gemini and other models through their APIs.",
  ],
} as const;

export interface Role {
  company: string;
  title: string;
  period: string;
  points: string[];
}

/** Most recent first. */
export const experience: Role[] = [
  {
    company: "EverTrue",
    title: "External Integrations Developer",
    period: "Aug 2025 — Present",
    points: [
      "Maintain five legacy CRM integrations across C#, ASP.NET, SQL Server, and React.",
      "Building a new REST API in TypeScript on Bun with ElysiaJS.",
      "Modernizing frontends by converting class-based React components to hooks.",
    ],
  },
  {
    company: "EverTrue",
    title: "Lead Frontend Developer",
    period: "Jan 2024 — Aug 2025",
    points: [
      "Led a team of three through a UI migration from ChakraUI v2 to Mantine v7 across 50+ components and 20+ pages.",
      "Set frontend architecture standards and code-review practices.",
    ],
  },
  {
    company: "EverTrue",
    title: "Product Engineer",
    period: "Apr 2021 — Jan 2024",
    points: [
      "Kicked off a ground-up rewrite on a Laravel backend with a Next.js frontend.",
      "Established coding standards and test infrastructure with PHPUnit, Vitest, and Playwright.",
    ],
  },
  {
    company: "Mediacurrent",
    title: "Drupal Developer",
    period: "Jun 2019 — Feb 2021",
    points: ["Full-stack PHP development across Drupal 7 and 8 projects."],
  },
  {
    company: "GeekHive",
    title: "Developer",
    period: "May 2018 — Apr 2019",
    points: [
      "Full-stack WordPress and Drupal 8 projects; helped oversee developer hiring.",
    ],
  },
];

export const education = {
  school: "Rochester Institute of Technology",
  degree: "B.S. in Web & Mobile Computing",
} as const;

export interface SkillGroup {
  label: string;
  items: string[];
}

export const skills: SkillGroup[] = [
  {
    label: "Languages",
    items: ["TypeScript", "JavaScript", "PHP", "SQL", "HTML", "CSS"],
  },
  {
    label: "Frameworks",
    items: ["React", "Next.js", "Laravel", "Mantine", "Inertia.js", "ElysiaJS"],
  },
  {
    label: "Data & Infra",
    items: [
      "PostgreSQL",
      "MySQL",
      "SQLite",
      "Redis",
      "S3",
      "Docker",
      "GitHub Actions",
    ],
  },
  {
    label: "Testing",
    items: ["Vitest", "Playwright", "MSW", "PHPUnit"],
  },
  {
    label: "Tooling",
    items: ["Node.js", "Bun", "Vite", "Biome"],
  },
  {
    label: "AI",
    items: ["Claude Code", "Gemini", "LLM APIs"],
  },
];

/** Flat marquee list for the LogoLoop. */
export const techMarquee: string[] = [
  "TypeScript",
  "React",
  "Laravel",
  "Next.js",
  "Bun",
  "ElysiaJS",
  "Mantine",
  "Vite",
  "PostgreSQL",
  "Redis",
  "Docker",
  "Playwright",
  "Vitest",
  "Node.js",
  "Claude Code",
  "Gemini",
];
