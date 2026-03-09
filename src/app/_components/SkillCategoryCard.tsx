import type { LucideIcon } from "lucide-react";
import AnimationWrapper from "./AnimationWrapper";
import Skill from "./Skill";

interface SkillCategoryCardProps {
  icon: LucideIcon;
  iconColor: string;
  iconBgColor: string;
  category: string;
  skills: string[];
  index: number;
}

function SkillCategoryCard({
  icon: Icon,
  iconColor,
  iconBgColor,
  category,
  skills,
  index,
}: SkillCategoryCardProps) {
  return (
    <AnimationWrapper
      as="li"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      className="p-6 rounded-xl border border-(--border-color) bg-(--custom-bg-2) shadow-lg min-h-62.5 delay"
    >
      <div className="flex gap-4 items-center mb-6">
        <span
          style={{
            color: iconColor,
            backgroundColor: iconBgColor,
          }}
          className="block p-3 rounded-[0.875rem]"
        >
          <Icon aria-hidden="true" />
        </span>
        <h2 className="text-xl text-(--text-color) font-semibold">
          {category}
        </h2>
      </div>

      <ul className="flex gap-2 flex-wrap">
        {skills.map((skill) => (
          <Skill key={skill} skillName={skill} />
        ))}
      </ul>
    </AnimationWrapper>
  );
}

export default SkillCategoryCard;
