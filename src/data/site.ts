import { parse } from 'yaml';
import siteYaml from './site.yaml?raw';

export interface SiteConfig {
  name: string;
  shortName: string;
  title: string;
  tagline: string;
  github: string;
  linkedin: string;
  email: string;
  resumePath: string;
  showOpenToWorkPill: boolean;
}

export const site = parse(siteYaml) as SiteConfig;
