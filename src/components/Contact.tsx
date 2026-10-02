"use client";

import { motion } from "framer-motion";
import { Phone, Mail, Linkedin, Github } from "lucide-react";
import { Section } from "@/components/ui/section";
import { SectionHeader } from "@/components/ui/section-header";
import { Button } from "@/components/ui/button";
import { fadeUpItem, springTap, staggerContainer } from "@/lib/motion";

const links = [
  {
    href: "mailto:dilshanmambadan@gmail.com",
    label: "dilshanmambadan@gmail.com",
    icon: Mail,
    external: false,
  },
  {
    href: "tel:+97471837476",
    label: "+974-71837476",
    icon: Phone,
    external: false,
  },
  {
    href: "https://linkedin.com/in/muhammeddilshan",
    label: "LinkedIn Profile",
    icon: Linkedin,
    external: true,
  },
  {
    href: "https://github.com/MuhammedDilshan",
    label: "GitHub Profile",
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
        description="I'm open to new opportunities, collaborations, and tech discussions. Feel free to reach out!"
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
              whileHover={{ scale: 1.04, y: -2 }}
              whileTap={{ scale: 0.98 }}
              transition={springTap}
            >
              <Button
                href={link.href}
                variant="ghost"
                target={link.external ? "_blank" : undefined}
                rel={link.external ? "noopener noreferrer" : undefined}
                className="gap-2 px-5 py-3 border border-white/10 hover:border-accent/40 bg-surface-900/60 text-surface-200 hover:text-accent"
              >
                <Icon className="w-4 h-4 text-accent" />
                {link.label}
              </Button>
            </motion.div>
          );
        })}
      </motion.div>
    </Section>
  );
}
