import photoPortfolioImg from "@/assets/work/photo-portfolio.jpg";
import portfolioImg from "@/assets/work/portfolio.jpg";

export interface Project {
  name: string;
  /** Tech-forward one-liner — lead with the engineering, not the niche. */
  tagline: string;
  stack: string[];
  repoUrl?: string;
  liveUrl?: string;
  /** Accent color (any CSS color) used for the card's glow + banner. */
  accent: string;
  /** Imported screenshot; falls back to a generated gradient banner. */
  image?: string;
  /** Set on private/unverified entries so the UI can flag "details coming". */
  draft?: boolean;
}

// NOTE: stacks below reflect each repo's primary language plus reasonable
// framework inferences. Refine as needed — FES is a placeholder until the
// private The-Circle-of-Code/fes-web repo can be read (auth gh later).
export const projects: Project[] = [
  {
    name: "Cosplay Classifieds",
    tagline:
      "Full-stack TypeScript marketplace — listings, search, and accounts for buying and selling.",
    stack: ["TypeScript", "React", "Node.js"],
    repoUrl: "https://github.com/L-Dragon5/cosplay-classifieds",
    liveUrl: "https://cosplayclassifieds.com",
    accent: "#ff2e93",
  },
  {
    name: "Cosplay Closet",
    tagline:
      "TypeScript inventory app for cataloging and organizing cosplay builds and their components.",
    stack: ["TypeScript", "React"],
    repoUrl: "https://github.com/L-Dragon5/cosplay-closet",
    accent: "#a855f7",
  },
  {
    name: "Cosplay Taobao",
    tagline:
      "Self-hosted order organizer that parses and tracks Taobao agent hauls on a home network.",
    stack: ["TypeScript", "React"],
    repoUrl: "https://github.com/L-Dragon5/cosplay-taobao",
    accent: "#22d3ee",
  },
  {
    // TODO: fill from The-Circle-of-Code/fes-web once gh is authed
    // (real tagline, stack, and live URL). Do NOT reference fesapp.net or the
    // old L-Dragon5/fan-event-scheduler repo — both are retired.
    name: "FES",
    tagline: "Event-scheduling platform. Details coming soon.",
    stack: ["TypeScript"],
    repoUrl: "https://github.com/The-Circle-of-Code/fes-web",
    accent: "#ffd23f",
    draft: true,
  },
  {
    name: "Photo Portfolio Manager",
    tagline:
      "Self-hosted PHP tool for curating, organizing, and publishing photo portfolios.",
    stack: ["PHP", "Laravel", "MySQL"],
    repoUrl: "https://github.com/L-Dragon5/photo-portfolio-manager",
    accent: "#a3e635",
    image: photoPortfolioImg,
  },
  {
    name: "This Portfolio",
    tagline:
      "The site you're on — Vite, React 19, Tailwind v4, shadcn/ui, and React Bits.",
    stack: ["React", "TypeScript", "Vite", "Tailwind"],
    repoUrl: "https://github.com/L-Dragon5/personal-portfolio",
    liveUrl: "https://joseph-oh.com",
    accent: "#15803d",
    image: portfolioImg,
  },
];
