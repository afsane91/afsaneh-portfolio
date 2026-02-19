import Image from "next/image";

const projects = [
  {
    title: "Insaan Group Platform",
    subtitle: "Production Website (Remote Collaboration)",
    description:
      "Worked remotely as a frontend developer on a live international platform. Implemented responsive UI based on Figma designs, built reusable React components, and collaborated with the team to integrate API-driven pages and structured layouts.",
    tags: ["React", "Next.js", "Remote Team", "Figma to Code", "REST API"],
    live: "https://insaangroup.org/",
    image: "/insaan.png",
  },
  {
    title: "Shirik Marketplace Platform",
    subtitle: "E-commerce Website",
    description:
      "Developed responsive UI for a multi-category marketplace platform using React. Implemented structured layouts, product category sections, and reusable components to create a clean and user-friendly shopping experience.",
    tags: ["React", "Responsive UI", "E-commerce", "Component Design"],
    live: "https://shirik.ir/",
    image: "/shirik.png",
  },
  {
    title: "Noora Comart Platform",
    subtitle: "E-commerce Website",
    description:
      "Implemented responsive UI and interactive components for an e-commerce platform using JavaScript, HTML, and CSS. Focused on clean layout structure, usability, and smooth user experience across different screen sizes.",
    tags: ["JavaScript", "HTML", "CSS", "Responsive UI"],
    live: "https://nooracomart.com/",
    image: "/noora.png",
  },
  {
    title: "Investor Portal (Contract Project)",
    subtitle: "Finance / Web Application",
    description:
      "Worked on a short-term contract to implement responsive UI for an investor portal. Built authentication screens and reusable UI components with a focus on clean layout, form UX, and RTL support.",
    tags: ["React", "UI Implementation", "RTL", "Responsive Design", "Forms"],
    live: "https://contract.armanamc.ir/",
    image: "/armanamc.png",
  },
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="mx-auto max-w-6xl px-6 py-20">
      <div>
        <h2 className="text-3xl font-semibold text-white">Selected Projects</h2>
        <p className="mt-3 text-white/60">
          A few projects I’ve contributed to (live & production-ready).
        </p>
      </div>

      <div className="mt-14 grid gap-8 md:grid-cols-2">
        {projects.map((p) => (
          <article
            key={p.title}
            className="
              group relative rounded-2xl overflow-hidden
              border border-white/10 bg-white/[0.03]
              transition-all duration-300
              hover:-translate-y-1 hover:border-violet-400/30
            "
          >
            {/* image */}
            <div className="relative h-56 w-full overflow-hidden rounded-t-2xl">
              <Image
                src={p.image}
                alt={p.title}
                fill
                className="object-cover"
              />

              {/* gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-[#020617]/40 to-transparent" />

              {/* overlay */}
              <div className="absolute inset-0 flex items-end justify-between p-5 opacity-0 group-hover:opacity-100 transition">
                <a
                  href={p.live}
                  target="_blank"
                  className="rounded-xl bg-violet-500 px-4 py-2 text-sm text-white hover:bg-violet-600"
                >
                  Live Website
                </a>

                <span className="text-xs text-white/90 bg-black/40 backdrop-blur px-3 py-1 rounded-full border border-white/20">
                  {p.subtitle}
                </span>
              </div>
            </div>

            {/* content */}
            <div className="p-6">
              <h3 className="text-lg font-semibold text-white">{p.title}</h3>

              <p className="mt-3 text-sm leading-7 text-white/70">
                {p.description}
              </p>

              <div className="mt-5 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span
                    key={t}
                    className="
                      rounded-full border border-violet-400/20
                      bg-violet-500/10 px-3 py-1 text-xs text-violet-200
                    "
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
