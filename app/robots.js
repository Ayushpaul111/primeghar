export default function robots() {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/private/"],
      },
    ],
    sitemap: "https://primeghar.com/sitemap.xml",
    host: "https://primeghar.com",
  };
}
