import type { StackGroup, NavLink, SocialLink } from "@/types";

// ── Tech Stack ────────────────────────────────────────────────────────────────
export const stackGroups: StackGroup[] = [
  {
    category: "frontend",
    label: "Frontend",
    items: [
      { name: "Next.js / React", category: "frontend", primary: true },
      { name: "TypeScript",      category: "frontend", primary: true },
      { name: "Tailwind CSS",    category: "frontend", primary: true },
      { name: "Framer Motion",   category: "frontend", primary: true },
      { name: "Vue.js",          category: "frontend", primary: false },
    ],
  },
  {
    category: "backend",
    label: "Backend",
    items: [
      { name: "Node.js / Express", category: "backend", primary: true },
      { name: "PostgreSQL",        category: "backend", primary: true },
      { name: "Redis",             category: "backend", primary: true },
      { name: "REST / GraphQL",    category: "backend", primary: true },
      { name: "Docker / K8s",      category: "backend", primary: false },
    ],
  },
  {
    category: "ai",
    label: "AI & Tooling",
    items: [
      { name: "Claude / OpenAI API", category: "ai", primary: true },
      { name: "LangChain",           category: "ai", primary: true },
      { name: "Vercel / Railway",    category: "ai", primary: true },
      { name: "Playwright",          category: "ai", primary: false },
      { name: "GitHub Actions",      category: "ai", primary: false },
    ],
  },
];

// ── Navigation ────────────────────────────────────────────────────────────────
export const navLinks: NavLink[] = [
  { label: "Work",    href: "/work" },
  { label: "Stack",   href: "/#stack" },
  { label: "About",   href: "/about" },
  { label: "Contact", href: "/contact" },
];

// ── Social Links ──────────────────────────────────────────────────────────────
export const socialLinks: SocialLink[] = [
  { platform: "GitHub",     href: "https://github.com",   handle: "github.com/kmdev" },
  { platform: "LinkedIn",   href: "https://linkedin.com", handle: "linkedin.com/in/kmdev" },
  { platform: "Email",      href: "mailto:hello@km.dev",  handle: "hello@km.dev" },
];

// ── Site-wide Constants ───────────────────────────────────────────────────────
export const siteConfig = {
  name:        "km.dev",
  title:       "Full Stack Developer & AI Engineer",
  email:       "hello@km.dev",
  available:   true,  // toggles the "available for work" badge in navbar
  stats: [
    { value: "3+",   label: "Years experience" },
    { value: "12",   label: "Projects shipped" },
    { value: "8",    label: "Technologies" },
    { value: "100%", label: "Remote-ready" },
  ],
} as const;