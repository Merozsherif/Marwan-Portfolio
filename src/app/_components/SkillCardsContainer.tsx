import { skillsInfo } from "@/app/_data/skills";
import SkillCategoryCard from "./SkillCategoryCard";

function SkillCardsContainer() {
  return (
    <ul className="grid grid-cols-3 gap-6 mb-16 max-lg:grid-cols-2 max-md:grid-cols-1">
      {skillsInfo.map((skill, i) => (
        <SkillCategoryCard
          key={i}
          index={i}
          icon={skill.icon}
          iconColor={skill.iconColor}
          iconBgColor={skill.iconBgColor}
          category={skill.category}
          skills={skill.skills}
        />
      ))}
    </ul>
  );
}

export default SkillCardsContainer;
