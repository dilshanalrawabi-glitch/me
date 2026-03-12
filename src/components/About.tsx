"use client";

import { motion } from "framer-motion";

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" as const },
  },
};

const highlightCard = {
  hidden: { opacity: 0, y: 24, scale: 0.96 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.45,
      ease: "easeOut" as const,
      delay: i * 0.08,
    },
  }),
};

const highlights = [
  {
    label: "React.js & modern frontend",
    icon: "⚛️",
    desc: "Building fast UIs",
  },
  {
    label: "Python for backend & scripts",
    icon: "🐍",
    desc: "APIs & tooling",
  },
  {
    label: "BCA, graduated 2023",
    icon: "🎓",
    desc: "Computer applications",
  },
  {
    label: "Based in Qatar",
    icon: "📍",
    desc: "Al Rawabi Group",
  },
];

export function About() {
  return (
    <section id="about" className="section-padding bg-surface-900/30 relative overflow-hidden">
      {/* Subtle background glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] rounded-full opacity-[0.07] pointer-events-none"
        style={{
          background: "radial-gradient(circle, var(--accent) 0%, transparent 70%)",
        }}
        aria-hidden
      />

      <motion.div
        className="container-narrow relative"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
        variants={container}
      >
        <motion.div variants={item} className="text-center mb-4">
          <span className="text-accent font-mono text-sm tracking-[0.3em] uppercase">
            Who I am
          </span>
        </motion.div>
        <motion.h2
          variants={item}
          className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-center"
        >
          About <span className="text-accent relative inline-block">me</span>
        </motion.h2>

        {/* Main bio card with border glow */}
        <motion.div
          variants={item}
          className="mt-10 relative group"
        >
          <div className="relative rounded-2xl border border-white/10 bg-surface-950/60 backdrop-blur-sm p-8 sm:p-10 overflow-hidden">
            <div
              className="absolute inset-0 about-card-shine opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
              aria-hidden
            />
            <p className="text-surface-300 text-lg sm:text-xl leading-relaxed max-w-2xl mx-auto text-center relative">
              I&apos;m a <span className="text-surface-100 font-medium">BCA graduate (2023)</span> and{" "}
              <span className="text-accent font-medium">Software Developer</span> at{" "}
              <span className="text-accent">Al Rawabi Group of Companies</span> in Qatar. I focus on
              building fast, accessible frontends with React.js and enjoy dipping into Python for
              backend and tooling when needed.
            </p>
          </div>
        </motion.div>

        {/* Highlight cards */}
        <ul className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {highlights.map((h, i) => (
            <motion.li
              key={h.label}
              custom={i}
              variants={highlightCard}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              className="h-full"
            >
              <motion.div
                className="h-full rounded-xl border border-white/10 bg-surface-900/80 backdrop-blur-sm p-5 flex flex-col gap-2 group cursor-default"
                whileHover={{
                  y: -4,
                  borderColor: "rgba(212,168,83,0.35)",
                  boxShadow: "0 12px 40px -12px rgba(212,168,83,0.15)",
                  transition: { duration: 0.25 },
                }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 400, damping: 25 }}
              >
                <span
                  className="text-2xl opacity-90 inline-block group-hover:scale-110 group-hover:animate-icon-wiggle transition-transform duration-300"
                  aria-hidden
                >
                  {h.icon}
                </span>
                <span className="font-display font-semibold text-surface-100 text-sm sm:text-base">
                  {h.label}
                </span>
                <span className="text-surface-500 text-xs sm:text-sm">{h.desc}</span>
              </motion.div>
            </motion.li>
          ))}
        </ul>
      </motion.div>
    </section>
  );
}
