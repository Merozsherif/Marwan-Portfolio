"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { motion } from "framer-motion";

import Button from "./Button";

export default function ProjectsFilterButtons() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const state = searchParams.get("tech-used");

  const buttonsData = [
    {
      variation: state === null ? "orange" : "gray",
      url: "/projects",
      text: "All Projects",
    },
    {
      variation: state === "Angular" ? "orange" : "gray",
      url: "/projects?tech-used=Angular",
      text: "Angular",
    },
    {
      variation: state === "react" ? "orange" : "gray",
      url: "/projects?tech-used=react",
      text: "React",
    },
    {
      variation: state === "nextjs" ? "orange" : "gray",
      url: "/projects?tech-used=nextjs",
      text: "Next.js",
    },
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
