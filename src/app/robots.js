export default function robots() {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${process.env.APP_BASE_URL}/sitemap.xml`,
  };
}
