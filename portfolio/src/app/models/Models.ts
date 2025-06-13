export interface CardSkill {
    icon: string,
    name: string
}
export interface Experience {
    startDate: string,
    EndDate: string,
    type: "Remote"|"Hybrid"|"On-site",
    logo_name: string,
    job_type: string,
    role: string,
    description: string,
    technologies: CardSkill[]
}
