"use client";

import { motion } from "framer-motion";
import { ProjectCard } from "@/components/ui/project-card";
import { Section } from "@/components/ui/section";
import { SectionHeader } from "@/components/ui/section-header";
import { staggerCard } from "@/lib/motion";

const projects: {
  title: string;
  description: string;
  href: string;
  imageSources: string[];
}[] = [
  {
    title: "POS",
    description:
      "Point of Sale system I'm currently building. Full-stack application for sales, inventory, and reporting using React on the frontend and Python on the backend.",
    href: "#",
    imageSources: [
      "/projects/pos.jpg",
      "/projects/pos.png",
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80",
    ],
  },
  {
    title: "Bochemar",
    description:
      "E-commerce platform built with React, Node.js, and Firebase. Features product catalog, cart, checkout, and real-time data with Firebase.",
    href: "#",
    imageSources: [
      "/projects/bochemar.jpg",
      "/projects/bochemar.png",
      "https://images.unsplash.com/photo-1472851294607-062cbedbc9af?w=800&q=80",
    ],
  },
  {
    title: "Iinve",
    description:
      "Invoice and inventory management app built with Next.js and Supabase. Modern stack for fast, real-time updates and scalable data.",
    href: "#",
    imageSources: [
      "/projects/iinve.jpg",
      "/projects/iinve.png",
      "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&q=80",
    ],
  },
];

export function Projects() {
  return (
    <Section id="projects" glow="bottom-right">
      <SectionHeader
        eyebrow="What I've built"
        title="Projects"
        description="A selection of work. Update with your own projects and links."
      />

      <ul className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
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
            <ProjectCard
              title={proj.title}
              description={proj.description}
              imgSrc={proj.imageSources[0]}
              imgSources={proj.imageSources}
              link={proj.href}
              linkText={proj.href.startsWith("http") ? "View live" : "View project"}
              className="h-full"
            />
          </motion.li>
        ))}
      </ul>
    </Section>
  );
}
