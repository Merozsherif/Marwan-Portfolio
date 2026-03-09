import NavigationCardList from "./NavigationCardList";
import SectionHeader from "./SectionHeader";

function QuickNavigation() {
  return (
    <section>
      <SectionHeader
        text="Quick"
        highlight="Navigation"
        level={2}
        addedClasses="mb-16 font-semibold max-lg:text-4xl max-md:text-3xl"
      />

      <NavigationCardList />
    </section>
  );
}

export default QuickNavigation;
