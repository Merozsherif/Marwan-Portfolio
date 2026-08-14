import AnimationWrapper from "./AnimationWrapper";
import { MapPin } from "lucide-react";

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
      <h2 className="text-3xl text-(--orange-text) mb-2">My Story</h2>

      <p className="flex items-center gap-2 text-sm text-(--gray-text) mb-6">
        <MapPin size={16} aria-hidden="true" className="text-(--orange-text)" />
        Based in Cairo, Egypt — available for remote work worldwide
      </p>

      <p className={paragraphsClasses}>
        I’m Marwan Sherif, a Computer Engineer and Full-Stack Software
        Developer. I don’t just build websites — I build complete software
        solutions that help businesses launch, operate, and grow.
      </p>

      <p className={paragraphsClasses}>
        I work across the full stack: designing databases and backend APIs
        with C#, .NET / ASP.NET Core, and SQL Server, building web
        experiences with Angular, React, and Next.js, and building mobile
        apps with Flutter. That means I can take a business need and turn it
        into a working product end-to-end — backend, web, mobile, database,
        and authentication included.
      </p>

      <p className={paragraphsClasses}>
        I care about clean architecture and long-term reliability, not just
        shipping fast. I’m also focused on building lasting relationships with
        the businesses I work with — staying involved after launch to
        maintain, improve, and grow the software as their needs evolve.
      </p>
    </AnimationWrapper>
  );
}

export default MyStoryArticle;
