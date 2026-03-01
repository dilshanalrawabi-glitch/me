"use client";

import { motion } from "framer-motion";
import { AnimatedSection, motionListItem } from "@/components/AnimatedSection";

const skillGroups = [
  {
    title: "Frontend",
    items: [
      "React.js",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "HTML / CSS",
      "Tailwind CSS",
    ],
  },
  {
    title: "Backend & tools",
    items: ["Python", "REST APIs", "Git", "VS Code"],
  },
];

export function Skills() {
  return (
    <section id="skills" className="section-padding bg-surface-900/30">
      <AnimatedSection className="container-narrow">
        <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight">
          Skills
        </h2>
        <p className="mt-4 text-surface-400 text-lg max-w-2xl">
          Technologies and tools I work with.
        </p>

        <div className="mt-12 grid sm:grid-cols-2 gap-10">
          {skillGroups.map((group, gi) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: gi * 0.1, duration: 0.4 }}
            >
              <h3 className="font-display text-lg font-semibold text-accent mb-4">
                {group.title}
              </h3>
              <ul className="flex flex-wrap gap-3">
                {group.items.map((skill, i) => (
                  <motion.li
                    key={skill}
                    custom={i}
                    variants={motionListItem}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.98 }}
                    className="rounded-lg border border-white/10 bg-surface-900/50 px-4 py-2 text-sm text-surface-300 hover:border-accent/30 hover:text-accent transition-colors cursor-default"
                  >
                    {skill}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </AnimatedSection>
    </section>
  );
}
