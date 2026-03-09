interface SkillProps {
  skillName: string;
  isUsedInProjectCard?: boolean;
  addedClasses?: string;
}

function Skill({
  skillName,
  isUsedInProjectCard = false,
  addedClasses,
}: SkillProps) {
  // Used in two places, each with different styling
  const styles = isUsedInProjectCard
    ? "text-xs text-(--project-used-tech-text) px-3 py-1 rounded-full border border-(--project-used-tech-border) bg-(--project-used-tech-bg) delay"
    : "text-sm text-(--skill-text) px-3 py-2 rounded-[0.625rem] border border-(--border-color) bg-(--skill-bg) delay";

  return <li className={styles + " " + addedClasses}>{skillName}</li>;
}

export default Skill;
