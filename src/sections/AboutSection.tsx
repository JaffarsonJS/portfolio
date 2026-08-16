import { profile } from "@/data/profile";
import { metrics } from "@/data/projects";
import { Reveal, SectionHeader } from "@/components/Reveal";

export function AboutSection() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-20">
      <Reveal>
        <SectionHeader
          index="01"
          kicker="About"
          title="A full-stack engineer for systems that have to hold."
          description="I work where product surfaces meet infrastructure: tenant boundaries, API contracts, realtime events, and the React interfaces that make operations visible."
        />
      </Reveal>

      <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
        <Reveal>
          <div className="space-y-5 text-lg leading-relaxed text-[var(--muted)]">
            {profile.about.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          <ul className="mt-8 flex flex-wrap gap-2">
            {profile.interests.map((item) => (
              <li
                key={item}
                className="rounded-full border border-[var(--line)] px-3 py-1.5 text-sm text-[var(--ink)]"
              >
                {item}
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="glass rounded-3xl p-6">
            <p className="font-mono text-[11px] tracking-[0.22em] text-[var(--muted)] uppercase">
              Education
            </p>
            <ul className="mt-5 space-y-5">
              {profile.education.map((item) => (
                <li key={item.title}>
                  <p className="text-[var(--ink)]">{item.title}</p>
                  {item.detail ? (
                    <p className="mt-1 text-sm text-[var(--muted)]">{item.detail}</p>
                  ) : null}
                </li>
              ))}
            </ul>
            <p className="mt-8 text-sm text-[var(--muted)]">{profile.location}</p>
          </div>
        </Reveal>
      </div>

      <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {metrics.map((metric, index) => (
          <Reveal key={metric.id} delay={index * 0.06}>
            <article className="rounded-3xl border border-[var(--line)] p-6">
              <p className="font-serif text-4xl text-[var(--accent)]">{metric.value}</p>
              <p className="mt-3 text-sm leading-snug text-[var(--ink)]">{metric.label}</p>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
