import { CheckCircle2 } from "lucide-react";

interface ProjectKeyFeaturesProps {
  right: string[];
  left: string[];
}

function ProjectKeyFeatures({ left, right }: ProjectKeyFeaturesProps) {
  return (
    <section
      aria-labelledby="key-features"
      className="rounded-xl border border-(--border-color) bg-(--custom-bg) shadow-xl p-6 mb-8 delay"
    >
      <h2
        id="key-features"
        className="flex items-center gap-2 text-(--text-color) text-2xl mb-6"
      >
        <CheckCircle2
          size={24}
          className="text-(--orange-text)"
          aria-hidden="true"
        />
        <div>
          <span className="text-(--orange-text)">Key </span>
          <span>Features</span>
        </div>
      </h2>

      <div className="grid grid-cols-2 justify-between">
        {/* Left Side of features */}
        <ul className="space-y-4">
          {left.map((el) => (
            <li key={el} className="flex items-center max-lg:items-start gap-3">
              <CheckCircle2
                size={20}
                className="text-(--orange-text) shrink-0 max-lg:mt-0.5"
                aria-hidden="true"
              />
              <span className="text-(--text-color-secondary)">{el}</span>
            </li>
          ))}
        </ul>

        {/* Right Side of features */}
        <ul className="space-y-4">
          {right.map((el) => (
            <li key={el} className="flex items-center max-lg:items-start gap-3">
              <CheckCircle2
                size={20}
                className="text-(--orange-text) shrink-0 max-lg:mt-0.5"
                aria-hidden="true"
              />
              <span className="text-(--text-color-secondary)">{el}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default ProjectKeyFeatures;
