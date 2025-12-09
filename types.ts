
// FIX: Import 'ReactNode' type to be used in interfaces.
import type { ReactNode } from 'react';

export interface Project {
  title: string;
  category: string;
  description: string;
  details: string[];
}

export interface Skill {
  name: string;
  icon: ReactNode;
}

export interface Service {
  icon: ReactNode;
  title: string;
  description: string;
}

export interface EducationItem {
  degree: string;
  institution: string;
  graduation: string;
  details: string;
}

export interface ExperienceItem {
  role: string;
  company: string;
  period: string;
  description: string[];
}

export interface CertificationItem {
  title: string;
  issuer: string;
}

export interface AwardItem {
  title: string;
  context: string;
  description: string;
}