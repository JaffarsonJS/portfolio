import { experience } from "@/data/experience";
import { Reveal, SectionHeader } from "@/components/Reveal";

export function ExperienceSection() {
  return (
    <section id="experience" className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-20">
      <Reveal>
        <SectionHeader
          index="03"
          kicker="Experience"
          title="A short, focused career in product software."
          description="Three roles spanning full-stack SaaS, frontend systems, and financial dashboards."
        />
      </Reveal>

      <ol className="relative space-y-8 before:absolute before:top-2 before:bottom-2 before:left-[11px] before:w-px before:bg-[var(--line)] sm:before:left-[15px]">
        {experience.map((role, index) => (
          <Reveal key={role.id} delay={index * 0.05}>
            <li className="relative grid gap-5 pl-10 sm:pl-14 lg:grid-cols-[220px_1fr]">
              <span className="absolute top-2 left-0 h-6 w-6 rounded-full border border-[var(--accent)] bg-[var(--bg)]">
                <span className="absolute inset-1.5 rounded-full bg-[var(--accent)]" />
              </span>
              <div>
                <p className="font-mono text-xs text-[var(--gold)]">{role.period}</p>
                <h3 className="mt-2 text-xl text-[var(--ink)]">{role.role}</h3>
                <p className="text-[var(--muted)]">{role.company}</p>
                {role.partTime ? (
                  <p className="mt-2 font-mono text-[11px] tracking-[0.16em] text-[var(--accent)] uppercase">
                    Part-time
                  </p>
                ) : null}
                {role.current ? (
                  <p className="mt-2 font-mono text-[11px] tracking-[0.16em] text-[var(--accent)] uppercase">
                    Current
                  </p>
                ) : null}
              </div>
              <article className="rounded-[1.5rem] border border-[var(--line)] p-6">
                {role.project ? (
                  <p className="mb-3 text-sm text-[var(--accent)]">{role.project}</p>
                ) : null}
                <p className="text-[var(--muted)]">{role.summary}</p>
                <ul className="mt-5 space-y-2.5 text-sm leading-relaxed text-[var(--ink)]/90">
                  {role.highlights.slice(0, 5).map((item) => (
                    <li key={item} className="pl-4 before:mr-3 before:-ml-4 before:text-[var(--accent)] before:content-['→']">
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="mt-5 flex flex-wrap gap-2">
                  {role.technologies.map((tech) => (
                    <span key={tech} className="rounded-full border border-[var(--line)] px-2.5 py-1 font-mono text-[11px] text-[var(--muted)]">
                      {tech}
                    </span>
                  ))}
                </div>
              </article>
            </li>
          </Reveal>
        ))}
      </ol>
    </section>
  );
}
