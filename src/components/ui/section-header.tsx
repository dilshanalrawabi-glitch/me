"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { fadeUpItem, staggerContainer } from "@/lib/motion";

interface SectionHeaderProps {
  eyebrow: string;
  title: string;
  accent?: string;
  description?: string;
  align?: "center" | "left";
  className?: string;
}

export function SectionHeader({
  eyebrow,
  title,
  accent,
  description,
  align = "center",
  className,
}: SectionHeaderProps) {
  const centered = align === "center";

  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      className={cn(centered && "text-center", className)}
    >
      <motion.p
        variants={fadeUpItem}
        className="text-accent font-mono text-sm tracking-[0.3em] uppercase mb-4"
      >
        {eyebrow}
      </motion.p>
      <motion.h2
        variants={fadeUpItem}
        className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight"
      >
        {accent ? (
          <>
            {title}{" "}
            <span className="text-accent">{accent}</span>
          </>
        ) : (
          title
        )}
      </motion.h2>
      {description && (
        <motion.p
          variants={fadeUpItem}
          className={cn(
            "mt-4 text-surface-400 text-lg max-w-2xl",
            centered && "mx-auto"
          )}
        >
          {description}
        </motion.p>
      )}
    </motion.div>
  );
}
