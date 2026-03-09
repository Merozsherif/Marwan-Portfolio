import type { LucideIcon } from "lucide-react";
import { StaticImageData } from "next/image";

export interface Project {
  id: number;
  title: string;
  slug: string;
  subTitle: string;
  description: string;
  technologiesUsed: string[];
  keyFeatures: string[];
  Challenges: string;
  outcome: string;
  imageUrl: string | StaticImageData;
  liveLink?: string;
  gitHubLink?: string;
  youtubeLink?: string;
  figmaLink?: string;
  isFinished: boolean;
}

export interface aboutMeFeature {
  icon: LucideIcon;
  title: string;
  text: string;
}

export interface SkillCategory {
  icon: LucideIcon;
  iconColor: string;
  iconBgColor: string;
  category: string;
  skills: string[];
}

export interface ProjectButtonsDataType {
  variation: "orange" | "light" | "dark" | "red";
  icon: LucideIcon;
  text: string;
  url: string | undefined;
}
