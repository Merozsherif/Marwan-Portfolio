import { Award, Code2, Heart, Rocket } from "lucide-react";
import { aboutMeFeature } from "@/app/_types/dataTypes";

export const aboutMeFeatures: aboutMeFeature[] = [
  {
    icon: Code2,
    title: "Full-Stack Ownership",
    text: "From database and backend APIs to the web and mobile UI, I build and own the entire product, not just one layer",
  },
  {
    icon: Rocket,
    title: "Business-Focused Solutions",
    text: "I translate real business needs into working software, not just technical requirements",
  },
  {
    icon: Heart,
    title: "Long-Term Partnership",
    text: "I don't just deliver and disappear — I stay involved to maintain, improve, and grow the product over time",
  },
  {
    icon: Award,
    title: "Clean & Scalable",
    text: "Clean architecture and best practices so your software stays reliable as your business grows",
  },
];
