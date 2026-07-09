import { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site-config";
import { products } from "@/data/products";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "/about",
    "/products",
    "/contact",
    "/privacy-policy",
    "/terms-and-conditions",
    "/shipping-policy",
    "/return-refund-policy",
    "/disclaimer",
  ].map((route) => ({
    url: `${siteConfig.url}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1 : 0.7,
  }));

  const productRoutes = products.map((p) => ({
    url: `${siteConfig.url}/products/${p.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  return [...staticRoutes, ...productRoutes];
}
