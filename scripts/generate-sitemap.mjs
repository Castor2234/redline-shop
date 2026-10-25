import { writeFileSync } from 'node:fs';

const SITE = 'https://redlineshop.shop';

// Replace with an import of your real data, e.g.:
// import { categories } from '../src/data/categories.json' with { type: 'json' };
const categories = [
  { section: 'Games', category: 'Brawl Stars' },
  { section: 'Other', category: 'ChatGPT' },
  // ...
];

// Escape for XML (& must be &amp;)
const esc = (s) =>
  s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

const staticPaths = ['/', '/faq', '/catalog', '/gifts'];

const catalogUrls = categories.map(({ section, category }) => {
  const qs = new URLSearchParams({ section, category }).toString(); // spaces become +
  return `/catalog?${qs}`;
});

const urls = [...staticPaths, ...catalogUrls]
  .map((p) => `  <url>\n    <loc>${esc(SITE + p)}</loc>\n  </url>`)
  .join('\n');

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>
`;

writeFileSync('public/sitemap.xml', xml);
console.log(`sitemap.xml: ${staticPaths.length + catalogUrls.length} URLs`);