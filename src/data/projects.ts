import cosplayClassifiedsImg from "@/assets/work/cosplay-classifieds.webp";
import cosplayClosetImg from "@/assets/work/cosplay-closet.webp";
import cosplayTaobaoImg from "@/assets/work/cosplay-taobao.webp";
import fesuiteImg from "@/assets/work/fesuite.webp";
import photoPortfolioImg from "@/assets/work/photo-portfolio-manager.webp";
import portfolioImg from "@/assets/work/this-portfolio.webp";

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
  /** Private repo — the card shows "Code available on request" instead of a link. */
  private?: boolean;
}

// Stacks are taken from each repo's README / package.json.
export const projects: Project[] = [
  {
    // Private repo (The-Circle-of-Code/fes-web). Frontend to a Laravel API
    // (fes-rest). No public live URL yet.
    name: "FESuite",
    tagline:
      "Event-management platform with ticketed checkout, organizer dashboards, and partner portals. React 19 + TanStack Router frontend on a Laravel API.",
    stack: [
      "React",
      "TypeScript",
      "TanStack Router",
      "TanStack Query",
      "Mantine",
      "Stripe",
      "Jotai",
      "Zod",
      "Vite",
      "Cloudflare",
      "Playwright",
      "Biome",
    ],
    repoUrl: "https://github.com/The-Circle-of-Code/fes-web",
    accent: "#ffd23f",
    image: fesuiteImg,
    private: true,
  },
  {
    name: "Cosplay Classifieds",
    tagline:
      "Full-stack marketplace with listings, real-time messaging, and Stripe checkout. Laravel API with a React/Inertia frontend.",
    stack: [
      "Laravel",
      "PHP",
      "React",
      "Inertia.js",
      "Mantine",
      "Laravel Reverb",
      "Stripe",
      "Jotai",
      "Pest",
      "Biome",
    ],
    repoUrl: "https://github.com/L-Dragon5/cosplay-classifieds",
    liveUrl: "https://cosplayclassifieds.com",
    accent: "#ff2e93",
    image: cosplayClassifiedsImg,
  },
  {
    name: "Photo Portfolio Manager",
    tagline:
      "Self-hosted Laravel tool for curating, organizing, and publishing photo portfolios. Deployed on Fly.io with media on S3.",
    stack: [
      "Laravel",
      "PHP",
      "React",
      "Inertia.js",
      "Mantine",
      "Spatie Media Library",
      "S3",
      "Fly.io",
    ],
    repoUrl: "https://github.com/L-Dragon5/photo-portfolio-manager",
    accent: "#a3e635",
    image: photoPortfolioImg,
  },
  {
    name: "Cosplay Closet",
    tagline:
      "Inventory app for cataloging and organizing cosplay builds and their components. Bun + Elysia API with a TanStack Router frontend.",
    stack: [
      "Bun",
      "Elysia",
      "React",
      "TypeScript",
      "TanStack Router",
      "TanStack Query",
      "Mantine",
      "Jotai",
      "Biome",
    ],
    repoUrl: "https://github.com/L-Dragon5/cosplay-closet",
    accent: "#a855f7",
    image: cosplayClosetImg,
  },
  {
    name: "Cosplay Taobao",
    tagline:
      "Self-hosted organizer that parses Taobao listings into a searchable grid. Bun + Elysia API, compiled to a single Linux binary.",
    stack: [
      "Bun",
      "Elysia",
      "React",
      "TypeScript",
      "TanStack Router",
      "TanStack Query",
      "Mantine",
      "MySQL",
      "Biome",
    ],
    repoUrl: "https://github.com/L-Dragon5/cosplay-taobao",
    accent: "#22d3ee",
    image: cosplayTaobaoImg,
  },
  {
    name: "This Portfolio",
    tagline:
      "The site you're on, built with Vite, React 19, Tailwind v4, shadcn/ui, and React Bits.",
    stack: [
      "React",
      "TypeScript",
      "Vite",
      "Tailwind",
      "shadcn/ui",
      "React Bits",
      "Motion",
      "Biome",
      "Bun",
    ],
    repoUrl: "https://github.com/L-Dragon5/personal-portfolio",
    liveUrl: "https://joseph-oh.com",
    accent: "#15803d",
    image: portfolioImg,
  },
];
