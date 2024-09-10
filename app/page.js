import About from "@/components/About";
import HeroSection from "@/components/HeroSection";
import Skills from "@/components/Skills";
export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Diwash Karmacharya",
    image: "/dwas.jpg",
    description: " Hi, I'm Diwash Karmacharya |Frontend Developer ",
  };
  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      ></script>
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
