export interface Project {
  title: string;
  description: string;
  tech: string[];
  link: string;
  github?: string;
  image: string;
}

export interface Skill {
  name: string;
  icon: string;
}

export interface SkillGroup {
  title: string;
  skills: Skill[];
}

export interface NavItem {
  href: string;
  label: string;
}

export interface Stat {
  value: string;
  label: string;
}

export interface Highlight {
  label: string;
  value: string;
}
