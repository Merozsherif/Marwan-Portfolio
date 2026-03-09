"use client";

import { projects } from "../_data/projects";
import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";
import { useSearchParams } from "next/navigation";

function ProjectCardsList() {
  const searchParams = useSearchParams();

  // Get the current projects filter for technologies used
  const tech = searchParams.get("tech-used");

  let filteredProjects = projects;

  // Filter the projects based on usage of Vanilla JS, React or Next.js
  if (tech === "react") {
    filteredProjects = projects.filter((project) =>
      project.technologiesUsed.includes("React"),
    );
  } else if (tech === "nextjs") {
    filteredProjects = projects.filter((project) =>
      project.technologiesUsed.includes("Next.js"),
    );
  } else if (tech === "Angular") {
    filteredProjects = projects.filter((project) =>
      project.technologiesUsed.includes("Angular"),
    );
  }

  return (
    <motion.ul
      key={tech || "all"} // This forces re-mount when filter changes (so that animation fires each time)
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      className="grid grid-cols-3 gap-8 max-lg:grid-cols-2 max-md:grid-cols-1"
    >
      {filteredProjects.map((project, index) => (
        <ProjectCard
          key={project.id}
          slug={project.slug}
          index={index}
          title={project.title}
          description={project.description}
          technologiesUsed={project.technologiesUsed}
          imageUrl={project.imageUrl}
          liveLink={project.liveLink}
          gitHubLink={project.gitHubLink}
          isFinished={project.isFinished}
        />
      ))}
    </motion.ul>
  );
}

export default ProjectCardsList;
