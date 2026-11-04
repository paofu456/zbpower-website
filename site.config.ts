export const siteConfig = {
  language: "en",
  locale: "en_US",
  siteUrl: "https://zb.fuliang.online" as string | undefined,
  siteMode: "production" as "local" | "production",
  contentStatus: "ready" as "demo" | "draft" | "ready",
  navigation: [
    { label: "Products", href: "/products/" },
    { label: "Applications", href: "/applications/" },
    { label: "OEM & ODM", href: "/oem-odm/" },
    { label: "Factory", href: "/factory/" },
    { label: "About", href: "/about/" },
    { label: "Contact", href: "/contact/" },
  ],
};
