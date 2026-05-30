"use client";

import { motion } from "framer-motion";
import { fadeUp, staggerContainer, viewportReveal } from "@/lib/motion";
import { stackGroups } from "@/data/site";

export default function TechStackSection() {
  return (
    <section id="stack" style={{ borderBottom: "1px solid var(--color-border)" }}>
      <div style={{ maxWidth: "var(--content-w-4k)", margin: "0 auto" }}>

        {/* Header */}
        <div style={{
          padding: "clamp(2.5rem, 4vw, 4rem) var(--page-px) clamp(1.5rem, 2.5vw, 2.5rem)",
          borderBottom: "1px solid var(--color-border)",
          display: "flex",
          alignItems: "center",
          gap: "1.25rem",
        }}>
          <motion.span {...viewportReveal} variants={fadeUp} style={{
            fontFamily: "var(--font-mono)",
            fontSize: "clamp(0.6rem, 0.65vw, 0.7rem)",
            textTransform: "uppercase",
            letterSpacing: "0.15em",
            color: "var(--color-text-faint)",
          }}>
            Technical Stack
          </motion.span>
          <motion.div
            {...viewportReveal}
            variants={{ hidden: { scaleX: 0, originX: 0 }, visible: { scaleX: 1, transition: { duration: 0.6, ease: [0.16,1,0.3,1], delay: 0.1 } } }}
            style={{ flex: 1, height: "1px", backgroundColor: "var(--color-border)" }}
          />
        </div>

        {/* Stack grid */}
        <motion.div
          {...viewportReveal}
          variants={staggerContainer}
          style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)" }}
        >
          {stackGroups.map((group, i) => (
            <motion.div
              key={group.category}
              variants={fadeUp}
              style={{
                padding: "clamp(1.75rem, 3vw, 3.5rem) var(--page-px)",
                borderRight: i < stackGroups.length - 1 ? "1px solid var(--color-border)" : "none",
              }}
            >
              {/* Group title */}
              <p style={{
                fontFamily: "var(--font-mono)",
                fontSize: "clamp(0.55rem, 0.6vw, 0.65rem)",
                textTransform: "uppercase",
                letterSpacing: "0.15em",
                color: "var(--color-text-faint)",
                marginBottom: "clamp(0.875rem, 1.2vw, 1.25rem)",
                paddingBottom: "clamp(0.75rem, 1vw, 1rem)",
                borderBottom: "1px solid var(--color-border)",
              }}>
                {group.label}
              </p>

              {/* Items */}
              <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "clamp(0.5rem, 0.75vw, 0.875rem)" }}>
                {group.items.map((item) => (
                  <li key={item.name} style={{ display: "flex", alignItems: "center", gap: "0.625rem" }}>
                    <span style={{
                      width: "3px", height: "3px", borderRadius: "50%", flexShrink: 0,
                      backgroundColor: item.primary ? "var(--color-amber)" : "var(--color-border-strong)",
                    }} />
                    <span style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: "clamp(0.7rem, 0.8vw, 0.875rem)",
                      color: item.primary ? "var(--color-text-secondary)" : "var(--color-text-muted)",
                    }}>
                      {item.name}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}