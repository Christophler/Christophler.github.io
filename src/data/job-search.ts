import { parse } from 'yaml';
import jobSearchYaml from './job-search.yaml?raw';

export interface JobSearchConfig {
  status: string;
  openTo: string[];
  focus: string[];
  location: string;
  remotePreference: string;
  workAuthorization: string;
  startDate: string;
  landingOneLiner: string;
}

export const jobSearch = parse(jobSearchYaml) as JobSearchConfig;
