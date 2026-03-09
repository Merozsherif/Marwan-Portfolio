import Skill from "./Skill";

function ProjectTechUsed({ technologiesUsed }: { technologiesUsed: string[] }) {
  return (
    <section
      aria-labelledby="tech-stack"
      className="rounded-xl border border-(--border-color) bg-(--custom-bg) shadow-xl p-6 max-w-107.5 max-lg:max-w-full delay"
    >
      <h2 id="tech-stack" className="text-2xl text-(--orange-text) mb-4">
        Tech Stack
      </h2>

      <ul className="flex gap-2 flex-wrap">
        {technologiesUsed.map((skill) => (
          <Skill key={skill} skillName={skill} />
        ))}
      </ul>
    </section>
  );
}

export default ProjectTechUsed;
