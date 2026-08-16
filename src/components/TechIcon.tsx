import { getSimpleIcon } from "@/lib/icons";
import { useTheme } from "@/lib/theme";

function contrastFill(hex: string, theme: "dark" | "light") {
  const value = hex.toLowerCase();
  if (theme === "dark" && (value === "000000" || value === "000" || value === "111111")) {
    return "currentColor";
  }
  if (theme === "light" && (value === "ffffff" || value === "fff")) {
    return "currentColor";
  }
  return `#${hex}`;
}

export function TechIcon({
  simpleIcon,
  name,
  className = "h-5 w-5",
}: {
  simpleIcon?: string;
  name: string;
  className?: string;
}) {
  const { theme } = useTheme();
  const icon = getSimpleIcon(simpleIcon);

  if (!icon) {
    return (
      <span
        aria-hidden
        className={`inline-flex items-center justify-center rounded-md bg-[var(--accent)]/12 font-mono text-[10px] font-medium text-[var(--accent)] ${className}`}
      >
        {name.slice(0, 2).toUpperCase()}
      </span>
    );
  }

  return (
    <svg
      role="img"
      aria-label={icon.title}
      viewBox="0 0 24 24"
      className={className}
      fill={contrastFill(icon.hex, theme)}
    >
      <path d={icon.path} />
    </svg>
  );
}
