import { Circle, Stars } from "lucide-react";
import { coreStrengths, currentlyExploring } from "@/app/_data/skills";
import SkillCardsContainer from "@/app/_components/SkillCardsContainer";
import TechnicalNotes from "@/app/_components/TechnicalNotes";
import SectionHeader from "@/app/_components/SectionHeader";
import { Metadata } from "next";

// Metadata for the Skills page
export const metadata: Metadata = {
  title: "Skills",
};

function SkillsPage() {
  return (
    <div>
      <SectionHeader
        text="Technical"
        highlight="Skills"
        paragraphText="Technologies and expertise I bring to every project"
        addedClasses="text-6xl mb-10 max-lg:text-5xl max-md:text-4xl"
      />

      <SkillCardsContainer />

      <div className="grid grid-cols-2 gap-8 max-md:grid-cols-1">
        <TechnicalNotes
          highlight="Core"
          text="Strengths"
          headingId="core-strengths"
          icon={Circle}
          iconBg="#00b4cc33"
          iconColor="#00b4cc"
          notesList={coreStrengths}
          iconFill={true}
        />
        <TechnicalNotes
          highlight="Currently"
          text="Exploring"
          headingId="currently-exploring"
          icon={Stars}
          iconBg="#2B7FFF33"
          iconColor="#2B7FFF"
          notesList={currentlyExploring}
        />
      </div>
    </div>
  );
}

export default SkillsPage;
