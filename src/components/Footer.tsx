import Link from "next/link";

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
          <p className="text-surface-400 text-sm">
            © {year} Muhammed Dilshan. All rights reserved.
          </p>
          <nav>
            <ul className="flex flex-wrap items-center justify-center gap-6">
              {links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-surface-400 hover:text-accent transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  );
}
