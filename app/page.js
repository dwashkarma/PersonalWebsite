import About from "@/components/About";
import HeroSection from "@/components/HeroSection";
import Skills from "@/components/Skills";
export default function Home() {
  return (
    <div>
      <main>
        <HeroSection />
      </main>
      <article>
        <About />
        <Skills />
      </article>
    </div>
  );
}
