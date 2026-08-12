"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { motion } from "framer-motion";

import Button from "./Button";

const categories = [
  "Web Development",
  "Mobile App",
  "Dashboard / Admin Panel",
  "CRM / Management System",
];

export default function ProjectsFilterButtons() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const state = searchParams.get("category");

  const buttonsData = [
    {
      variation: state === null ? "orange" : "gray",
      url: "/projects",
      text: "All Projects",
    },
    ...categories.map((category) => ({
      variation: state === category ? "orange" : "gray",
      url: `/projects?category=${encodeURIComponent(category)}`,
      text: category,
    })),
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="flex justify-center gap-3 mx-auto mb-16 flex-wrap"
    >
      {buttonsData.map((btn, i) => (
        <Button
          key={i}
          variation={btn.variation as "orange" | "gray" | "light" | "dark"}
          onClick={() => router.push(btn.url)} // set the url with a filter
          addedClasses={`px-6 py-3  ${
            btn.variation === "orange" ? "shadow-lg shadow-orange-500/50" : ""
          }`}
        >
          {btn.text}
        </Button>
      ))}
    </motion.div>
  );
}
