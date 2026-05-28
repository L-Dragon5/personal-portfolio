export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-6 py-8 text-center font-mono text-xs text-muted-foreground sm:flex-row sm:text-left">
        <p>© {year} Joseph Oh</p>
        <p>
          Built with Vite, React, Tailwind, shadcn/ui, and React Bits. No
          template.
        </p>
      </div>
    </footer>
  );
}
