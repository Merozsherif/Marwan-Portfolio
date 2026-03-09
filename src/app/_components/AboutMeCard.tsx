import type { LucideIcon } from "lucide-react";
import AnimationWrapper from "./AnimationWrapper";

interface AboutMeCardProps {
  icon: LucideIcon;
  title: string;
  text: string;
  index: number;
}

// These cards show some features about my coding skills
function AboutMeCard({ icon: Icon, title, text, index }: AboutMeCardProps) {
  return (
    <AnimationWrapper
      as="li"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.1 * index + 0.3 }}
      className="rounded-[0.875rem] p-6 border border-(--border-color) bg-(--custom-bg-2) shadow-lg delay"
    >
      <Icon
        aria-hidden="true"
        size={48}
        className="text-(--orange-text) mb-4"
      />

      <h3 className="text-xl text-(--text-color) mb-3">{title}</h3>

      <p className="text-sm text-(--gray-text)">{text}</p>
    </AnimationWrapper>
  );
}

export default AboutMeCard;
