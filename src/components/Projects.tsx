"use client";

import { motion } from "framer-motion";

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.05 },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: "easeOut" as const },
  },
};

const cardVariant = {
  hidden: { opacity: 0, y: 28 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut" as const,
      delay: i * 0.1,
    },
  }),
};

const projects = [
  {
    title: "Project one",
    description:
      "Short description of the project. You can update this with your real projects, links, and tech stack.",
    tags: ["React", "TypeScript"],
    href: "#",
  },
  {
    title: "Project two",
    description:
      "Another project summary. Replace with your own project details and live or repo links.",
    tags: ["Next.js", "Python"],
    href: "#",
  },
  {
    title: "Project three",
    description:
      "Third project placeholder. Add links and screenshots as you update your portfolio.",
    tags: ["Frontend", "API"],
    href: "#",
  },
];

function LinkIcon({ external }: { external: boolean }) {
  if (external) {
    return (
      <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
      </svg>
    );
  }
  return (
    <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
    </svg>
  );
}

export function Projects() {
  return (
    <section id="projects" className="section-padding bg-surface-900/20 relative overflow-hidden">
      {/* Subtle background */}
      <div
        className="absolute bottom-0 right-0 w-[500px] h-[300px] rounded-full opacity-[0.05] pointer-events-none"
        style={{ background: "radial-gradient(circle, var(--accent) 0%, transparent 70%)" }}
        aria-hidden
      />

      <motion.div
        className="container-narrow relative"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.12 }}
        variants={container}
      >
        <motion.div variants={item} className="text-center mb-4">
          <span className="text-accent font-mono text-sm tracking-[0.3em] uppercase">
            What I&apos;ve built
          </span>
        </motion.div>
        <motion.h2
          variants={item}
          className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-center"
        >
          Projects
        </motion.h2>
        <motion.p
          variants={item}
          className="mt-4 text-surface-400 text-lg max-w-2xl mx-auto text-center"
        >
          A selection of work. Update with your own projects and links.
        </motion.p>

        <ul className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((proj, i) => {
            const isExternal = proj.href.startsWith("http");
            return (
              <motion.li
                key={proj.title}
                custom={i}
                variants={cardVariant}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                className="h-full"
              >
                <motion.a
                  href={proj.href}
                  target={isExternal ? "_blank" : undefined}
                  rel={isExternal ? "noopener noreferrer" : undefined}
                  className="group block h-full rounded-2xl border border-white/10 bg-surface-950/70 backdrop-blur-sm p-6 sm:p-7 overflow-hidden relative"
                  whileHover={{
                    y: -6,
                    borderColor: "rgba(212,168,83,0.25)",
                    boxShadow: "0 20px 50px -16px rgba(0,0,0,0.4), 0 0 0 1px rgba(212,168,83,0.08)",
                    transition: { duration: 0.25 },
                  }}
                  whileTap={{ scale: 0.99 }}
                  transition={{ type: "spring", stiffness: 400, damping: 28 }}
                >
                  {/* Card number / accent line */}
                  <span
                    className="absolute top-5 right-5 text-surface-600 font-mono text-sm group-hover:text-accent/70 transition-colors"
                    aria-hidden
                  >
                    0{i + 1}
                  </span>

                  <div className="pr-8">
                    <h3 className="font-display text-xl font-semibold text-surface-50 group-hover:text-accent transition-colors">
                      {proj.title}
                    </h3>
                    <p className="mt-3 text-sm text-surface-400 line-clamp-3 leading-relaxed">
                      {proj.description}
                    </p>
                  </div>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {proj.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-lg bg-white/5 border border-white/5 px-2.5 py-1 text-xs text-surface-400 group-hover:border-accent/20 group-hover:text-accent/90 transition-colors"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-accent opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                    {isExternal ? "View live" : "View project"}
                    <LinkIcon external={isExternal} />
                  </span>
                </motion.a>
              </motion.li>
            );
          })}
        </ul>
      </motion.div>
    </section>
  );
}
