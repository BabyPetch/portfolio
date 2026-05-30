"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { fadeUp, staggerContainer, drawLine } from "@/lib/motion";

export default function HeroSection() {
  return (
    <section style={{ borderBottom: "1px solid var(--color-border)" }}>
      <div style={{
        maxWidth: "var(--content-w-4k)",
        margin: "0 auto",
        padding: "clamp(3rem, 8vw, 9rem) var(--page-px) 0",
      }}>

        {/* Label */}
        <motion.div
          style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "clamp(1.25rem, 2.5vw, 2.5rem)" }}
          initial="hidden" animate="visible" variants={staggerContainer}
        >
          <motion.span variants={drawLine} style={{
            display: "block", height: "1px",
            width: "clamp(1rem, 2vw, 2rem)",
            flexShrink: 0, backgroundColor: "var(--color-amber)",
          }} />
          <motion.span variants={fadeUp} style={{
            fontFamily: "var(--font-mono)",
            fontSize: "clamp(0.6rem, 0.7vw, 0.75rem)",
            textTransform: "uppercase",
            letterSpacing: "0.15em",
            color: "var(--color-amber)",
          }}>
            Full Stack Developer &amp; AI Engineer
          </motion.span>
        </motion.div>

        {/* Headline — 36px mobile → 96px 4K */}
        <motion.h1
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(2.25rem, 7vw, 6rem)",
            fontWeight: 800,
            lineHeight: 1.02,
            letterSpacing: "-0.03em",
            color: "var(--color-text-primary)",
            marginBottom: "clamp(1.25rem, 2.5vw, 2.5rem)",
            maxWidth: "min(820px, 65vw + 10rem)",
          }}
          initial="hidden" animate="visible" variants={staggerContainer}
        >
          <motion.span variants={fadeUp} style={{ display: "block" }}>
            Crafting digital
          </motion.span>
          <motion.span variants={fadeUp} style={{ display: "block" }}>
            experiences{" "}
            <span style={{ color: "var(--color-amber)" }}>that</span>
          </motion.span>
          <motion.span variants={fadeUp} style={{ display: "block" }}>
            matter.
          </motion.span>
        </motion.h1>

        {/* Bio */}
        <motion.p
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "clamp(0.8rem, 0.9vw, 1rem)",
            fontWeight: 300,
            lineHeight: 1.85,
            color: "var(--color-text-secondary)",
            maxWidth: "clamp(280px, 40vw, 560px)",
            marginBottom: "clamp(1.75rem, 3vw, 3rem)",
          }}
          initial="hidden" animate="visible" variants={fadeUp}
          transition={{ delay: 0.3 }}
        >
          I design and engineer full-stack web applications with a focus on
          clean architecture, performance, and real-world impact. Currently
          exploring the intersection of modern web and applied AI.
        </motion.p>

        {/* CTA */}
        <motion.div
          style={{ display: "flex", flexWrap: "wrap", gap: "0.75rem" }}
          initial="hidden" animate="visible" variants={fadeUp}
          transition={{ delay: 0.4 }}
        >
          <Link href="/work" style={{
            display: "inline-block",
            backgroundColor: "var(--color-amber)",
            color: "var(--color-bg)",
            padding: "clamp(0.5rem, 0.8vw, 0.875rem) clamp(1.25rem, 2vw, 2rem)",
            fontFamily: "var(--font-mono)",
            fontSize: "clamp(0.65rem, 0.7vw, 0.8rem)",
            fontWeight: 500,
            textTransform: "uppercase",
            letterSpacing: "0.1em",
            borderRadius: "2px",
            textDecoration: "none",
            transition: "background-color 0.2s",
          }}>
            View Work
          </Link>
          <Link href="/about" style={{
            display: "inline-block",
            border: "1px solid var(--color-border)",
            color: "var(--color-text-muted)",
            padding: "clamp(0.5rem, 0.8vw, 0.875rem) clamp(1.25rem, 2vw, 2rem)",
            fontFamily: "var(--font-mono)",
            fontSize: "clamp(0.65rem, 0.7vw, 0.8rem)",
            textTransform: "uppercase",
            letterSpacing: "0.1em",
            borderRadius: "2px",
            textDecoration: "none",
            transition: "all 0.2s",
          }}>
            About Me
          </Link>
        </motion.div>

        {/* Stats Bar */}
        <motion.div
          style={{
            marginTop: "clamp(2.5rem, 5vw, 5rem)",
            borderTop: "1px solid var(--color-border)",
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.55, duration: 0.5 }}
        >
          {[
            { value: "3+",   label: "Years experience" },
            { value: "12",   label: "Projects shipped" },
            { value: "8",    label: "Technologies" },
            { value: "100%", label: "Remote-ready" },
          ].map((stat, i) => (
            <motion.div
              key={stat.label}
              style={{
                padding: "clamp(1rem, 2vw, 2.5rem) clamp(0.75rem, 1.5vw, 2rem)",
                borderRight: i < 3 ? "1px solid var(--color-border)" : "none",
              }}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 + i * 0.07, duration: 0.4 }}
            >
              <p style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(1.5rem, 2.5vw, 3rem)",
                fontWeight: 700,
                letterSpacing: "-0.02em",
                color: "var(--color-text-primary)",
              }}>
                {stat.value}
              </p>
              <p style={{
                marginTop: "4px",
                fontFamily: "var(--font-mono)",
                fontSize: "clamp(0.55rem, 0.6vw, 0.7rem)",
                textTransform: "uppercase",
                letterSpacing: "0.1em",
                color: "var(--color-text-faint)",
              }}>
                {stat.label}
              </p>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}