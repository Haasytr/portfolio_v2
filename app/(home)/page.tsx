import { AboutMe } from "./_components/about-me";
import { Skills } from "./_components/skills";
import { BestProjects } from "./_components/best-projects";
import { ContactMe } from "./_components/contact-me";
import { Footer } from "./_components/footer";
import { Hero } from "./_components/hero";

export default function Home() {
  return (
    <div className="space-y-[200px]">
      <Hero />
      <div className="px-20 space-y-[200px]">
        <AboutMe />
        <Skills />
        <BestProjects />
        <ContactMe />
        <Footer />
      </div>
    </div>
  );
}
