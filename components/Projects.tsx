const projects = [
  {
    title: "Task Manager",
    description:
      "A React task manager with filtering, clean component structure, and local persistence.",
    tech: ["React", "TypeScript", "Vite"],
    demo: "#",
    repo: "#",
  },
  {
    title: "Movie Explorer",
    description:
      "API-based app with search, pagination, and responsive UI.",
    tech: ["React", "API", "CSS"],
    demo: "#",
    repo: "#",
  },
  {
    title: "Portfolio Website",
    description:
      "Personal portfolio built with Next.js and Tailwind CSS.",
    tech: ["Next.js", "Tailwind"],
    demo: "#",
    repo: "#",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-6xl px-6 py-16">
      <h1 className="text-3xl font-semibold">Projects</h1>
      <p className="mt-3 max-w-2xl text-sm text-white/70">
        A selection of projects that showcase my frontend skills.
      </p>

      <div className="mt-10 grid gap-6 md:grid-cols-2">
        {projects.map((p) => (
          <div
            key={p.title}
            className="rounded-2xl border border-white/10 bg-white/5 p-6"
          >
            <h3 className="text-lg font-semibold">{p.title}</h3>
            <p className="mt-3 text-sm text-white/70">{p.description}</p>

            <div className="mt-4 flex flex-wrap gap-2">
              {p.tech.map((t) => (
                <span
                  key={t}
                  className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70"
                >
                  {t}
                </span>
              ))}
            </div>

            <div className="mt-6 flex gap-4 text-sm">
              <a href={p.demo} className="text-violet-400 hover:underline">
                Live Demo
              </a>
              <a href={p.repo} className="text-white/70 hover:text-white">
                GitHub
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}