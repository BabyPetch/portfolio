export type ProjectStatus =
  | "featured"
  | "production"
  | "open-source"
  | "freelance";

export interface Project {
  id: string;
  title: string;
  description: string;
  status: ProjectStatus;
  stack: string[];
  liveUrl?: string;
  repoUrl?: string;
}

export const projects: Project[] = [];

export const featuredProject: Project = {
  id: "placeholder",
  title: "Coming Soon",
  description: "Projects will be added soon.",
  status: "featured",
  stack: [],
};

export const nonFeaturedProjects: Project[] = [];