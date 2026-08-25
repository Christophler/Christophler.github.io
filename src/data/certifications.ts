import { parse } from 'yaml';
import certificationsYaml from './certifications.yaml?raw';

export interface Certification {
  name: string;
  examCode: string;
  issuer: string;
  issueDate: string;
  expiryDate: string | null;
  credentialId: string | null;
  verifyUrl: string;
  badgeImage?: string;
}

export interface CertificationsConfig {
  certifications: Certification[];
}

export const certifications = (
  parse(certificationsYaml) as CertificationsConfig
).certifications;

export function formatCertDate(value: string): string {
  const [year, month, day] = value.split('-').map(Number);
  const date = new Date(year, month - 1, day);
  return new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  }).format(date);
}
