import {
  CheckCircle2Icon,
  Code2,
  Database,
  Palette,
  Stars,
  Wrench,
} from "lucide-react";
import { SkillCategory } from "@/app/_types/dataTypes";

export const skillsInfo: SkillCategory[] = [
  {
    icon: Code2,
    iconColor: "#FF6B6B",
    iconBgColor: "#FF6B6B20",
    category: "Frontend Development",
    skills: [
      "HTML5",
      "CSS3",
      "JavaScript (ES6+)",
      "TypeScript",
      "React",
      "React Router",
      "Next.js",
    ],
  },
  {
    icon: Palette,
    iconColor: "#4ECDC4",
    iconBgColor: "#4ECDC420",
    category: "Styling & Design",
    skills: [
      "Tailwind CSS",
      "CSS Modules",
      "Styled Components",
      "Framer Motion",
    ],
  },
  {
    icon: Database,
    iconColor: "#95E1D3",
    iconBgColor: "#95E1D320",
    category: "State & Data Management",
    skills: [
      "Redux Toolkit",
      "Context API",
      "React Query",
      "Supabase",
      "SQL",
      "REST APIs",
    ],
  },
  {
    icon: Wrench,
    iconColor: "#FFE66D",
    iconBgColor: "#FFE66D20",
    category: "Tools & Workflow",

    skills: [
      "Git & GitHub",
      "Vite",
      "Vercel",
      "ESLint",
      "Prettier",
      "npm",
      "Chrome DevTools",
      "Redux DevTools",
      "React Query DevTools",
    ],
  },
  {
    icon: Stars,
    iconColor: "#A8E6CF",
    iconBgColor: "#A8E6CF20",
    category: "Libraries & Frameworks",
    skills: [
      "React Hook Form",
      "Recharts",
      "React Hot Toast",
      "Day.js",
      "React Dropzone",
      "React Error Boundary",
      "React Icons",
      "Lucid Icons",
    ],
  },
  {
    icon: CheckCircle2Icon,
    iconColor: "#FFB6B9",
    iconBgColor: "#FFB6B920",
    category: "Best Practices",
    skills: [
      "Clean Code",
      "Performance Optimization",
      "Web Accessibility (a11y)",
      "SEO Best Practices",
    ],
  },
];

export const coreStrengths: string[] = [
  "Building responsive, accessible web applications",
  "Writing clean, maintainable, and scalable code",
  "Implementing modern design systems",
  "Optimizing performance and user experience",
  "Collaborating with cross-functional teams",
  "Quick learner with strong problem-solving skills",
];

export const currentlyExploring: string[] = [
  "Advanced React patterns and architecture",
  "Server-side rendering with Next.js",
  "Advanced TypeScript techniques",
  "Building production-ready UI components with shadcn/ui",
  "Advanced Git workflows and version control strategies",
  "Fundamentals of automated testing",
];
