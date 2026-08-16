import { useEffect, useState } from "react";
import { useMediaQuery, usePrefersReducedMotion } from "@/lib/hooks";

export function CustomCursor() {
  const reduced = usePrefersReducedMotion();
  const isFinePointer = useMediaQuery("(pointer: fine)");
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [label, setLabel] = useState("");
  const [active, setActive] = useState(false);

  useEffect(() => {
    if (reduced || !isFinePointer) return;

    document.body.classList.add("custom-cursor");

    const onMove = (event: MouseEvent) => {
      setPosition({ x: event.clientX, y: event.clientY });
      const target = event.target as HTMLElement | null;
      const interactive = target?.closest("a, button, [data-cursor]");
      setActive(Boolean(interactive));
      setLabel(interactive?.getAttribute("data-cursor") ?? "");
    };

    window.addEventListener("pointermove", onMove, { passive: true });
    return () => {
      document.body.classList.remove("custom-cursor");
      window.removeEventListener("pointermove", onMove);
    };
  }, [isFinePointer, reduced]);

  if (reduced || !isFinePointer) return null;

  return (
    <div
      aria-hidden
      className="pointer-events-none fixed top-0 left-0 z-[90] hidden md:block"
      style={{ transform: `translate3d(${position.x}px, ${position.y}px, 0)` }}
    >
      <div
        className={`rounded-full border border-[var(--accent)] bg-[var(--accent)]/20 transition-all duration-200 ${
          active ? "h-14 w-14 -translate-x-7 -translate-y-7" : "h-2.5 w-2.5 -translate-x-1.5 -translate-y-1.5"
        }`}
      />
      {label ? (
        <span className="absolute top-5 left-5 font-mono text-[10px] tracking-[0.2em] text-[var(--accent)] uppercase">
          {label}
        </span>
      ) : null}
    </div>
  );
}
