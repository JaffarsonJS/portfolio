import { useState } from "react";
import { projects, type ArchitectureNode } from "@/data/projects";
import { Reveal, SectionHeader } from "@/components/Reveal";

function ProjectVisual({ type }: { type: "saas" | "api" | "dashboard" }) {
  if (type === "api") {
    return (
      <div className="relative h-44 overflow-hidden rounded-2xl border border-[var(--line)] bg-[radial-gradient(circle_at_20%_20%,rgba(126,224,200,0.16),transparent_45%),radial-gradient(circle_at_80%_80%,rgba(154,166,255,0.16),transparent_40%)]">
        <p className="absolute top-4 left-4 font-mono text-[10px] tracking-[0.22em] text-[var(--muted)] uppercase">
          Conceptual architecture
        </p>
        <svg viewBox="0 0 400 160" className="absolute inset-0 h-full w-full" aria-hidden>
          <path d="M40 80 H360" stroke="currentColor" className="text-[var(--accent)]" strokeOpacity="0.35" />
          {[40, 120, 200, 280, 360].map((x) => (
            <circle key={x} cx={x} cy="80" r="8" fill="currentColor" className="text-[var(--accent)]" />
          ))}
        </svg>
      </div>
    );
  }

  if (type === "dashboard") {
    return (
      <div className="relative h-44 overflow-hidden rounded-2xl border border-[var(--line)] p-4">
        <p className="font-mono text-[10px] tracking-[0.22em] text-[var(--muted)] uppercase">
          Conceptual dashboard
        </p>
        <div className="mt-4 grid grid-cols-3 gap-2">
          {[28, 62, 44].map((height, index) => (
            <div key={index} className="flex h-24 items-end rounded-xl bg-[var(--bg-soft)] p-2">
              <div
                className="w-full rounded-md bg-[var(--gold)]/70"
                style={{ height: `${height}%` }}
              />
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="relative h-44 overflow-hidden rounded-2xl border border-[var(--line)] p-4">
      <p className="font-mono text-[10px] tracking-[0.22em] text-[var(--muted)] uppercase">
        Conceptual product surface
      </p>
      <div className="mt-4 grid grid-cols-2 gap-2">
        <div className="h-24 rounded-xl bg-[var(--accent)]/15" />
        <div className="space-y-2">
          <div className="h-7 rounded-lg bg-[var(--accent-2)]/20" />
          <div className="h-7 rounded-lg bg-[var(--line)]" />
          <div className="h-7 rounded-lg bg-[var(--line)]" />
        </div>
      </div>
    </div>
  );
}

function ArchitectureMap({ nodes }: { nodes: ArchitectureNode[] }) {
  const [active, setActive] = useState(nodes[0]?.id);
  const current = nodes.find((node) => node.id === active) ?? nodes[0];

  return (
    <div className="mt-8 rounded-[1.5rem] border border-[var(--line)] p-5">
      <p className="font-mono text-[11px] tracking-[0.2em] text-[var(--muted)] uppercase">
        Architecture
      </p>
      <div className="mt-4 flex flex-wrap gap-2">
        {nodes.map((node, index) => (
          <button
            key={node.id}
            type="button"
            onClick={() => setActive(node.id)}
            onMouseEnter={() => setActive(node.id)}
            className={`rounded-full border px-3 py-1.5 text-sm ${
              node.id === active
                ? "border-[var(--accent)] text-[var(--ink)]"
                : "border-[var(--line)] text-[var(--muted)]"
            }`}
          >
            {index + 1}. {node.label}
          </button>
        ))}
      </div>
      <p className="mt-4 text-sm leading-relaxed text-[var(--muted)]">{current.detail}</p>
    </div>
  );
}

export function ProjectsSection() {
  return (
    <section id="projects" className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-20">
      <Reveal>
        <SectionHeader
          index="04"
          kicker="Projects"
          title="Work that shows how the system fits together."
          description="BiomeX is the core product story: a multi-tenant building platform with a Rails backend and a role-based React client. Visuals are conceptual, not product screenshots."
        />
      </Reveal>

      <div className="space-y-8">
        {projects.map((project, index) => (
          <Reveal key={project.id} delay={index * 0.05}>
            <article
              data-cursor="VIEW"
              className="grid gap-6 rounded-[2rem] border border-[var(--line)] p-5 transition-transform duration-300 hover:-translate-y-1 sm:p-8 lg:grid-cols-[0.9fr_1.1fr]"
            >
              <ProjectVisual type={project.type} />
              <div>
                <p className="font-mono text-[11px] tracking-[0.2em] text-[var(--gold)] uppercase">
                  {project.layer}
                </p>
                <h3 className="mt-2 font-serif text-3xl">
                  {project.name}
                  <span className="text-[var(--muted)]"> — {project.tagline}</span>
                </h3>
                <p className="mt-4 text-[var(--muted)]">{project.description}</p>
                <div className="mt-5 grid gap-4 sm:grid-cols-2">
                  <div>
                    <p className="font-mono text-[11px] tracking-[0.16em] text-[var(--accent)] uppercase">
                      Problem
                    </p>
                    <p className="mt-2 text-sm leading-relaxed text-[var(--ink)]/85">{project.problem}</p>
                  </div>
                  <div>
                    <p className="font-mono text-[11px] tracking-[0.16em] text-[var(--accent)] uppercase">
                      Contribution
                    </p>
                    <p className="mt-2 text-sm leading-relaxed text-[var(--ink)]/85">{project.contribution}</p>
                  </div>
                </div>
                <div className="mt-5 flex flex-wrap gap-2">
                  {project.stack.map((item) => (
                    <span key={item} className="rounded-full border border-[var(--line)] px-2.5 py-1 font-mono text-[11px] text-[var(--muted)]">
                      {item}
                    </span>
                  ))}
                </div>
                {project.architecture ? <ArchitectureMap nodes={project.architecture} /> : null}
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
