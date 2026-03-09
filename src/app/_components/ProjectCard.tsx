"use client";

import { motion } from "framer-motion";
import { Clock, Github, Upload } from "lucide-react";
import Button from "./Button";
import Skill from "./Skill";
import toast from "react-hot-toast";
import Image, { StaticImageData } from "next/image";
import { useRouter } from "next/navigation";

interface ProjectCardProps {
  slug: string;
  title: string;
  description: string;
  technologiesUsed: string[];
  imageUrl: string | StaticImageData;
  liveLink: string | undefined;
  gitHubLink: string | undefined;
  isFinished: boolean;
  index: number;
}

function ProjectCard({
  slug,
  title,
  description,
  imageUrl,
  liveLink,
  gitHubLink,
  technologiesUsed,
  isFinished,
  index,
}: ProjectCardProps) {
  const buttonsData = [
    { link: liveLink, variation: "orange", text: "Live", icon: Upload },
    { link: gitHubLink, variation: "gray", text: "Code", icon: Github },
  ];

  // Calculate how many technologies used are there (other than the first 3 that are shown)
  const notDisplayedTechnologies = technologiesUsed.length - 3;
  const router = useRouter();

  function handleClick() {
    if (!isFinished) {
      toast.dismiss();
      toast.error("This project is not finished yet. Please check back later.");
      return;
    }

    router.push(`/project-details/${slug}`);
  }

  return (
    <motion.li
      initial={{ opacity: 0, y: 50 }}
      animate={{
        opacity: 1,
        y: 0,
        transition: {
          duration: 0.6,
          delay: 0.2 * index,
        },
      }}
    >
      <motion.div
        whileHover={{
          y: -10,
          transition: { duration: 0.4, ease: "easeOut" },
        }}
        onClick={handleClick}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            handleClick();
          }
        }}
        className="rounded-2xl border border-(--border-color) bg-(--custom-bg-2) shadow-xl hover:border-(--orange-text) cursor-pointer focus:outline-none focus:border-(--orange-text) delay group overflow-hidden h-full flex flex-col"
      >
        {/* Project image */}
        <div className="relative overflow-hidden">
          <Image
            src={imageUrl}
            priority={index < 3} // Prioritize loading for the first 3 images for better performance
            alt={`Preview of project: ${title}`}
            className="object-cover w-full h-56 rounded-t-2xl transition-transform duration-500 group-hover:scale-110"
          />
          {/* Overlay on image when hovering */}
          <div className="absolute inset-0 group-hover:bg-black/30 delay z-20 rounded-t-2xl"></div>

          {/* Overlay on image if it's an unfinished project */}
          {!isFinished && (
            <div className="absolute inset-0 bg-black/45 flex items-center justify-center z-20 rounded-t-2xl">
              <div className="flex items-center gap-2 text-base px-5 py-3 rounded-lg text-white bg-orange-500 shadow-lg">
                <Clock size={20} />
                Coming Soon
              </div>
            </div>
          )}
        </div>

        {/* Title */}
        <div className="p-6 flex flex-col flex-1">
          <h2 className="text-xl text-start text-(--text-color) mb-3">
            {title}
          </h2>

          {/* Description */}
          <p className="text-sm text-start text-(--gray-text) mb-5 line-clamp-3">
            {description}
          </p>

          <div className="mt-auto">
            {/* Technologies used in this project */}
            <ul className="flex gap-2 flex-wrap mb-4">
              {/* SHow only first 3 used technologies in the cart */}
              {technologiesUsed.slice(0, 3).map((tech) => (
                <Skill
                  key={tech}
                  skillName={tech}
                  isUsedInProjectCard={true}
                  addedClasses={isFinished ? "" : "opacity-65"}
                />
              ))}

              <li className="flex items-center justify-center text-xs px-3 py-1 bg-(--gray-bg) rounded-full text-(--gray-text)">
                {/* Show how many other technologies are used other than what is shown */}
                +{notDisplayedTechnologies}
              </li>
            </ul>

            {/* Project action buttons */}
            {isFinished ? (
              <div className="flex gap-2 flex-wrap">
                {buttonsData.map((btn, i) =>
                  btn.link !== "none" ? (
                    <Button
                      key={i}
                      variation={
                        btn.variation as "orange" | "gray" | "light" | "dark"
                      }
                      addedClasses={`justify-center text-sm px-3 py-2 grow ${
                        btn.variation === "gray" ? "border-2" : ""
                      }`}
                      onClick={(e) => {
                        e.stopPropagation();

                        if (btn.link) {
                          window.open(btn.link, "_blank");
                        } else {
                          toast.error(
                            "This link will be added soon. Please come back later",
                          );
                        }
                      }}
                    >
                      <btn.icon size={16} />
                      {btn.text}
                    </Button>
                  ) : null,
                )}
              </div>
            ) : (
              <div className="justify-center text-sm px-3 py-2 w-full opacity-70 flex items-center gap-2 rounded-[0.625rem] text-(--text-color-secondary) border-(--border-color) bg-(--custom-bg-2) border-3">
                <Clock size={16} />
                Comming Soon
              </div>
            )}
          </div>
        </div>
      </motion.div>
    </motion.li>
  );
}

export default ProjectCard;
