import { useEffect, useState } from "react";
import { ThemeProvider } from "@/lib/theme";
import { Loader } from "@/components/Loader";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { CustomCursor } from "@/components/CustomCursor";
import { HeroSection } from "@/sections/HeroSection";
import { AboutSection } from "@/sections/AboutSection";
import { TechUniverseSection } from "@/sections/TechUniverseSection";
import { ExperienceSection } from "@/sections/ExperienceSection";
import { ProjectsSection } from "@/sections/ProjectsSection";
import { SkillsSection } from "@/sections/SkillsSection";
import { PrinciplesSection } from "@/sections/PrinciplesSection";
import { ResumeSection } from "@/sections/ResumeSection";
import { ContactSection } from "@/sections/ContactSection";

function AppShell() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const finish = () => setLoading(false);
    const timeout = window.setTimeout(finish, 800);
    if (document.readyState === "complete") {
      window.setTimeout(finish, 450);
    } else {
      window.addEventListener("load", () => window.setTimeout(finish, 200), { once: true });
    }
    return () => window.clearTimeout(timeout);
  }, []);

  return (
    <>
      <Loader visible={loading} />
      <CustomCursor />
      <div className="grain" />
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[120] focus:rounded-full focus:bg-[var(--accent)] focus:px-4 focus:py-2 focus:text-[#06110e]"
      >
        Skip to content
      </a>
      <Navbar />
      <main id="main">
        <HeroSection />
        <AboutSection />
        <TechUniverseSection />
        <ExperienceSection />
        <ProjectsSection />
        <SkillsSection />
        <PrinciplesSection />
        <ResumeSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <AppShell />
    </ThemeProvider>
  );
}
