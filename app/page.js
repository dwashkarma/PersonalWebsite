import About from "@/components/About";
import HeroSection from "@/components/HeroSection";
import Projects from "@/components/projects";
import Skills from "@/components/Skills";
import Blog from "@/app/components/Blog";

export default function Home() {
  return (
    <div>
      <main>
        <HeroSection />
      </main>
      <article className="grid justify-between  grid-cols-1 xl:grid-cols-2 gap-6 mx-10 md:mx-40  ">
        <About />

        <Skills />
      </article>

      <article>
        <Projects />
      </article>

      <article>
        <Blog />
      </article>
    </div>
  );
}
