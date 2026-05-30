import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import HeroSection from "@/sections/HeroSection";
import ProjectsSection from "@/sections/Projects";
import TechStackSection from "@/sections/TechStack";
import ContactSection from "@/sections/Contact";

export default function HomePage() {
  return (
    <>
      <NavBar />
      <main>
        <HeroSection />
        <ProjectsSection />
        <TechStackSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}