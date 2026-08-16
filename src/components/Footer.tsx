import { profile, socialLinks } from "@/data/profile";

export function Footer() {
  return (
    <footer className="border-t border-[var(--line)] px-5 py-10 sm:px-8">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="font-serif text-2xl">{profile.name}</p>
          <p className="mt-1 text-sm text-[var(--muted)]">
            {profile.title} · {profile.subtitle}
          </p>
          <p className="mt-3 font-mono text-xs text-[var(--muted)]">
            Ruby on Rails · React.js · PostgreSQL · Docker
          </p>
        </div>
        <div className="flex flex-wrap gap-5 text-sm text-[var(--muted)]">
          {socialLinks.map((link) => (
            <a
              key={link.id}
              href={link.href}
              target={link.external ? "_blank" : undefined}
              rel={link.external ? "noreferrer noopener" : undefined}
              className="hover:text-[var(--ink)]"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
      <p className="mx-auto mt-8 max-w-6xl font-mono text-[11px] text-[var(--muted)]">
        © {new Date().getFullYear()} {profile.name}
      </p>
    </footer>
  );
}
