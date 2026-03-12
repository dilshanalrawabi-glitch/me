"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const links = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/5 bg-surface-900/50">
      <div className="container-wide section-padding py-12">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          <motion.p
            className="text-surface-400 text-sm"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
          >
            © {year} Muhammed Dilshan. All rights reserved.
          </motion.p>
          <nav>
            <ul className="flex flex-wrap items-center justify-center gap-6">
              {links.map((link, i) => (
                <li key={link.href}>
                  <motion.div
                    initial={{ opacity: 0, y: 4 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05, duration: 0.3 }}
                  >
                    <Link
                      href={link.href}
                      className="group relative text-sm text-surface-400 hover:text-accent transition-colors py-1 inline-block"
                    >
                      {link.label}
                      <span className="absolute bottom-0 left-0 h-px w-0 bg-accent group-hover:w-full transition-all duration-300 ease-out" />
                    </Link>
                  </motion.div>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  );
}
