import type { APIRoute } from "astro";
import { siteConfig } from "../../site.config";
import { getPublishedProducts } from "../lib/products";

const staticPaths = [
  "/",
  "/products/",
  "/applications/",
  "/oem-odm/",
  "/factory/",
  "/about/",
  "/contact/",
];

export const GET: APIRoute = async () => {
  if (!siteConfig.siteUrl) {
    throw new Error("siteUrl is required to generate sitemap.xml");
  }

  const products = await getPublishedProducts();
  const productPaths = products.map(({ data }) => `/products/${data.slug}/`);
  const paths = [staticPaths[0], staticPaths[1], ...productPaths, ...staticPaths.slice(2)];
  const urls = paths
    .map((path) => `  <url><loc>${new URL(path, siteConfig.siteUrl).toString()}</loc></url>`)
    .join("\n");
  const body = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`;

  return new Response(body, {
    headers: { "Content-Type": "application/xml; charset=utf-8" },
  });
};
