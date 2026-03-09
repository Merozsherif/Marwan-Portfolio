import type { LucideIcon } from "lucide-react";

interface ProjectChallengesCardProps {
  title: string;
  text: string;
  ariaLabelledby: string;
  icon: LucideIcon;
}

function ProjectChallengesCard({
  title,
  text,
  ariaLabelledby,
  icon: Icon,
}: ProjectChallengesCardProps) {
  return (
    <section
      aria-labelledby={ariaLabelledby}
      className="rounded-xl border border-(--border-color) bg-(--custom-bg) shadow-xl p-6 delay"
    >
      <h2
        id={ariaLabelledby}
        className="flex items-center gap-2 text-2xl text-(--orange-text) mb-4"
      >
        <Icon size={24} aria-hidden="true" />
        {title}
      </h2>

      <p className="text-lg text-(--text-color-secondary) leading-7">{text}</p>
    </section>
  );
}

export default ProjectChallengesCard;
