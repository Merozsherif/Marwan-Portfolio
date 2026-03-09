import { ArrowRight, type LucideIcon } from "lucide-react";
import Link from "next/link";
import AnimationWrapper from "./AnimationWrapper";

interface NavigationCardItemProps {
  heading: string;
  text: string;
  url: string;
  icon: LucideIcon;
  iconBg: string; // passed as a css var or a value like #fff
  iconTextColor: string; // passed as a css var or a value like #fff
  index: number;
}

function NavigationCardItem({
  heading,
  text,
  url,
  icon: Icon,
  iconBg,
  iconTextColor,
  index,
}: NavigationCardItemProps) {
  return (
    <AnimationWrapper
      as="li"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.3 * index }}
    >
      <AnimationWrapper
        whileHover={{
          y: -10,
          transition: { duration: 0.3, ease: "easeOut" },
        }}
      >
        <Link
          href={url}
          className="block p-8 rounded-2xl border border-(--border-color) bg-(--custom-bg) shadow-lg cursor-pointer hover:border-(--orange-text) focus:outline-none focus:border-(--orange-text) delay"
        >
          <span
            aria-hidden="true"
            className="block p-4 w-fit rounded-[0.875rem]"
            style={{
              backgroundColor: iconBg,
              color: iconTextColor,
            }}
          >
            <Icon size={32} aria-hidden="true" />
          </span>

          <h3 className="text-(--text-color) text-2xl mt-6 mb-3">{heading}</h3>

          <p className="text-(--gray-text) mb-6">{text}</p>

          <span className="text-(--orange-text) flex items-center gap-2">
            Learn More
            <ArrowRight size={20} aria-hidden="true" />
          </span>
        </Link>
      </AnimationWrapper>
    </AnimationWrapper>
  );
}

export default NavigationCardItem;
