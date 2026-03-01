export function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-grid"
    >
      <div className="gradient-orb gradient-orb-1" aria-hidden />
      <div className="gradient-orb gradient-orb-2" aria-hidden />

      <div className="container-narrow section-padding relative z-10 text-center">
        <p
          className="text-accent font-mono text-sm tracking-widest uppercase mb-4 animate-fade-in opacity-0"
          style={{ animationDelay: "0.1s", animationFillMode: "forwards" }}
        >
          Software Developer
        </p>
        <h1
          className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-balance animate-slide-up opacity-0"
          style={{ animationDelay: "0.2s", animationFillMode: "forwards" }}
        >
          Muhammed{" "}
          <span className="text-accent">Dilshan</span>
        </h1>
        <p
          className="mt-6 text-lg sm:text-xl text-surface-400 max-w-2xl mx-auto animate-slide-up opacity-0"
          style={{ animationDelay: "0.4s", animationFillMode: "forwards" }}
        >
          Building modern web experiences with React.js & frontend technologies.
          Based in Qatar · Al Rawabi Group of Companies
        </p>
        <div
          className="mt-10 flex flex-wrap items-center justify-center gap-4 animate-slide-up opacity-0"
          style={{ animationDelay: "0.6s", animationFillMode: "forwards" }}
        >
          <a
            href="#projects"
            className="inline-flex items-center justify-center rounded-lg bg-accent px-6 py-3 text-sm font-medium text-surface-950 hover:bg-accent-light transition-colors"
          >
            View work
          </a>
          <a
            href="#contact"
            className="inline-flex items-center justify-center rounded-lg border border-white/20 px-6 py-3 text-sm font-medium text-surface-100 hover:border-accent hover:text-accent transition-colors"
          >
            Get in touch
          </a>
        </div>
      </div>

      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce opacity-60"
        aria-hidden
      >
        <svg
          className="w-6 h-6 text-surface-400"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </div>
    </section>
  );
}
