"use client";

import { motion } from "framer-motion";
import { Section } from "@/components/ui/section";
import { SectionHeader } from "@/components/ui/section-header";
import { motionListItem } from "@/lib/motion";

const skillGroups = [
  {
    title: "Frontend & Mobile",
    items: [
      "React.js",
      "Next.js",
      "React Native",
      "Flutter",
      "JavaScript",
      "TypeScript",
      "HTML5 / CSS3",
      "Tailwind CSS",
      "Sass",
      "Bootstrap",
      "Material UI",
    ],
  },
  {
    title: "State Management & UI",
    items: [
      "Redux",
      "Zustand",
      "TanStack",
      "Framer Motion",
      "UI Design",
      "UX Engineering",
    ],
  },
  {
    title: "Backend & Databases",
    items: [
      "Python",
      "Oracle Database",
      "Firebase",
      "PostgreSQL",
      "MySQL",
      "SQL",
      "REST APIs",
    ],
  },
  {
    title: "Developer Tools & AI",
    items: ["Git", "GitHub", "Claude", "Codex", "VS Code"],
  },
];

export function Skills() {
  return (
    <Section id="skills" variant="alt" glow="bottom-right" container="narrow">
      <SectionHeader
        eyebrow="Toolbox"
        title="Technical Skills"
        accent="Skills"
        description="Comprehensive list of frameworks, languages, databases, and tools I use."
      />

      <div className="mt-14 grid sm:grid-cols-2 gap-8">
        {skillGroups.map((group, gi) => (
          <motion.div
            key={group.title}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ delay: gi * 0.1, duration: 0.4 }}
            className="p-6 rounded-xl border border-white/10 bg-surface-900/40 backdrop-blur-sm"
          >
            <h3 className="font-display text-lg font-semibold text-accent mb-4 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-accent" />
              {group.title}
            </h3>
            <ul className="flex flex-wrap gap-2.5">
              {group.items.map((skill, i) => (
                <motion.li
                  key={skill}
                  custom={i}
                  variants={motionListItem}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.2 }}
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className="rounded-lg border border-white/10 bg-surface-950/60 px-3.5 py-1.5 text-xs font-medium text-surface-200 hover:border-accent/40 hover:text-accent hover:bg-accent/5 transition-colors cursor-default list-none"
                >
                  {skill}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
