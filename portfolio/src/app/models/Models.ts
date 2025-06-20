export interface CardSkill {
  icon: string;
  name: string;
}
export interface Experience {
  startDate: string;
  endDate: string;
  type: string;
  logo_path: string;
  job_type: string;
  role: string;
  description: string;
  technologies: string[];
}
export interface Skill {
  name: string;
  path: string;
  type: string;
  percentage: number;
}
export interface Email {
  emailAddress: string;
  subject: string;
  message: string;
}
