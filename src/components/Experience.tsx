const experience = [
  {
    role: "Software Developer",
    company: "Al Rawabi Group of Companies",
    location: "Qatar",
    period: "Present",
    description:
      "Building and maintaining web applications with React.js and frontend technologies. Contributing to backend services with Python when required.",
  },
  {
    role: "Web Developer",
    company: "Spinecodes",
    location: "",
    period: "Previous",
    description:
      "Developed and maintained web applications and contributed to frontend and web projects.",
  },
  // Add more entries as you update your data
];

export function Experience() {
  return (
    <section id="experience" className="section-padding">
      <div className="container-narrow">
        <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight">
          Experience
        </h2>
        <p className="mt-4 text-surface-400 text-lg max-w-2xl">
          Where I&apos;ve been building and learning.
        </p>

        <ul className="mt-12 space-y-10">
          {experience.map((job, i) => (
            <li
              key={i}
              className="relative pl-8 border-l-2 border-white/10 hover:border-accent/50 transition-colors"
            >
              <span className="absolute left-0 top-0 -translate-x-[9px] w-4 h-4 rounded-full bg-accent/80" />
              <div className="flex flex-wrap items-baseline gap-2">
                <h3 className="font-display text-xl font-semibold text-surface-50">
                  {job.role}
                </h3>
                <span className="text-surface-400">·</span>
                <span className="text-accent font-medium">{job.company}</span>
              </div>
              <p className="mt-1 text-surface-500 text-sm">
                {[job.location, job.period].filter(Boolean).join(" · ")}
              </p>
              <p className="mt-3 text-surface-400">{job.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
