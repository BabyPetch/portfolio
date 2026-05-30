import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

// ── cn ────────────────────────────────────────────────────────────────────────
// Combines clsx (conditional classes) + tailwind-merge (dedup Tailwind classes).
// Import and use everywhere instead of template literals.
//
// Usage:
//   cn("px-4 py-2", isActive && "bg-amber", "px-6") → "py-2 bg-amber px-6"

export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs));
}