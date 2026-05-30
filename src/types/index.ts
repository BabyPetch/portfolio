// ── Project ───────────────────────────────────────────────────────────────────
export type ProjectStatus = "production" | "open-source" | "freelance" | "featured";

export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  status: ProjectStatus;
  year: string;
  stack: string[];
  liveUrl?: string;
  repoUrl?: string;
  featured?: boolean;
  // Optional: path to case study page e.g. "/work/ai-document-analyzer"
  slug?: string;
}

// ── Tech Stack ────────────────────────────────────────────────────────────────
export type StackCategory = "frontend" | "backend" | "ai" | "tooling";

export interface StackItem {
  name: string;
  category: StackCategory;
  primary: boolean; // true = highlight with accent color
}

export interface StackGroup {
  category: StackCategory;
  label: string;
  items: StackItem[];
}

// ── Navigation ────────────────────────────────────────────────────────────────
export interface NavLink {
  label: string;
  href: string;
}

// ── Social / Contact ──────────────────────────────────────────────────────────
export interface SocialLink {
  platform: string;
  href: string;
  handle: string;
}