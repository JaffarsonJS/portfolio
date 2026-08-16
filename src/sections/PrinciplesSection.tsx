import { principles } from "@/data/projects";
import { Reveal, SectionHeader } from "@/components/Reveal";

export function PrinciplesSection() {
  return (
    <section className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-20">
      <Reveal>
        <SectionHeader
          index="06"
          kicker="How I build"
          title="Engineering principles from the work itself."
          description="These are not slogans. They are habits visible in the BiomeX architecture and the frontend systems around it."
        />
      </Reveal>
      <div className="grid gap-4 md:grid-cols-2">
        {principles.map((principle, index) => (
          <Reveal key={principle.id} delay={index * 0.05}>
            <article className="h-full rounded-[1.5rem] border border-[var(--line)] p-6">
              <p className="font-mono text-[11px] text-[var(--accent)]">0{index + 1}</p>
              <h3 className="mt-3 font-serif text-2xl">{principle.title}</h3>
              <p className="mt-3 text-[var(--muted)]">{principle.body}</p>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
