export default function sitemap() {
  const baseUrl = "https://primeghar.com";

  // Core pages from file structure
  const routes = ["", "/about-us", "/services"].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString(),
    changeFrequency: "weekly",
    priority: route === "" ? 1 : 0.8,
  }));

  return routes;
}
