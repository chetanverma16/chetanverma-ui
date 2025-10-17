import { MetadataRoute } from "next";
import { COMPONENT_ROUTES } from "@/lib/routes-config";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://ui.chetanverma.com";

  // Homepage
  const routes: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
  ];

  // Component routes
  COMPONENT_ROUTES.forEach((route) => {
    routes.push({
      url: `${baseUrl}/components${route.href}`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    });
  });

  return routes;
}
