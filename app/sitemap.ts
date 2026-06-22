import type { MetadataRoute } from "next";
import { SITE_URL } from "./lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const routes: {
    path: string;
    priority: number;
    changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"];
  }[] = [
    { path: "/", priority: 1, changeFrequency: "weekly" },
    { path: "/about-us", priority: 0.5, changeFrequency: "monthly" },
    {
      path: "/services/360-virtual-tour",
      priority: 0.8,
      changeFrequency: "monthly",
    },
    {
      path: "/services/360-hotels-tour",
      priority: 0.8,
      changeFrequency: "monthly",
    },
    {
      path: "/services/360-campus-tour",
      priority: 0.8,
      changeFrequency: "monthly",
    },
    {
      path: "/services/virtual-staging",
      priority: 0.7,
      changeFrequency: "monthly",
    },
    {
      path: "/services/item-removal",
      priority: 0.7,
      changeFrequency: "monthly",
    },
    {
      path: "/services/virtual-renovation",
      priority: 0.7,
      changeFrequency: "monthly",
    },
  ];

  return routes.map(({ path, priority, changeFrequency }) => ({
    url: `${SITE_URL}${path === "/" ? "" : path}`,
    lastModified,
    changeFrequency,
    priority,
  }));
}
