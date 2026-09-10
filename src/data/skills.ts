import { parse } from 'yaml';
import skillsYaml from './skills.yaml?raw';

export interface SkillGroup {
  label: string;
  items: string[];
}

export interface SkillsConfig {
  groups: SkillGroup[];
}

export const skills = parse(skillsYaml) as SkillsConfig;
