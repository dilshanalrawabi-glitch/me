"use client";

import { motion } from "framer-motion";
import { Section } from "@/components/ui/section";
import { SectionHeader } from "@/components/ui/section-header";
import { motionListItem } from "@/lib/motion";

interface JobExperience {
  role: string;
  company: string;
  location: string;
  period: string;
  bullets: string[];
  skills: string[];
}

const experience: JobExperience[] = [
  {
    role: "Software Developer",
    company: "Al Rawabi Group of Companies",
    location: "Qatar",
    period: "Jan. 2026 – Present",
    bullets: [
      "Developed and maintained both front-end and back-end functionalities for business applications and internal systems.",
      "Built responsive and user-friendly interfaces using HTML, CSS, JavaScript, React, and modern UI practices.",
      "Worked on back-end development using Python and Oracle Database for secure data management and business operations.",
      "Developed modules for inventory management, billing, reporting, and workflow automation.",
      "Collaborated with cross-functional teams to gather requirements and deliver scalable software solutions.",
      "Optimized application performance and ensured smooth integration between front-end and back-end systems.",
    ],
    skills: ["React.js", "Python", "Oracle DB", "Inventory Systems", "Billing & Workflow"],
  },
  {
    role: "Web Developer",
    company: "Deft Innovations",
    location: "Nilambur",
    period: "July. 2025 – Jan. 2026",
    bullets: [
      "Developed and maintained responsive websites using HTML, CSS, JavaScript, Next.js, Tailwind CSS, and WordPress.",
      "Managed and enhanced Ayurvedic websites and administrative portals, ensuring smooth functionality and user-friendly interfaces.",
      "Designed and developed static and dynamic web pages with responsive layouts across desktop, tablet, and mobile devices.",
      "Converted design concepts and client requirements into clean, responsive, and accessible web interfaces.",
    ],
    skills: ["Next.js", "Tailwind CSS", "React", "WordPress", "Responsive Design"],
  },
  {
    role: "Web Developer",
    company: "SpineCodes",
    location: "Malappuram",
    period: "Feb. 2024 – Feb. 2025",
    bullets: [
      "Developed responsive web applications using React.js, JavaScript, HTML, CSS, and Bootstrap.",
      "Built and maintained e-commerce websites with user-friendly interfaces and smooth shopping experiences.",
      "Integrated Firebase for backend services, database management, authentication, and data handling.",
      "Worked on website functionality, debugging, performance improvements, and continuous maintenance.",
    ],
    skills: ["React.js", "Firebase", "Bootstrap", "E-commerce", "JavaScript"],
  },
];

export function Experience() {
  return (
    <Section id="experience" glow="top-left" container="narrow">
      <SectionHeader
        eyebrow="Career"
        title="Work Experience"
        accent="Experience"
        description="My professional background in software development and engineering."
      />

      <ul className="mt-14 space-y-12">
        {experience.map((job, i) => (
          <motion.li
            key={`${job.company}-${job.period}`}
            custom={i}
            variants={motionListItem}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="relative pl-8 border-l-2 border-white/10 hover:border-accent/50 transition-colors duration-300 group list-none"
            whileHover={{ x: 4 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
          >
            <motion.span
              className="absolute left-0 top-0.5 -translate-x-[9px] w-4 h-4 rounded-full bg-accent/80 ring-4 ring-surface-950"
              whileHover={{ scale: 1.3, boxShadow: "0 0 16px rgba(212,168,83,0.6)" }}
              transition={{ type: "spring", stiffness: 400, damping: 20 }}
            />
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <div className="flex flex-wrap items-baseline gap-2">
                <h3 className="font-display text-xl font-semibold text-surface-50">
                  {job.role}
                </h3>
                <span className="text-surface-500">·</span>
                <span className="text-accent font-medium text-lg">{job.company}</span>
              </div>
              <span className="text-surface-400 text-sm font-mono bg-white/5 px-3 py-1 rounded-full border border-white/5">
                {job.period}
              </span>
            </div>
            
            <p className="mt-1 text-surface-400 text-xs sm:text-sm font-medium">
              📍 {job.location}
            </p>

            <ul className="mt-4 space-y-2 text-surface-300 text-sm sm:text-base leading-relaxed">
              {job.bullets.map((bullet, bi) => (
                <li key={bi} className="flex items-start gap-2">
                  <span className="text-accent select-none mt-1">▸</span>
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>

            <div className="mt-4 flex flex-wrap gap-2">
              {job.skills.map((skill) => (
                <span
                  key={skill}
                  className="inline-block px-2.5 py-1 text-xs font-mono rounded-md bg-accent/10 text-accent border border-accent/20"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.li>
        ))}
      </ul>
    </Section>
  );
}
