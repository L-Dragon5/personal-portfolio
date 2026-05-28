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
    "I'm a full-stack web developer with a frontend focus. I build high-quality, responsive products and care about the details that make an interface feel good to use.",
    "Most of my recent work is in TypeScript and React, backed by Laravel, Bun, and ElysiaJS. I move quickly across unfamiliar codebases and like setting the standards that keep a frontend healthy as a team grows.",
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
];
