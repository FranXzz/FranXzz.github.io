export type Project = {
  title: string;
  description: string;
  technologies: string[];
  imageUrl?: string;
};

export type Experience = {
  company: string;
  position: string;
  period: string;
  description: string[];
};

export type Education = {
  institution: string;
  degree: string;
  period: string;
  location: string;
};

export type Skill = {
  category: string;
  items: string[];
};