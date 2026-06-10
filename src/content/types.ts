export type ProfileContent = {
  name: string;
  title: string;
  resumeTitle: string;
  positioning: string;
  positioningAccent: string;
  location: string;
  email: string;
  phone: string;
  summary: string;
  resumeSummary: string;
  highlights: {
    metrics: Array<{
      value: string;
      label: string;
    }>;
    career: string[];
  };
  education: Array<{
    institution: string;
    program: string;
    startDate: string;
    endDate: string;
  }>;
  certifications: Array<{
    name: string;
    year: string;
  }>;
  languages: Array<{
    name: string;
    proficiency: string;
  }>;
  links: {
    website: string;
    linkedin: string | null;
  };
  avatarPath: string;
  homepage: {
    hero: {
      subheadline: string;
      supportingCopy: string;
      primaryAction: string;
      secondaryAction: string;
    };
    snapshot: {
      title: string;
      description: string;
    };
    experience: {
      eyebrow: string;
      title: string;
    };
    philosophy: {
      eyebrow: string;
      title: string;
      paragraphs: string[];
    };
    contact: {
      eyebrow: string;
      title: string;
      copy: string;
      primaryAction: string;
    };
  };
};

export type ExperienceEntry = {
  company: string;
  role: string;
  startDate: string;
  endDate: string;
  displayPeriod: string;
  location: string | null;
  bullets: string[];
  technologies: string[];
};

export type Project = {
  id: string;
  name: string;
  resumeName: string;
  category: string;
  domains: string[];
  description: string;
  contributions: string[];
  resumeContributions: string[];
  technologies: string[];
};

export type SkillsContent = {
  groups: Array<{
    label: string;
    items: string[];
  }>;
  domains: Array<{
    id: string;
    title: string;
    description: string;
  }>;
};

export type SiteMetaContent = {
  siteTitle: string;
  siteDescription: string;
  ogTitle: string;
  ogDescription: string;
  domain: string;
  resumeUrl: string;
  socialImage: {
    url: string;
    width: number;
    height: number;
    alt: string;
  };
  navigation: Array<{
    href: string;
    label: string;
  }>;
  sections: {
    domains: string;
    platforms: string;
  };
  contactLabels: {
    email: string;
    linkedin: string;
    linkedinAction: string;
    resume: string;
    resumeAction: string;
  };
  resumePage: {
    title: string;
    description: string;
    eyebrow: string;
    heading: string;
    intro: string;
    downloadAction: string;
    openAction: string;
    backAction: string;
    previewTitle: string;
    previewFallback: string;
    previewFrameTitle: string;
  };
};
