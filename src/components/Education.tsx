"use client";

import { motion } from "framer-motion";
import { GraduationCap, Calendar, Award, Building2 } from "lucide-react";
import { Section } from "@/components/ui/section";
import { SectionHeader } from "@/components/ui/section-header";
import { fadeUpItem } from "@/lib/motion";

export function Education() {
  return (
    <Section id="education" glow="top-left" container="narrow">
      <SectionHeader
        eyebrow="Academic Background"
        title="Education"
        accent="Education"
        description="Formal education and foundational computer science studies."
      />

      <motion.div
        variants={fadeUpItem}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="mt-12"
      >
        <div className="relative rounded-2xl border border-white/10 bg-surface-900/60 backdrop-blur-sm p-8 sm:p-10 overflow-hidden hover:border-accent/40 transition-all duration-300 group">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6">
            <div className="flex items-start gap-4">
              <div className="p-3.5 rounded-xl bg-accent/10 border border-accent/20 text-accent group-hover:scale-110 transition-transform duration-300">
                <GraduationCap className="w-8 h-8" />
              </div>
              <div>
                <h3 className="font-display text-2xl font-bold text-surface-50">
                  Bachelor of Computer Application (BCA)
                </h3>
                <p className="mt-1 text-accent font-medium flex items-center gap-2 text-base">
                  <Building2 className="w-4 h-4" />
                  University of Calicut
                </p>
                <p className="mt-3 text-surface-300 text-sm sm:text-base leading-relaxed max-w-xl">
                  Comprehensive curriculum covering core software engineering, object-oriented programming, data structures, database management systems, and web technologies.
                </p>
              </div>
            </div>

            <div className="sm:text-right shrink-0 flex sm:flex-col items-center sm:items-end gap-2">
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-surface-300 font-mono text-sm">
                <Calendar className="w-3.5 h-3.5 text-accent" />
                June 2020 – May 2023
              </span>
              <span className="inline-flex items-center gap-1 text-xs text-accent font-semibold px-2.5 py-1 rounded bg-accent/10">
                <Award className="w-3 h-3" />
                Graduated
              </span>
            </div>
          </div>
        </div>
      </motion.div>
    </Section>
  );
}
