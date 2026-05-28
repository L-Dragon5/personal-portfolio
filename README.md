# Personal Portfolio — [joseph-oh.com](https://joseph-oh.com/)

My personal portfolio: a single-page site showing who I am, where I've worked, and what I've built.

## Stack

- **[Vite](https://vite.dev/)** + **React 19** + **TypeScript**
- **[Tailwind CSS v4](https://tailwindcss.com/)** + **[shadcn/ui](https://ui.shadcn.com/)**
- **[React Bits](https://reactbits.dev/)** + **[Motion](https://motion.dev/)** for animation
- **[Biome](https://biomejs.dev/)** for linting + formatting
- **[Bun](https://bun.sh/)** as the runtime / package manager

Previously built on Gatsby; rebuilt in 2026 on the stack above.

## Develop

```bash
bun install
bun dev        # http://localhost:5173
bun run build  # type-check + production build to dist/
bun run lint   # Biome
```

Content lives in `src/data/` (`resume.ts`, `projects.ts`) — edit data there rather than the section components. See [CLAUDE.md](./CLAUDE.md) for architecture notes.
