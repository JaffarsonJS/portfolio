export function HeroSceneFallback() {
  return (
    <div className="relative flex h-full min-h-[280px] items-center justify-center">
      <div className="absolute inset-8 rounded-full border border-[var(--line)]" />
      <ol className="relative z-10 space-y-3 font-mono text-[11px] tracking-[0.16em] text-[var(--muted)] uppercase">
        <li>Frontend · React</li>
        <li>API Gateway · JWT / RBAC</li>
        <li>Backend · Rails services</li>
        <li>Data · PostgreSQL / Redis</li>
        <li>Cloud · Docker / AWS</li>
      </ol>
    </div>
  );
}
