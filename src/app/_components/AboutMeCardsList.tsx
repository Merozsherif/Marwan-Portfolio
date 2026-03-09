import { aboutMeFeatures } from "@/app/_data/about";
import AboutMeCard from "./AboutMeCard";
import AnimationWrapper from "./AnimationWrapper";

function AboutMeCardsList() {
  return (
    <AnimationWrapper
      as="ul"
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="grid grid-cols-2 gap-6 max-md:grid-cols-1 delay"
    >
      {aboutMeFeatures.map((feature, i) => (
        <AboutMeCard
          key={i}
          index={i}
          icon={feature.icon}
          title={feature.title}
          text={feature.text}
        />
      ))}
    </AnimationWrapper>
  );
}

export default AboutMeCardsList;
