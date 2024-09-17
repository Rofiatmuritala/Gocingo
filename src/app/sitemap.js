export default async function sitemap() {
  console.log(process.env.APP_BASE_URL);
  const APP_BASE_URL = process.env.APP_BASE_URL;

  const pages = ["", "about", "contact", "donate", "getInvolve", "projects"];

  const sitemap = pages.map((page) => ({
    url: page === "" ? APP_BASE_URL : `${APP_BASE_URL}/${page}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: page === "" ? 1.0 : 0.9,
  }));

  return [...sitemap];
}
