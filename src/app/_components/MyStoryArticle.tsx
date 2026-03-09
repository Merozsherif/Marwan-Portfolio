import AnimationWrapper from "./AnimationWrapper";

function MyStoryArticle() {
  const paragraphsClasses = "text-(--text-color-secondary) text-lg mb-4";

  return (
    <AnimationWrapper
      as="article"
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
      className="scrollbar-custom rounded-[0.875rem] border border-(--border-color) p-6 bg-(--custom-bg-2) shadow-lg lg:max-h-117.5 overflow-auto delay"
    >
      <h2 className="text-3xl text-(--orange-text) mb-6">My Story</h2>

      <p className={paragraphsClasses}>
        I’m Marwan Sherif, a Computer Engineer and a web developer passionate
        about building clean, modern, and user-focused web applications.
      </p>

      <p className={paragraphsClasses}>
        Over the past year and a half, I’ve developed strong experience with
        Next.js, React, TypeScript, and Tailwind CSS, crafting interfaces that
        are both functional and visually refined. I care very much about
        maintainable code, performance, and delivering seamless user
        experiences.
      </p>

      <p className={paragraphsClasses}>
        Outside of coding, I like exploring new technologies and contributing to
        the developer community. I’m excited to bring my skills to a
        professional team where I can grow, collaborate, and create meaningful
        digital products.
      </p>
    </AnimationWrapper>
  );
}

export default MyStoryArticle;
