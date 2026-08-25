import { parse } from 'yaml';
import experienceYaml from './experience.yaml?raw';

export interface ExperienceBullet {
  built?: string;
  deployed?: string;
  improved?: string;
}

export interface ExperienceEntry {
  role: string;
  company: string;
  location: string;
  start: string;
  end: string;
  bullets: ExperienceBullet[];
}

export interface ExperienceConfig {
  entries: ExperienceEntry[];
}

export const experience = parse(experienceYaml) as ExperienceConfig;

export function formatExperiencePeriod(start: string, end: string): string {
  const formatPart = (value: string) => {
    if (value.toLowerCase() === 'present') return 'Present';
    const [year, month] = value.split('-');
    if (!month) return year;
    const date = new Date(Number(year), Number(month) - 1, 1);
    return new Intl.DateTimeFormat('en-US', {
      year: 'numeric',
      month: 'short',
    }).format(date);
  };

  return `${formatPart(start)} – ${formatPart(end)}`;
}
