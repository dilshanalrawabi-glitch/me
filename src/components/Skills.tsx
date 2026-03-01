const skillGroups = [
  {
    title: "Frontend",
    items: [
      "React.js",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "HTML / CSS",
      "Tailwind CSS",
    ],
  },
  {
    title: "Backend & tools",
    items: ["Python", "REST APIs", "Git", "VS Code"],
  },
];

export function Skills() {
  return (
    <section id="skills" className="section-padding bg-surface-900/30">
      <div className="container-narrow">
        <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight">
          Skills
        </h2>
        <p className="mt-4 text-surface-400 text-lg max-w-2xl">
          Technologies and tools I work with.
        </p>

        <div className="mt-12 grid sm:grid-cols-2 gap-10">
          {skillGroups.map((group) => (
            <div key={group.title}>
              <h3 className="font-display text-lg font-semibold text-accent mb-4">
                {group.title}
              </h3>
              <ul className="flex flex-wrap gap-3">
                {group.items.map((skill) => (
                  <li
                    key={skill}
                    className="rounded-lg border border-white/10 bg-surface-900/50 px-4 py-2 text-sm text-surface-300 hover:border-accent/30 hover:text-accent transition-colors"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
