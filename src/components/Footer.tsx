import { siteConfig } from "@/data/site";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer style={{ borderTop: "1px solid var(--color-border)" }}>
      <div style={{
        maxWidth: "var(--content-w-4k)",
        margin: "0 auto",
        padding: "clamp(1.25rem, 1.5vw, 1.75rem) var(--page-px)",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}>
        <span style={{
          fontFamily: "var(--font-mono)",
          fontSize: "clamp(0.6rem, 0.65vw, 0.7rem)",
          color: "var(--color-text-faint)",
          letterSpacing: "0.06em",
        }}>
          © {year} {siteConfig.name} — all rights reserved
        </span>
        <span style={{
          fontFamily: "var(--font-mono)",
          fontSize: "clamp(0.6rem, 0.65vw, 0.7rem)",
          color: "var(--color-text-faint)",
          letterSpacing: "0.06em",
        }}>
          built with{" "}
          <span style={{ color: "var(--color-amber-dim)" }}>Next.js</span>
          {" + "}
          <span style={{ color: "var(--color-amber-dim)" }}>Framer Motion</span>
        </span>
      </div>
    </footer>
  );
}