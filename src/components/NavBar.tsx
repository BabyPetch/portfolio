"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { navLinks, siteConfig } from "@/data/site";

export default function NavBar() {
  const pathname = usePathname();

  return (
    <header style={{
      position: "sticky",
      top: 0,
      zIndex: 50,
      borderBottom: "1px solid var(--color-border)",
      backgroundColor: "var(--color-bg)",
      backdropFilter: "blur(8px)",
      WebkitBackdropFilter: "blur(8px)",
    }}>
      <nav style={{
        maxWidth: "var(--content-w-4k)",
        margin: "0 auto",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "clamp(0.875rem, 1.5vw, 1.25rem) var(--page-px)",
      }}>

        {/* Logo */}
        <Link href="/" style={{
          fontFamily: "var(--font-display)",
          fontSize: "clamp(1rem, 1.2vw, 1.375rem)",
          fontWeight: 700,
          letterSpacing: "-0.02em",
          color: "var(--color-text-primary)",
          textDecoration: "none",
          flexShrink: 0,
        }}>
          km<span style={{ color: "var(--color-amber)" }}>.</span>dev
        </Link>

        {/* Nav Links */}
        <ul style={{
          display: "flex",
          alignItems: "center",
          gap: "clamp(1.5rem, 3vw, 3.5rem)",
          listStyle: "none",
        }}>
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link href={link.href} style={{
                fontFamily: "var(--font-mono)",
                fontSize: "clamp(0.625rem, 0.7vw, 0.8rem)",
                textTransform: "uppercase",
                letterSpacing: "0.12em",
                color: pathname === link.href
                  ? "var(--color-text-primary)"
                  : "var(--color-text-muted)",
                textDecoration: "none",
                transition: "color 0.2s",
              }}>
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Status badge */}
        {siteConfig.available && (
          <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", flexShrink: 0 }}>
            <span style={{ position: "relative", display: "flex", width: "7px", height: "7px", flexShrink: 0 }}>
              <span style={{
                position: "absolute", inset: 0, borderRadius: "50%",
                backgroundColor: "var(--color-amber)", opacity: 0.4,
                animation: "ping 1.8s cubic-bezier(0,0,0.2,1) infinite",
              }} />
              <span style={{
                position: "relative", width: "7px", height: "7px",
                borderRadius: "50%", backgroundColor: "var(--color-amber)",
              }} />
            </span>
            <span style={{
              fontFamily: "var(--font-mono)",
              fontSize: "clamp(0.625rem, 0.65vw, 0.75rem)",
              color: "var(--color-amber)",
              whiteSpace: "nowrap",
            }}>
              available for work
            </span>
          </div>
        )}

      </nav>
    </header>
  );
}