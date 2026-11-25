export type SectionId =
  | "home"
  | "about"
  | "skills"
  | "experience"
  | "projects"
  | "timeline"
  | "education"
  | "certifications"
  | "contact";

export interface NavItem {
  id: SectionId;
  label: string;
}

export interface SectionInfo {
  title: string;
  badge?: string;
  summary: string;
  purpose: string;
  details?: string[];
  tips?: string[];
}

export type SkillProficiency = "Familiar" | "Comfortable" | "Proficient" | "Advanced";

export interface SkillItem {
  name: string;
  category: string;
  level: SkillProficiency;
  percentage: number;
  icon?: string;
}

export interface SkillCategoryGroup {
  category: string;
  description: string;
  skills: SkillItem[];
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  companyUrl?: string;
  period: string;
  location: string;
  type: "Work" | "Capstone" | "Organization";
  description: string;
  responsibilities: string[];
  achievements?: string[];
  technologies: string[];
}

export interface ProjectDetail {
  overview: string;
  problemStatement: string;
  objectives: string[];
  architecture: string;
  developmentProcess: string[];
  challengesAndSolutions: {
    challenge: string;
    solution: string;
  }[];
  finalOutcome: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  subtitle: string;
  category: "IoT & Hardware" | "Fullstack Web" | "Data & AI" | "Software Engineering";
  year: string;
  role: string;
  description: string;
  highlights: string[];
  technologies: string[];
  githubUrl?: string;
  demoUrl?: string;
  featured?: boolean;
  status: "Production" | "Live" | "Completed" | "In Development";
  detail: ProjectDetail;
}

export interface ProjectMilestone {
  id: string;
  projectId: string;
  projectName: string;
  milestone: string;
  date: string;
  featureImplemented: string;
  technicalImprovement: string;
  notes: string;
}

export interface EducationItem {
  id: string;
  institution: string;
  degree: string;
  major: string;
  location: string;
  period: string;
  gpa: string;
  coursework: string[];
  seminars: string[];
}

export interface CertificationItem {
  id: string;
  title: string;
  issuer: string;
  year: string;
  credentialId?: string;
  verificationUrl?: string;
  skills: string[];
}

export interface ProfileData {
  name: string;
  title: string;
  statusBadge: string;
  location: string;
  phone: string;
  email: string;
  terminalCommand: string;
  terminalOutput: string;
  shortBio: string;
  fullBio: string[];
  focusAreas: {
    title: string;
    description: string;
  }[];
  contextualMetadata: {
    label: string;
    value: string;
  }[];
  socials: {
    github: string;
    linkedin: string;
    whatsapp: string;
    email: string;
  };
}

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
  botField?: string;
}

export interface ApiResponse {
  success: boolean;
  message: string;
  error?: string;
}
