"use client";

import { motion } from "framer-motion";
import { Mail, Linkedin, Github } from "lucide-react";
import { Section } from "@/components/ui/section";
import { SectionHeader } from "@/components/ui/section-header";
import { Button } from "@/components/ui/button";
import { fadeUpItem, springTap, staggerContainer } from "@/lib/motion";

const links = [
  {
    href: "mailto:your.email@example.com",
    label: "Email",
    icon: Mail,
    external: false,
  },
  {
    href: "https://linkedin.com/in/yourprofile",
    label: "LinkedIn",
    icon: Linkedin,
    external: true,
  },
  {
    href: "https://github.com/yourusername",
    label: "GitHub",
    icon: Github,
    external: true,
  },
];

export function Contact() {
  return (
    <Section id="contact" variant="alt" glow="center" container="narrow">
      <SectionHeader
        eyebrow="Let's connect"
        title="Get in"
        accent="touch"
        description="Open to new opportunities and conversations. Drop a line and I'll get back to you."
      />

      <motion.div
        className="mt-14 flex flex-wrap items-center justify-center gap-4"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {links.map((link) => {
          const Icon = link.icon;
          return (
            <motion.div
              key={link.label}
              variants={fadeUpItem}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
              transition={springTap}
            >
              <Button
                href={link.href}
                variant="ghost"
                target={link.external ? "_blank" : undefined}
                rel={link.external ? "noopener noreferrer" : undefined}
              >
                <Icon className="w-5 h-5" />
                {link.label}
              </Button>
            </motion.div>
          );
        })}
      </motion.div>

      <motion.p
        variants={fadeUpItem}
        className="mt-8 text-center text-surface-500 text-sm"
      >
        Update the links above with your real email, LinkedIn, and GitHub.
      </motion.p>
    </Section>
  );
}
