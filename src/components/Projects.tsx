"use client";

import { motion } from "framer-motion";
import { ProjectCard } from "@/components/ui/project-card";
import { Section } from "@/components/ui/section";
import { SectionHeader } from "@/components/ui/section-header";
import { staggerCard } from "@/lib/motion";

interface ProjectItem {
  title: string;
  subtitle: string;
  description: string;
  metrics?: string;
  tags: string[];
  href: string;
  imageSources: string[];
  bullets: string[];
}

const projects: ProjectItem[] = [
  {
    title: "POS System for Wholesale Business",
    subtitle: "Full-Stack Wholesale POS Application",
    description:
      "A complete point-of-sale solution for wholesale food operations to handle high-volume sales, inventory management, customer credit history, and automated billing.",
    tags: ["React.js", "Python", "Oracle Database", "Inventory", "Reports"],
    href: "#",
    imageSources: [
      "/projects/pos_wholesale.png",
      "/projects/pos.jpg",
      "/projects/pos.png",
    ],
    bullets: [
      "Built responsive React interfaces paired with Python & Oracle DB for secure data processing.",
      "Implemented billing & invoice generation, low-stock alerts, and customer credit tracking.",
      "Optimized transaction workflows to handle high-volume business sales smoothly.",
    ],
  },
  {
    title: "Wholesale Billing & Management System",
    subtitle: "Enterprise Billing & Admin Control Suite",
    description:
      "A full-featured billing system with Python Flask & Oracle DB, featuring Super Admin RBAC, product selection, discounts, bill hold, retrieval, and bill reversal.",
    tags: ["React.js", "Python Flask", "Oracle DB", "RBAC", "REST APIs"],
    href: "#",
    imageSources: [
      "/projects/wholesale_billing.png",
      "/projects/iinve.jpg",
      "/projects/iinve.png",
    ],
    bullets: [
      "Engineered Super Admin dashboard with Role-Based Access Control (RBAC) for system permissions.",
      "Created billing workflows with product selection, discounts, bill hold, retrieval, and reversal.",
      "Integrated frontend & backend APIs with Oracle DB for real-time transaction stability.",
    ],
  },
  {
    title: "Hiring Portal for Shops",
    subtitle: "Candidate Recruitment & Approval Platform",
    description:
      "Web-based hiring portal connecting retail shops with job applicants, streamlining candidate evaluation, Operations Manager validation, and HR recruitment workflows.",
    tags: ["React.js / Next.js", "i18n (RTL/LTR)", "HR Dashboards", "Workflow Automation"],
    href: "#",
    imageSources: [
      "/projects/hiring_portal.png",
      "/projects/bochemar.jpg",
      "/projects/bochemart.png",
    ],
    bullets: [
      "Designed shop/user modules, OM approval dashboard, and HR evaluation tools.",
      "Implemented full internationalization (i18n) with RTL and LTR language support.",
      "Streamlined recruitment workflows, cutting processing time by approximately 90%.",
    ],
  },
];

export function Projects() {
  return (
    <Section id="projects" glow="bottom-right">
      <SectionHeader
        eyebrow="Portfolio"
        title="Featured Projects"
        accent="Projects"
        description="Key systems and applications I have architected and developed."
      />

      <ul className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((proj, i) => (
          <motion.li
            key={proj.title}
            custom={i}
            variants={staggerCard}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="h-full list-none"
          >
            <div className="flex flex-col h-full rounded-2xl border border-white/10 bg-surface-900/80 backdrop-blur-sm overflow-hidden hover:border-accent/40 transition-all duration-300 group shadow-lg">
              <div className="aspect-video overflow-hidden relative">
                <ProjectCard
                  title={proj.title}
                  description={proj.description}
                  imgSrc={proj.imageSources[0]}
                  imgSources={proj.imageSources}
                  link={proj.href}
                  linkText="Explore details"
                  className="h-full border-none shadow-none rounded-none bg-transparent hover:translate-y-0"
                />
              </div>

              <div className="p-6 flex flex-col flex-1 border-t border-white/5 bg-surface-950/40">
                {proj.metrics && (
                  <span className="inline-block self-start mb-3 px-3 py-1 text-xs font-semibold rounded-full bg-accent/15 text-accent border border-accent/30">
                    {proj.metrics}
                  </span>
                )}

                <h3 className="font-display text-xl font-bold text-surface-50 group-hover:text-accent transition-colors">
                  {proj.title}
                </h3>
                <p className="text-xs text-accent/80 font-mono mt-0.5">{proj.subtitle}</p>

                <p className="mt-3 text-sm text-surface-400 leading-relaxed flex-1">
                  {proj.description}
                </p>

                <ul className="mt-4 space-y-1.5 text-xs text-surface-300">
                  {proj.bullets.map((b, bi) => (
                    <li key={bi} className="flex items-start gap-1.5">
                      <span className="text-accent select-none">▸</span>
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-5 pt-4 border-t border-white/5 flex flex-wrap gap-1.5">
                  {proj.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 text-[11px] font-mono rounded bg-white/5 text-surface-300 border border-white/5"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.li>
        ))}
      </ul>
    </Section>
  );
}
