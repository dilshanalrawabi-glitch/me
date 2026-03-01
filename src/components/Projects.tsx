"use client";

import { motion } from "framer-motion";
import { AnimatedSection, motionListItem } from "@/components/AnimatedSection";

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

export function Projects() {
  return (
    <section id="projects" className="section-padding">
      <AnimatedSection className="container-narrow">
        <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight">
          Projects
        </h2>
        <p className="mt-4 text-surface-400 text-lg max-w-2xl">
          A selection of work. Update with your own projects and links.
        </p>

        <ul className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, i) => (
            <motion.li
              key={i}
              custom={i}
              variants={motionListItem}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              <motion.a
                href={project.href}
                target={project.href.startsWith("http") ? "_blank" : undefined}
                rel={project.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="group block rounded-xl border border-white/10 bg-surface-900/50 p-6 hover:border-accent/30 hover:bg-surface-900/80 transition-all"
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                whileTap={{ scale: 0.99 }}
              >
                <h3 className="font-display text-lg font-semibold text-surface-50 group-hover:text-accent transition-colors">
                  {project.title}
                </h3>
                <p className="mt-2 text-sm text-surface-400 line-clamp-2">
                  {project.description}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded bg-white/5 px-2 py-1 text-xs text-surface-500"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.a>
            </motion.li>
          ))}
        </ul>
      </AnimatedSection>
    </section>
  );
}
