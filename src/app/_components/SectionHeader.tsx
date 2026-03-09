/* This component is responsible for rendering
    section headers with an optional paragraph below it.
    It also includes animation when the section comes into view.*/

import AnimationWrapper from "./AnimationWrapper";

interface SectionTitleProps {
  level?: 1 | 2 | 3 | 4 | 5 | 6;
  text: string;
  highlight: string;
  addedClasses?: string;
  paragraphText?: string;
}

export default function SectionHeader({
  level = 1,
  text,
  highlight,
  addedClasses = "",
  paragraphText,
}: SectionTitleProps) {
  // This allows us to pass the level of heading as prop for better accessibility and heading hierarchy
  const Tag = `h${level}` as const;

  return (
    <AnimationWrapper
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <Tag
        className={`text-5xl text-(--text-color) text-center relative ${addedClasses}`}
      >
        <span>{text} </span>
        <span className="text-(--orange-text)">{highlight}</span>

        <span
          aria-hidden="true"
          className="absolute bg-(--orange-text) w-20 h-1 -bottom-5 left-1/2 -translate-x-1/2"
        ></span>
      </Tag>

      {/* Text below the heading  */}
      {paragraphText ? (
        <p className="text-(--gray-text) text-xl text-center mb-16">
          {paragraphText}
        </p>
      ) : null}
    </AnimationWrapper>
  );
}
