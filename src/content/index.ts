import experienceData from "../../content/experience.json";
import profileData from "../../content/profile.json";
import projectsData from "../../content/projects.json";
import siteMetaData from "../../content/site-meta.json";
import skillsData from "../../content/skills.json";

import type {
  ExperienceEntry,
  ProfileContent,
  Project,
  SiteMetaContent,
  SkillsContent,
} from "./types";

export const profile: ProfileContent = profileData;
export const experience: ExperienceEntry[] = experienceData;
export const projects: Project[] = projectsData;
export const skills: SkillsContent = skillsData;
export const siteMeta: SiteMetaContent = siteMetaData;
