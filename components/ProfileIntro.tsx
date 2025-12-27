import Image from "next/image";

export default function ProfileIntro() {
  return (
    <section
      id="about"
      className="mx-auto grid max-w-6xl gap-12 px-6 py-16 md:grid-cols-[360px_1fr]"
    >
      <aside className="rounded-2xl border border-white/10 bg-white/5  text-center">
        <div
          className="
                  relative mx-auto
                  w-full max-w-[520px]
                  aspect-square
                  rounded-2xl
                  overflow-hidden
                  bg-[url('/myPhoto.jpg')]
                  bg-cover
                  bg-center
                "
        >
          <div className="absolute inset-0 bg-black/45" />

          <div className="relative z-10 flex h-full flex-col items-center justify-end pb-16 text-center">
            <h2 className="text-3xl font-semibold text-white">Afsaneh Lotfi</h2>
            <p className="mt-2 text-white/85">Frontend Developer (React)</p>
          </div>
        </div>
      </aside>

      <div className="pt-4">
        <h2 className="text-2xl font-semibold">About me</h2>

        <div className="mt-6 max-w-2xl space-y-4 text-sm leading-7 text-white/70">
          <p>
            Hi, I’m Afsaneh, a React frontend developer focused on building
            clean, responsive, and user-friendly web applications. I have
            experience working on dashboard-style projects, creating reusable
            components, and implementing smooth user flows. I care about code
            readability, UI structure, and performance, and I enjoy turning
            complex requirements into simple, intuitive interfaces. I’m looking
            for opportunities to contribute to real products, collaborate with
            other developers, and continue growing through practical challenges.
          </p>
          <p>
            I enjoy working on UI structure, reusable components, and improving
            user experience.
          </p>
        </div>

        <div className="mt-8 flex gap-4">
          <a
            href="/cv.pdf"
            className="rounded-xl border border-white/15 bg-white/5 px-4 py-2 text-sm hover:bg-white/10"
          >
            Download CV
          </a>
          <a
            href="mailto:afsanehlotfi91@gmail.com"
            className="rounded-xl bg-violet-500 px-4 py-2 text-sm text-white hover:bg-violet-600"
          >
            Email me
          </a>
        </div>
      </div>
    </section>
  );
}
