import { type ReactNode, type MouseEvent } from "react";
import { usePrefersReducedMotion } from "@/lib/hooks";

type Props = {
  children: ReactNode;
  className?: string;
  href?: string;
  download?: string | boolean;
  onClick?: () => void;
  ariaLabel?: string;
};

export function MagneticButton({
  children,
  className,
  href,
  download,
  onClick,
  ariaLabel,
}: Props) {
  const reduced = usePrefersReducedMotion();
  const classNames = `inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-medium transition-[transform,background,color,border-color] duration-200 will-change-transform ${className ?? ""}`;

  const tilt = (event: MouseEvent<HTMLElement>) => {
    if (reduced) return;
    const node = event.currentTarget;
    const rect = node.getBoundingClientRect();
    const x = event.clientX - rect.left - rect.width / 2;
    const y = event.clientY - rect.top - rect.height / 2;
    node.style.transform = `translate(${x * 0.18}px, ${y * 0.22}px)`;
  };

  const reset = (event: MouseEvent<HTMLElement>) => {
    event.currentTarget.style.transform = "translate(0, 0)";
  };

  if (href) {
    const external = href.startsWith("http");
    return (
      <a
        href={href}
        download={download}
        target={external ? "_blank" : undefined}
        rel={external ? "noreferrer noopener" : undefined}
        className={classNames}
        aria-label={ariaLabel}
        onMouseMove={tilt}
        onMouseLeave={reset}
      >
        {children}
      </a>
    );
  }

  return (
    <button type="button" className={classNames} aria-label={ariaLabel} onClick={onClick} onMouseMove={tilt} onMouseLeave={reset}>
      {children}
    </button>
  );
}
