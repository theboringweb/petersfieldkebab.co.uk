export function GET() {
  const body = `User-agent: *
Allow: /

Sitemap: https://petersfieldkebab.co.uk/sitemap.xml
`;

  return new Response(body, {
    headers: {
      "Content-Type": "text/plain",
    },
  });
}
