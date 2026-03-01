export function About() {
  return (
    <section id="about" className="section-padding bg-surface-900/30">
      <div className="container-narrow">
        <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight">
          About <span className="text-accent">me</span>
        </h2>
        <p className="mt-4 text-surface-400 text-lg max-w-2xl">
          I&apos;m a BCA graduate (2023) and Software Developer at{" "}
          <span className="text-accent">Al Rawabi Group of Companies</span> in
          Qatar. I focus on building fast, accessible frontends with React.js
          and enjoy dipping into Python for backend and tooling when needed.
        </p>
        <ul className="mt-8 grid sm:grid-cols-2 gap-4 text-surface-300">
          <li className="flex items-center gap-3">
            <span className="text-accent font-mono text-sm">→</span>
            React.js & modern frontend
          </li>
          <li className="flex items-center gap-3">
            <span className="text-accent font-mono text-sm">→</span>
            Python for backend & scripts
          </li>
          <li className="flex items-center gap-3">
            <span className="text-accent font-mono text-sm">→</span>
            BCA, graduated 2023
          </li>
          <li className="flex items-center gap-3">
            <span className="text-accent font-mono text-sm">→</span>
            Based in Qatar
          </li>
        </ul>
      </div>
    </section>
  );
}
