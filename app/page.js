import About from "@/components/About";
import HeroSection from "@/components/HeroSection";
import Projects from "@/components/projects";
import Skills from "@/components/Skills";
import BlogSection from "@/components/BlogSection";

export default function Home() {
  return (
    <div className="gap-10 flex flex-col pb-10">
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

      <article className="mx-10 md:mx-40">
        <BlogSection />
      </article>
    </div>
  );
}
