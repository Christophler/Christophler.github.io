import { parse } from 'yaml';
import featuredProjectsYaml from './featured-projects.yaml?raw';

export interface FeaturedProject {
  title: string;
  slug: string;
  description: string;
  stack: string[];
}

export interface FeaturedProjectsConfig {
  projects: FeaturedProject[];
}

export const featuredProjects = (
  parse(featuredProjectsYaml) as FeaturedProjectsConfig
).projects;
