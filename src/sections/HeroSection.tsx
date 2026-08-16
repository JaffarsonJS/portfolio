import { lazy, Suspense } from "react";
import { ArrowDownRight, Download } from "lucide-react";
import { profile } from "@/data/profile";
import { MagneticButton } from "@/components/MagneticButton";
import { useMediaQuery, usePrefersReducedMotion } from "@/lib/hooks";
import { HeroSceneFallback } from "@/three/HeroSceneFallback";

const HeroScene = lazy(() => import("@/three/HeroScene"));

export function HeroSection() {
  const reduced = usePrefersReducedMotion();
  const isMobile = useMediaQuery("(max-width: 768px)");
  const showScene = !reduced && !isMobile;

  return (
    <section id="home" className="relative min-h-svh overflow-hidden pt-24">
      <div className="grid-bg pointer-events-none absolute inset-0" />
      <div className="pointer-events-none absolute top-24 right-[12%] h-72 w-72 rounded-full bg-[var(--accent)]/10 blur-3xl" />
      <div className="pointer-events-none absolute bottom-16 left-[8%] h-64 w-64 rounded-full bg-[var(--accent-2)]/10 blur-3xl" />

      <div className="relative mx-auto grid min-h-[calc(100svh-6rem)] max-w-6xl items-center gap-10 px-5 pb-16 sm:px-8 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <p className="font-mono text-[11px] tracking-[0.32em] text-[var(--accent)] uppercase">
            Hello, I&apos;m
          </p>
          <h1 className="mt-4 font-serif text-[clamp(3.4rem,9vw,7.2rem)] leading-[0.9] tracking-tight">
            {profile.name}
          </h1>
          <p className="mt-6 max-w-xl text-lg text-[var(--ink)] sm:text-xl">
            {profile.title}
            <span className="text-[var(--muted)]"> · {profile.subtitle}</span>
          </p>
          <p className="mt-2 font-mono text-sm text-[var(--gold)]">{profile.specialty}</p>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-[var(--muted)] sm:text-lg">
            {profile.headline}
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <MagneticButton
              href="#projects"
              className="bg-[var(--accent)] text-[#06110e]"
            >
              View my work
              <ArrowDownRight size={16} />
            </MagneticButton>
            <MagneticButton
              href={profile.resumePath}
              download
              className="border border-[var(--line)] text-[var(--ink)]"
            >
              <Download size={15} />
              Download resume
            </MagneticButton>
          </div>

          <div className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm text-[var(--muted)]">
            <a href={`mailto:${profile.email}`} className="hover:text-[var(--ink)]">
              {profile.email}
            </a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer noopener" className="hover:text-[var(--ink)]">
              LinkedIn
            </a>
            <a href={profile.phoneHref} className="hover:text-[var(--ink)]">
              {profile.phone}
            </a>
          </div>

          <p className="mt-8 inline-flex items-center gap-2 rounded-full border border-[var(--line)] px-3 py-1.5 font-mono text-[11px] tracking-[0.14em] text-[var(--muted)] uppercase">
            <span className="h-1.5 w-1.5 rounded-full bg-[var(--accent)]" />
            Currently building BiomeX at Greenbotz
          </p>
        </div>

        <div className="relative h-[360px] sm:h-[460px] lg:h-[560px]">
          <div className="absolute inset-0 rounded-[2rem] border border-[var(--line)] bg-[var(--panel)]">
            {showScene ? (
              <Suspense fallback={<HeroSceneFallback />}>
                <HeroScene />
              </Suspense>
            ) : (
              <HeroSceneFallback />
            )}
          </div>
          <div className="pointer-events-none absolute right-4 bottom-4 left-4 flex justify-between font-mono text-[10px] tracking-[0.18em] text-[var(--muted)] uppercase">
            <span>Frontend</span>
            <span>API</span>
            <span>Backend</span>
            <span>Data</span>
            <span>Cloud</span>
          </div>
        </div>
      </div>
    </section>
  );
}
