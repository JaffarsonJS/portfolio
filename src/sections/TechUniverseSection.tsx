import { useMemo, useState } from "react";
import { skillCategories, technologies, universeLayers } from "@/data/technologies";
import { Reveal, SectionHeader } from "@/components/Reveal";
import { TechIcon } from "@/components/TechIcon";

export function TechUniverseSection() {
  const [activeId, setActiveId] = useState("rails");
  const active = useMemo(
    () => technologies.find((tech) => tech.id === activeId) ?? technologies[0],
    [activeId],
  );

  return (
    <section id="stack" className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-20">
      <Reveal>
        <SectionHeader
          index="02"
          kicker="Technology universe"
          title="The stack behind the systems."
          description="A map of the technologies I actually use — from React surfaces through Rails services to search, jobs, and cloud delivery."
        />
      </Reveal>

      <div className="grid gap-8 lg:grid-cols-[1fr_320px]">
        <Reveal>
          <div className="rounded-[2rem] border border-[var(--line)] p-5 sm:p-8">
            <div className="space-y-6">
              {universeLayers.map((layer, index) => (
                <div key={layer.id} className="relative">
                  <p className="mb-3 font-mono text-[10px] tracking-[0.28em] text-[var(--gold)] uppercase">
                    {String(index + 1).padStart(2, "0")} / {layer.label}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {layer.techIds.map((id) => {
                      const tech = technologies.find((item) => item.id === id);
                      if (!tech) return null;
                      const selected = tech.id === activeId;
                      return (
                        <button
                          key={tech.id}
                          type="button"
                          onClick={() => setActiveId(tech.id)}
                          className={`group inline-flex items-center gap-2 rounded-full border px-3 py-2 text-sm transition-all ${
                            selected
                              ? "border-[var(--accent)] bg-[var(--accent)]/10 text-[var(--ink)]"
                              : "border-[var(--line)] text-[var(--muted)] hover:border-[var(--accent)]/50 hover:text-[var(--ink)]"
                          }`}
                        >
                          <TechIcon simpleIcon={tech.simpleIcon} name={tech.name} className="h-4 w-4" />
                          {tech.name}
                        </button>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <aside className="glass sticky top-24 rounded-[2rem] p-6">
            <div className="flex items-center gap-3">
              <TechIcon simpleIcon={active.simpleIcon} name={active.name} className="h-8 w-8" />
              <div>
                <p className="text-lg text-[var(--ink)]">{active.name}</p>
                <p className="font-mono text-[11px] tracking-[0.16em] text-[var(--muted)] uppercase">
                  {skillCategories.find((category) => category.id === active.category)?.label}
                </p>
              </div>
            </div>
            <p className="mt-5 text-sm leading-relaxed text-[var(--muted)]">{active.experience}</p>
          </aside>
        </Reveal>
      </div>
    </section>
  );
}
