import { Award, Code2, Heart, Rocket } from "lucide-react";
import { aboutMeFeature } from "@/app/_types/dataTypes";

export const aboutMeFeatures: aboutMeFeature[] = [
  {
    icon: Code2,
    title: "Clean Code",
    text: "Writing maintainable and scalable code following best practices",
  },
  {
    icon: Rocket,
    title: "Performance",
    text: "Building fast and optimized applications for the best user experience",
  },
  {
    icon: Heart,
    title: "Passion",
    text: "Love for creating beautiful interfaces that users enjoy",
  },
  {
    icon: Award,
    title: "Excellence",
    text: "Committed to continuous improvement and learning",
  },
];
