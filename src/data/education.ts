import { parse } from 'yaml';
import educationYaml from './education.yaml?raw';

export interface EducationEntry {
  university: string;
  program: string;
  conferralDate: string;
}

export interface EducationConfig {
  entries: EducationEntry[];
}

export const education = parse(educationYaml) as EducationConfig;

export function formatConferralDate(value: string): string {
  const [year, month] = value.split('-');
  if (!month) return year;
  const date = new Date(Number(year), Number(month) - 1, 1);
  return new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'short',
  }).format(date);
}
