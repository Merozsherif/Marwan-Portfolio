import { MetadataRoute } from "next";
import { projects } from "./_data/projects";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "";

  // Static pages
  const routes = [
    // Root redirects to /home, so we only include /home in the sitemap
    {
      url: `${baseUrl}/home`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 1, // Highest priority since it's the main landing page
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/skills`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/projects`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: "yearly" as const,
      priority: 0.6,
    },
  ];

  // Dynamic project pages
  const projectRoutes = projects.map((project) => ({
    url: `${baseUrl}/projects/${project.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  return [...routes, ...projectRoutes];
}
