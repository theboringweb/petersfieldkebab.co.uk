export function GET() {
  const base = "https://petersfieldkebab.co.uk";
  const pages = [
    { url: `${base}/`, lastModified: "2026-05-21" },
    { url: `${base}/menu`, lastModified: "2026-05-21" },
  ];

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages
  .map(
    (p) => `  <url>
    <loc>${p.url}</loc>
    <lastmod>${p.lastModified}</lastmod>
  </url>`,
  )
  .join("\n")}
</urlset>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml",
    },
  });
}
