"use client";

import { motion } from "framer-motion";
import { Component, Server, GraduationCap, MapPin, type LucideIcon } from "lucide-react";
import { Section } from "@/components/ui/section";
import { SectionHeader } from "@/components/ui/section-header";
import { fadeUpItem } from "@/lib/motion";

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

const highlights: { label: string; icon: LucideIcon; desc: string }[] = [
  {
    label: "React.js & Next.js",
    icon: Component,
    desc: "Frontend & Full-Stack",
  },
  {
    label: "Python & Oracle DB",
    icon: Server,
    desc: "Backend & Business Logic",
  },
  {
    label: "BCA (2020 – 2023)",
    icon: GraduationCap,
    desc: "University of Calicut",
  },
  {
    label: "Based in Qatar",
    icon: MapPin,
    desc: "Al Rawabi Group of Companies",
  },
];

export function About() {
  return (
    <Section id="about" variant="alt" glow="center" container="narrow">
      <SectionHeader
        eyebrow="Who I am"
        title="About"
        accent="me"
        description="Software developer focused on responsive web and full-stack solutions."
      />

      <motion.div
        variants={fadeUpItem}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="mt-10 relative group"
      >
        <div className="relative rounded-2xl border border-white/10 bg-surface-950/60 backdrop-blur-sm p-8 sm:p-10 overflow-hidden">
          <div
            className="absolute inset-0 about-card-shine opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
            aria-hidden
          />
          <p className="text-surface-300 text-lg sm:text-xl leading-relaxed max-w-2xl mx-auto text-center relative">
            Dedicated <span className="text-accent font-medium">Software Developer</span> experienced in front-end and full-stack development, skilled in <span className="text-surface-100 font-semibold">React.js, React Native, Next.js, JavaScript, Tailwind CSS, Python, and Oracle Database</span>. Currently working at <span className="text-accent font-medium">Al Rawabi Group of Companies</span> in Qatar, building responsive, high-performance web and mobile applications for internal systems and business operations.
          </p>
        </div>
      </motion.div>

      <ul className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {highlights.map((h, i) => {
          const Icon = h.icon;
          return (
            <motion.li
              key={h.label}
              custom={i}
              variants={highlightCard}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              className="h-full list-none"
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
                  className="text-accent opacity-90 inline-block group-hover:scale-110 group-hover:animate-icon-wiggle transition-transform duration-300"
                  aria-hidden
                >
                  <Icon className="w-6 h-6" strokeWidth={1.8} />
                </span>
                <span className="font-display font-semibold text-surface-100 text-sm sm:text-base">
                  {h.label}
                </span>
                <span className="text-surface-500 text-xs sm:text-sm">{h.desc}</span>
              </motion.div>
            </motion.li>
          );
        })}
      </ul>
    </Section>
  );
}
