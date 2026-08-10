export type Project = {
  title: string;
  tagline: string;
  problem: string;
  solution: string;
  themes: string[];
  status?: string;
  link?: string;
  featured?: boolean;
};

export type WorkExperience = {
  title: string;
  description: string;
  tech: string[];
  role: string;
  link: string;
  duration: string;
};

export type FormData = {
  name: string;
  email: string;
  message: string;
};
