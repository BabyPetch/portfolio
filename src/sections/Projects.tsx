"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { fadeUp, staggerContainer, viewportReveal } from "@/lib/motion";
import { projects, featuredProject, nonFeaturedProjects } from "@/data/projects";

const STATUS_LABEL: Record<string, string> = {
  featured:    "Featured",
  production:  "Production",
  "open-source": "Open Source",
  freelance:   "Freelance",
};

export default function ProjectsSection() {
  return (
    <section style={{ borderBottom: "1px solid var(--color-border)" }}>
      <div style={{ maxWidth: "var(--content-w-4k)", margin: "0 auto" }}>

        {/* Section Header */}
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
            Selected Work
          </motion.span>
          <motion.div
            {...viewportReveal}
            variants={{ hidden: { scaleX: 0, originX: 0 }, visible: { scaleX: 1, transition: { duration: 0.6, ease: [0.16,1,0.3,1], delay: 0.1 } } }}
            style={{ flex: 1, height: "1px", backgroundColor: "var(--color-border)" }}
          />
        </div>

        {/* Featured Project */}
        <motion.div
          {...viewportReveal}
          variants={fadeUp}
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            borderBottom: "1px solid var(--color-border)",
          }}
        >
          {/* Left — info */}
          <div style={{
            padding: "clamp(2rem, 4vw, 4.5rem) var(--page-px)",
            borderRight: "1px solid var(--color-border)",
          }}>
            <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "clamp(1rem, 2vw, 2rem)" }}>
              <span style={{ width: "5px", height: "5px", borderRadius: "50%", backgroundColor: "var(--color-amber)", flexShrink: 0 }} />
              <span style={{
                fontFamily: "var(--font-mono)",
                fontSize: "clamp(0.6rem, 0.65vw, 0.7rem)",
                textTransform: "uppercase",
                letterSpacing: "0.14em",
                color: "var(--color-amber)",
              }}>
                {STATUS_LABEL[featuredProject.status]}
              </span>
            </div>

            <h3 style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(1.25rem, 2.5vw, 2.25rem)",
              fontWeight: 700,
              letterSpacing: "-0.02em",
              color: "var(--color-text-primary)",
              marginBottom: "clamp(0.75rem, 1.2vw, 1.25rem)",
            }}>
              {featuredProject.title}
            </h3>

            <p style={{
              fontFamily: "var(--font-mono)",
              fontSize: "clamp(0.75rem, 0.85vw, 0.9rem)",
              fontWeight: 300,
              lineHeight: 1.8,
              color: "var(--color-text-secondary)",
              maxWidth: "480px",
              marginBottom: "clamp(1.25rem, 2vw, 2rem)",
            }}>
              {featuredProject.description}
            </p>

            {/* Stack tags */}
            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem", marginBottom: "clamp(1.5rem, 2.5vw, 2.5rem)" }}>
              {featuredProject.stack.map((t) => (
                <span key={t} style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "clamp(0.55rem, 0.6vw, 0.65rem)",
                  color: "var(--color-text-muted)",
                  border: "1px solid var(--color-border)",
                  padding: "0.25rem 0.625rem",
                  borderRadius: "2px",
                  letterSpacing: "0.06em",
                }}>
                  {t}
                </span>
              ))}
            </div>

            {/* Links */}
            <div style={{ display: "flex", gap: "0.75rem" }}>
              {featuredProject.liveUrl && (
                <a href={featuredProject.liveUrl} target="_blank" rel="noopener noreferrer" style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "clamp(0.65rem, 0.7vw, 0.75rem)",
                  color: "var(--color-amber)",
                  textDecoration: "none",
                  border: "1px solid var(--color-amber-dim)",
                  padding: "0.5rem 1.25rem",
                  borderRadius: "2px",
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  transition: "all 0.2s",
                }}>
                  Live ↗
                </a>
              )}
              {featuredProject.repoUrl && (
                <a href={featuredProject.repoUrl} target="_blank" rel="noopener noreferrer" style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "clamp(0.65rem, 0.7vw, 0.75rem)",
                  color: "var(--color-text-muted)",
                  textDecoration: "none",
                  border: "1px solid var(--color-border)",
                  padding: "0.5rem 1.25rem",
                  borderRadius: "2px",
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  transition: "all 0.2s",
                }}>
                  GitHub
                </a>
              )}
            </div>
          </div>

          {/* Right — code preview */}
          <div style={{
            backgroundColor: "var(--color-bg-surface)",
            padding: "clamp(1.5rem, 3vw, 3rem)",
            display: "flex",
            alignItems: "center",
            overflow: "hidden",
          }}>
            <pre style={{
              fontFamily: "var(--font-mono)",
              fontSize: "clamp(0.65rem, 0.75vw, 0.8rem)",
              lineHeight: 1.9,
              color: "var(--color-text-faint)",
              overflowX: "auto",
              width: "100%",
            }}>
{`// document pipeline
`}<span style={{color:"var(--color-amber)"}}>export async function</span>{` processDoc(
  file: `}<span style={{color:"var(--color-text-secondary)"}}>Buffer</span>{`,
  opts: `}<span style={{color:"var(--color-text-secondary)"}}>Options</span>{`
) {
  const queue = `}<span style={{color:"var(--color-amber)"}}>await</span>{` getQueue()
  const job   = `}<span style={{color:"var(--color-amber)"}}>await</span>{` queue.add({
    fileId: uuid(),
    userId: opts.userId,
  })
  `}<span style={{color:"var(--color-amber-dim)"}}>return</span>{` { jobId: job.id }
}`}
            </pre>
          </div>
        </motion.div>

        {/* Other Projects Grid */}
        <motion.div
          {...viewportReveal}
          variants={staggerContainer}
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
          }}
        >
          {nonFeaturedProjects.map((project, i) => (
            <motion.div
              key={project.id}
              variants={fadeUp}
              style={{
                padding: "clamp(1.5rem, 2.5vw, 2.5rem) var(--page-px)",
                borderRight: i < nonFeaturedProjects.length - 1 ? "1px solid var(--color-border)" : "none",
                position: "relative",
                transition: "background-color 0.2s",
              }}
              onMouseEnter={e => (e.currentTarget.style.backgroundColor = "var(--color-bg-surface)")}
              onMouseLeave={e => (e.currentTarget.style.backgroundColor = "transparent")}
            >
              {/* Arrow */}
              <span style={{
                position: "absolute",
                top: "clamp(1rem, 1.5vw, 1.5rem)",
                right: "clamp(1rem, 1.5vw, 1.5rem)",
                fontFamily: "var(--font-mono)",
                fontSize: "clamp(0.875rem, 1vw, 1.125rem)",
                color: "var(--color-text-faint)",
              }}>↗</span>

              <div style={{ display: "flex", alignItems: "center", gap: "0.4rem", marginBottom: "clamp(0.75rem, 1.2vw, 1.25rem)" }}>
                <span style={{ width: "4px", height: "4px", borderRadius: "50%", backgroundColor: "var(--color-amber)", flexShrink: 0 }} />
                <span style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "clamp(0.55rem, 0.6vw, 0.65rem)",
                  textTransform: "uppercase",
                  letterSpacing: "0.12em",
                  color: "var(--color-amber)",
                }}>
                  {STATUS_LABEL[project.status]}
                </span>
              </div>

              <h3 style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(1rem, 1.5vw, 1.375rem)",
                fontWeight: 700,
                letterSpacing: "-0.01em",
                color: "var(--color-text-primary)",
                marginBottom: "clamp(0.5rem, 0.8vw, 0.875rem)",
              }}>
                {project.title}
              </h3>

              <p style={{
                fontFamily: "var(--font-mono)",
                fontSize: "clamp(0.7rem, 0.75vw, 0.8rem)",
                fontWeight: 300,
                lineHeight: 1.75,
                color: "var(--color-text-secondary)",
                marginBottom: "clamp(1rem, 1.5vw, 1.5rem)",
              }}>
                {project.description}
              </p>

              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.375rem" }}>
                {project.stack.map((t) => (
                  <span key={t} style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "clamp(0.5rem, 0.55vw, 0.6rem)",
                    color: "var(--color-text-faint)",
                    border: "1px solid var(--color-border)",
                    padding: "0.2rem 0.5rem",
                    borderRadius: "2px",
                    letterSpacing: "0.06em",
                  }}>
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* View all link */}
        <div style={{
          borderTop: "1px solid var(--color-border)",
          padding: "clamp(1rem, 1.5vw, 1.5rem) var(--page-px)",
          display: "flex",
          justifyContent: "flex-end",
        }}>
          <Link href="/work" style={{
            fontFamily: "var(--font-mono)",
            fontSize: "clamp(0.65rem, 0.7vw, 0.75rem)",
            textTransform: "uppercase",
            letterSpacing: "0.1em",
            color: "var(--color-text-muted)",
            textDecoration: "none",
            transition: "color 0.2s",
          }}>
            View all projects →
          </Link>
        </div>

      </div>
    </section>
  );
}