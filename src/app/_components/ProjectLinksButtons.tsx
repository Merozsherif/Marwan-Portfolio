import { ProjectButtonsDataType } from "@/app/_types/dataTypes";
import Button from "./Button";

interface ProjectLinksButtonsProps {
  buttons: ProjectButtonsDataType[];
}
function ProjectLinksButtons({ buttons }: ProjectLinksButtonsProps) {
  return (
    <div className="flex gap-4 flex-wrap mb-12">
      {buttons.map((btn, i) =>
        btn.url && btn.url !== "none" ? (
          <Button
            key={i}
            variation={btn.variation}
            isLink={true}
            isExternal={true}
            to={btn.url}
            addedClasses="px-6 py-4 max-md:grow justify-center"
          >
            <btn.icon size={20} aria-hidden="true" />
            <span>{btn.text}</span>
          </Button>
        ) : null,
      )}
    </div>
  );
}

export default ProjectLinksButtons;
