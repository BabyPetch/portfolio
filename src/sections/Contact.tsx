"use client";

import { motion } from "framer-motion";
import { fadeUp, staggerContainer, viewportReveal } from "@/lib/motion";
import { socialLinks, siteConfig } from "@/data/site";

export default function ContactSection() {
  return (
    <section style={{ borderBottom: "1px solid var(--color-border)" }}>
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
            Contact
          </motion.span>
          <motion.div
            {...viewportReveal}
            variants={{ hidden: { scaleX: 0, originX: 0 }, visible: { scaleX: 1, transition: { duration: 0.6, ease: [0.16,1,0.3,1], delay: 0.1 } } }}
            style={{ flex: 1, height: "1px", backgroundColor: "var(--color-border)" }}
          />
        </div>

        {/* Main content — 2 col */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "1fr auto",
          alignItems: "end",
          gap: "clamp(2rem, 4vw, 4rem)",
          padding: "clamp(2.5rem, 5vw, 6rem) var(--page-px)",
        }}>
          {/* Left */}
          <motion.div {...viewportReveal} variants={staggerContainer}>
            <motion.h2
              variants={fadeUp}
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(2rem, 5vw, 5rem)",
                fontWeight: 800,
                letterSpacing: "-0.03em",
                lineHeight: 1.05,
                color: "var(--color-text-primary)",
                marginBottom: "clamp(1rem, 1.5vw, 1.5rem)",
              }}
            >
              Let&apos;s build<br />
              <span style={{ color: "var(--color-amber)" }}>something</span> real.
            </motion.h2>

            <motion.p
              variants={fadeUp}
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "clamp(0.75rem, 0.85vw, 0.95rem)",
                fontWeight: 300,
                lineHeight: 1.8,
                color: "var(--color-text-secondary)",
                maxWidth: "clamp(280px, 35vw, 520px)",
                marginBottom: "clamp(1.5rem, 2.5vw, 2.5rem)",
              }}
            >
              Open to full-time roles, freelance projects, and interesting
              collaborations. I typically respond within 24 hours.
            </motion.p>

            {/* Email CTA */}
            <motion.a
              variants={fadeUp}
              href={`mailto:${siteConfig.email}`}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.75rem",
                backgroundColor: "var(--color-bg-surface)",
                border: "1px solid var(--color-border)",
                padding: "clamp(0.875rem, 1.2vw, 1.25rem) clamp(1.25rem, 2vw, 2rem)",
                borderRadius: "2px",
                textDecoration: "none",
                transition: "border-color 0.2s",
              }}
            >
              <span style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(1rem, 1.5vw, 1.5rem)",
                fontWeight: 700,
                color: "var(--color-amber)",
                letterSpacing: "-0.01em",
              }}>
                {siteConfig.email}
              </span>
              <span style={{ color: "var(--color-text-faint)", fontSize: "1.25rem" }}>↗</span>
            </motion.a>
          </motion.div>

          {/* Right — social links */}
          <motion.div
            {...viewportReveal}
            variants={staggerContainer}
            style={{ display: "flex", flexDirection: "column", gap: "clamp(0.5rem, 0.75vw, 0.875rem)", alignItems: "flex-end" }}
          >
            {socialLinks.map((link) => (
              <motion.a
                key={link.platform}
                variants={fadeUp}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "clamp(0.65rem, 0.7vw, 0.75rem)",
                  textTransform: "uppercase",
                  letterSpacing: "0.1em",
                  color: "var(--color-text-muted)",
                  textDecoration: "none",
                  display: "flex",
                  alignItems: "center",
                  gap: "0.375rem",
                  transition: "color 0.2s",
                }}
              >
                {link.platform} ↗
              </motion.a>
            ))}
          </motion.div>
        </div>

      </div>
    </section>
  );
}