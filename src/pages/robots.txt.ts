import type { APIRoute } from "astro";
import { siteConfig } from "../../site.config";

export const GET: APIRoute = () => {
  if (!siteConfig.siteUrl) {
    throw new Error("siteUrl is required to generate robots.txt");
  }

  const sitemap = new URL("/sitemap.xml", siteConfig.siteUrl).toString();
  const body = `User-agent: *\nAllow: /\n\nSitemap: ${sitemap}\n`;

  return new Response(body, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
};
