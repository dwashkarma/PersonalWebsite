import About from "@/components/About";
import Education from "@/components/Education";
import HeroSection from "@/components/HeroSection";
import Projects from "@/components/projects";
import Skills from "@/components/Skills";
import BlogSection from "@/components/BlogSection";
import Contact from "@/components/contact-me";

export default function Home() {
  return (
    <div className="gap-10 flex flex-col pb-10">
      <main>
        <HeroSection />
      </main>
      <article className="grid justify-between grid-cols-1 xl:grid-cols-2 gap-6 mx-10 md:mx-40">
        <About />
        <div className="flex flex-col">
          <Skills />
          <Education />
        </div>
      </article>

      <article>
        <Projects />
      </article>

      <article className="flex flex-col gap-10 mx-10 md:mx-20 lg:mx-40">
        <BlogSection />
      </article>
      <Contact />
    </div>
  );
}
