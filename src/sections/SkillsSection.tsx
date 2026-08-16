import { skillCategories, technologies } from "@/data/technologies";
import { Reveal, SectionHeader } from "@/components/Reveal";
import { TechIcon } from "@/components/TechIcon";

export function SkillsSection() {
  const visible = skillCategories.filter((category) =>
    technologies.some((tech) => tech.category === category.id),
  );

  return (
    <section id="skills" className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-20">
      <Reveal>
        <SectionHeader
          index="05"
          kicker="Skills"
          title="A categorized inventory, taken from the resume."
        />
      </Reveal>

      <div className="grid gap-6 md:grid-cols-2">
        {visible.map((category, index) => (
          <Reveal key={category.id} delay={index * 0.04}>
            <article className="rounded-[1.5rem] border border-[var(--line)] p-6">
              <h3 className="font-mono text-[11px] tracking-[0.22em] text-[var(--gold)] uppercase">
                {category.label}
              </h3>
              <ul className="mt-4 flex flex-wrap gap-2">
                {technologies
                  .filter((tech) => tech.category === category.id)
                  .map((tech) => (
                    <li
                      key={tech.id}
                      className="inline-flex items-center gap-2 rounded-full border border-[var(--line)] px-3 py-1.5 text-sm"
                    >
                      <TechIcon simpleIcon={tech.simpleIcon} name={tech.name} className="h-3.5 w-3.5" />
                      {tech.name}
                    </li>
                  ))}
              </ul>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
