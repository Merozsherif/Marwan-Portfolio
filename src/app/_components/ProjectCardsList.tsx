"use client";

import { projects } from "../_data/projects";
import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";
import { useSearchParams } from "next/navigation";

function ProjectCardsList() {
  const searchParams = useSearchParams();

  // Get the current projects filter for category
  const category = searchParams.get("category");

  const filteredProjects = category
    ? projects.filter((project) => project.categories.includes(category))
    : projects;

  return (
    <motion.ul
      key={category || "all"} // This forces re-mount when filter changes (so that animation fires each time)
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      className="grid grid-cols-3 gap-8 max-lg:grid-cols-2 max-md:grid-cols-1"
    >
      {filteredProjects.map((project, index) => {
        // Show the mobile screenshot when browsing the Mobile App filter,
        // for projects that have one; otherwise use the main project image
        const cardImage =
          category === "Mobile App" && project.secondaryImageUrl
            ? project.secondaryImageUrl
            : project.imageUrl;

        return (
          <ProjectCard
            key={project.id}
            slug={project.slug}
            index={index}
            title={project.title}
            description={project.description}
            technologiesUsed={project.technologiesUsed}
            imageUrl={cardImage}
            liveLink={project.liveLink}
            gitHubLink={project.gitHubLink}
            isFinished={project.isFinished}
          />
        );
      })}
    </motion.ul>
  );
}

export default ProjectCardsList;
