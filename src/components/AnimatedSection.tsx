"use client";

import { motion } from "framer-motion";

export {
  staggerContainer,
  fadeUpItem,
  staggerCard,
  motionListItem,
  springTap,
} from "@/lib/motion";

type AnimatedSectionProps = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  once?: boolean;
  amount?: number;
};

export function AnimatedSection({
  children,
  className = "",
  delay = 0,
  once = true,
  amount = 0.2,
}: AnimatedSectionProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, amount }}
      transition={{ duration: 0.5, ease: "easeOut", delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export const motionTap = {
  scale: 1,
  transition: { type: "spring", stiffness: 400, damping: 17 },
};
export const motionTapHover = { scale: 1.02 };
export const motionTapTap = { scale: 0.98 };
