import SectionHeader from "@/app/_components/SectionHeader";
import ProjectsFilterButtons from "@/app/_components/ProjectsFilterButtons";
import ProjectCardsList from "@/app/_components/ProjectCardsList";
import { Metadata } from "next";
import { Suspense } from "react";

// Metadata for the Projects page
export const metadata: Metadata = {
  title: "Projects",
};

function ProjectsPage() {
  return (
    <div>
      <SectionHeader
        text="My"
        highlight="Projects"
        paragraphText="A collection of my recent work and personal projects"
        addedClasses="text-6xl mb-10 max-lg:text-5xl max-md:text-4xl"
      />

      <Suspense>
        <ProjectsFilterButtons />
      </Suspense>

      <Suspense>
        <ProjectCardsList />
      </Suspense>
    </div>
  );
}

export default ProjectsPage;
