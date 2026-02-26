import type { MetadataRoute } from "next";
import { getBaseUrl } from "@/lib/site-url";
import { vehicles } from "@/content/vehicles";
import { cabServices } from "@/content/cab-services";
import { routePages } from "@/content/route-pages";

export const dynamic = "force-dynamic";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const base = await getBaseUrl();
  const now = new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: `${base}/`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${base}/cab-services`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${base}/fleet`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.8,
    },
  ];

  const fleetRoutes: MetadataRoute.Sitemap = vehicles.map((vehicle) => ({
    url: `${base}/fleet/${vehicle.slug}`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: 0.7,
  }));

  const cabServiceRoutes: MetadataRoute.Sitemap = cabServices.map((service) => ({
    url: `${base}/${service.slug}`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: 0.8,
  }));

  const routeDetailRoutes: MetadataRoute.Sitemap = routePages.map((route) => ({
    url: `${base}/${route.slug}`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: 0.75,
  }));

  return [...staticRoutes, ...cabServiceRoutes, ...routeDetailRoutes, ...fleetRoutes];
}

