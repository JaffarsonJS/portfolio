import { profile, socialLinks } from "@/data/profile";
import { Reveal } from "@/components/Reveal";
import { MagneticButton } from "@/components/MagneticButton";

export function ContactSection() {
  return (
    <section id="contact" className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-20">
      <Reveal>
        <p className="font-mono text-[11px] tracking-[0.28em] text-[var(--muted)] uppercase">
          08 — Contact
        </p>
        <h2 className="mt-4 max-w-3xl font-serif text-4xl leading-[1.1] sm:text-6xl">
          Let&apos;s build something that has to work in production.
        </h2>
        <p className="mt-6 max-w-xl text-lg text-[var(--muted)]">
          I&apos;m based in {profile.location}. For engineering conversations around SaaS platforms, APIs, and product systems, email is the most direct path.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <MagneticButton href={`mailto:${profile.email}`} className="bg-[var(--accent)] text-[#06110e]">
            Email me
          </MagneticButton>
          {socialLinks
            .filter((link) => link.id !== "email")
            .map((link) => (
              <MagneticButton
                key={link.id}
                href={link.href}
                className="border border-[var(--line)] text-[var(--ink)]"
              >
                {link.label}
              </MagneticButton>
            ))}
        </div>
      </Reveal>
    </section>
  );
}
