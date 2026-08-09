import { MetadataRoute } from "next";
import { packages } from "@/components/data/packages";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.zanpaankashmir.com";

  const packagePages = Object.keys(packages).map((slug) => ({
    url: `${baseUrl}/packages/${slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.9,
  }));

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/packages`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    ...packagePages,
  ];
}