"use client";

import { motion } from "framer-motion";
import { HeroGeometric } from "@/components/ui/shape-landing-hero";
import { Button } from "@/components/ui/button";
import { springTap } from "@/lib/motion";

export function Hero() {
  return (
    <section id="hero">
      <HeroGeometric
        badge="Software Developer"
        title1="Muhammed"
        title2="Dilshan"
        description="Dedicated Software Developer experienced in front-end & full-stack development using React.js, Next.js, Python, and Oracle Database. Currently at Al Rawabi Group of Companies, Qatar."
      >
        <div className="flex flex-wrap items-center justify-center gap-4">
          <motion.div whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.97 }} transition={springTap}>
            <Button href="#projects" variant="primary">
              View work
            </Button>
          </motion.div>
          <motion.div whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.97 }} transition={springTap}>
            <Button href="#contact" variant="outline">
              Get in touch
            </Button>
          </motion.div>
        </div>
      </HeroGeometric>
    </section>
  );
}
