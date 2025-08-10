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
export interface About {
  firstName: string;
  lastName: string;
  birthDay: string;
  ambition: string;
  summary: string;
  profession: string;
  cellphone: string;
  email: string;
  address: string;
}
export interface Project {
  name: string;
  description: string;
  repoLink?: string; //Optional: Might not want to provide a source code of a live project
  liveLink?: string; //Optional: Not all projects will be live
  live: boolean;
  projectTpe: 'Web-App' | 'Mobile';
  techStack: CardSkill[];
  filePaths: string[];
}
