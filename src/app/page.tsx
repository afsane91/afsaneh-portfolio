import Projects from "../../components/Projects";
import ProfileIntro from "../../components/ProfileIntro";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#060A12] text-white flex flex-col">
      {/* Header */}
      <header className="border-b border-white/10">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
          <nav className="flex gap-8 text-sm text-white/80">
            {/* <a href="#projects" className="hover:text-white">
              Projects
            </a> */}
            <a href="#about" className="hover:text-white">
              Home
            </a>
          </nav>

          <div className="flex gap-4 text-white/80">
            <a href="https://github.com/afsane91" className="hover:text-white">
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/afsanehlotfi/"
              className="hover:text-white"
            >
              LinkedIn
            </a>
            <a
              href="mailto:afsanehlotfi91@gmail.com"
              className="hover:text-white"
            >
              Email
            </a>
          </div>
        </div>
      </header>

      <ProfileIntro />
      {/* <Projects /> */}
      <footer className="border-t border-white/10 py-10 text-center text-sm text-white/60 mt-auto">
        Afsaneh Lotfi © {new Date().getFullYear()}
      </footer>
    </main>
  );
}
