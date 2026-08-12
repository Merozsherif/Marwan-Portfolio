import {
  CheckCircle2Icon,
  Code2,
  Database,
  Palette,
  Server,
  Smartphone,
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
      "Angular",
      "React",
      "React Router",
      "Next.js",
    ],
  },
  {
    icon: Server,
    iconColor: "#6C63FF",
    iconBgColor: "#6C63FF20",
    category: "Backend Development",
    skills: [
      "C#",
      ".NET / ASP.NET Core",
      "Web API",
      "Entity Framework Core",
      "SQL Server",
      "REST APIs",
      "JWT Authentication",
    ],
  },
  {
    icon: Smartphone,
    iconColor: "#3DDC97",
    iconBgColor: "#3DDC9720",
    category: "Mobile Development",
    skills: ["Mobile App Development"],
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
  "Designing and building backend APIs and databases with .NET and SQL Server",
  "Building responsive, accessible web and mobile applications",
  "End-to-end ownership from database to backend to frontend",
  "Writing clean, maintainable, and scalable code",
  "Optimizing performance and user experience",
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
