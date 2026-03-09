import SectionHeader from "@/app/_components/SectionHeader";
import MyStoryArticle from "@/app/_components/MyStoryArticle";
import AboutMeCardsList from "@/app/_components/AboutMeCardsList";
import AboutMeFinalArticle from "@/app/_components/AboutMeFinalArticle";
import { Metadata } from "next";

// Metadata for the About page
export const metadata: Metadata = {
  title: "About",
};

function AboutPage() {
  return (
    <>
      <SectionHeader
        text="About"
        highlight="Me"
        paragraphText="Learn more about my journey and what drives me"
        addedClasses="text-6xl mb-10 max-lg:text-5xl max-md:text-4xl"
      />

      <div className="grid grid-cols-2 gap-12 mb-16 max-lg:grid-cols-1">
        <MyStoryArticle />
        <AboutMeCardsList />
      </div>

      <AboutMeFinalArticle />
    </>
  );
}

export default AboutPage;
