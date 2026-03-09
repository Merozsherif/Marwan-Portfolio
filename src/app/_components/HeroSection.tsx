import { ArrowRight, Download } from "lucide-react";
import Image from "next/image";
import myImage from "../assets/myImage.jpg";
import Button from "./Button";
import AnimationWrapper from "./AnimationWrapper";

function HeroSection() {
  return (
    <section
      aria-labelledby="my-name"
      className="flex items-center justify-between mb-40 max-lg:flex-col"
    >
      {/* Hero section text */}
      <div className="max-lg:mb-12 max-lg:self-start">
        <AnimationWrapper
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <AnimationWrapper
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <span className="block text-lg text-(--gray-text) max-lg:mb-4">
              Hello, I&apos;m
            </span>

            <h1
              id="my-name"
              className="text-[5rem] max-lg:text-7xl max-md:text-5xl text-(--text-color) mb-8"
            >
              <span>Marwan </span>
              <span className="text-(--orange-text)">Sherif</span>
            </h1>
          </AnimationWrapper>

          <AnimationWrapper
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <p className="text-(--orange-text) text-4xl mb-6 max-sm:text-2xl">
              Front-End Developer
            </p>

            <p className="text-xl text-(--text-color-secondary) mb-8 max-w-154">
              I build beautiful, responsive web applications using modern
              technologies like Next.js, React and TypeScript, focusing on
              clean, maintainable and accessible code.
            </p>
          </AnimationWrapper>

          {/* Actions buttons for Hero section */}
          <AnimationWrapper
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex gap-4 flex-wrap"
          >
            <Button
              to="/projects"
              isLink={true}
              variation="orange"
              addedClasses="px-6 py-3 max-[390px]:grow max-[390px]:justify-center"
            >
              <ArrowRight aria-hidden="true" />
              View My Work
            </Button>

            <Button
              to="/contact"
              isLink={true}
              variation="light"
              addedClasses="px-6 py-3 max-[390px]:grow max-[390px]:justify-center"
            >
              Contact Me
            </Button>

            <a
              href="/cv.pdf"
              download="Marwan-Sherif-CV.pdf"
              className="flex items-center gap-2 px-6 py-3 rounded-[0.625rem] cursor-pointer transition-all duration-300  focus:outline-none focus-visible:ring-2 focus-visible:ring-(--orange-text) text-white bg-(--dark-btn-bg) hover:bg-gray-700 hover:scale-102 max-[390px]:grow max-[390px]:justify-center"
            >
              <Download aria-hidden="true" />
              Download CV
            </a>
          </AnimationWrapper>
        </AnimationWrapper>
      </div>

      {/* Hero section image */}
      <AnimationWrapper
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="w-110 h-110 rounded-full overflow-hidden border-4 border-(--orange-text) max-[525px]:w-94 max-[525px]:h-94 max-[435px]:w-70 max-[435px]:h-70">
          <Image
            src={myImage}
            priority={true}
            alt="An Image of Marwan Sherif"
            className="w-full h-full object-cover"
          />
        </div>
      </AnimationWrapper>
    </section>
  );
}

export default HeroSection;
