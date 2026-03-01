"use client";

import { motion } from "framer-motion";
import { AnimatedSection, motionListItem } from "@/components/AnimatedSection";

export function About() {
  const bullets = [
    "React.js & modern frontend",
    "Python for backend & scripts",
    "BCA, graduated 2023",
    "Based in Qatar",
  ];

  return (
    <section id="about" className="section-padding bg-surface-900/30">
      <AnimatedSection className="container-narrow">
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
          {bullets.map((text, i) => (
            <motion.li
              key={text}
              custom={i}
              variants={motionListItem}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              className="flex items-center gap-3"
            >
              <span className="text-accent font-mono text-sm">→</span>
              {text}
            </motion.li>
          ))}
        </ul>
      </AnimatedSection>
    </section>
  );
}
