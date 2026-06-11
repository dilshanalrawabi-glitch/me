"use client";

import { motion } from "framer-motion";
import { Section } from "@/components/ui/section";
import { SectionHeader } from "@/components/ui/section-header";
import { motionListItem } from "@/lib/motion";

const experience = [
  {
    role: "Software Developer",
    company: "Al Rawabi Group of Companies",
    location: "Qatar",
    period: "Present",
    description:
      "Building and maintaining web applications with React.js and frontend technologies. Contributing to backend services with Python when required.",
  },
  {
    role: "Web Developer",
    company: "Spinecodes",
    location: "",
    period: "Previous",
    description:
      "Developed and maintained web applications and contributed to frontend and web projects.",
  },
];

export function Experience() {
  return (
    <Section id="experience" glow="top-left" container="narrow">
      <SectionHeader
        eyebrow="Career"
        title="Experience"
        description="Where I've been building and learning."
      />

      <ul className="mt-14 space-y-10">
        {experience.map((job, i) => (
          <motion.li
            key={job.company}
            custom={i}
            variants={motionListItem}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="relative pl-8 border-l-2 border-white/10 hover:border-accent/50 transition-colors duration-300 group list-none"
            whileHover={{ x: 6 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
          >
            <motion.span
              className="absolute left-0 top-0 -translate-x-[9px] w-4 h-4 rounded-full bg-accent/80"
              whileHover={{ scale: 1.3, boxShadow: "0 0 16px rgba(212,168,83,0.5)" }}
              transition={{ type: "spring", stiffness: 400, damping: 20 }}
            />
            <div className="flex flex-wrap items-baseline gap-2">
              <h3 className="font-display text-xl font-semibold text-surface-50">
                {job.role}
              </h3>
              <span className="text-surface-400">·</span>
              <span className="text-accent font-medium">{job.company}</span>
            </div>
            <p className="mt-1 text-surface-500 text-sm">
              {[job.location, job.period].filter(Boolean).join(" · ")}
            </p>
            <p className="mt-3 text-surface-400">{job.description}</p>
          </motion.li>
        ))}
      </ul>
    </Section>
  );
}
