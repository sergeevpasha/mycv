// Regenerates public/sitemap.xml (npm run sitemap); run it whenever page content changes so lastmod stays true
import { writeFileSync } from 'node:fs';
import { createRequire } from 'node:module';

const require = createRequire(import.meta.url);
const { i18n } = require('../next-i18next.config.js');

// Keep in sync with SITE_URL in utils/site.ts and the indexed pages in pages/_app.tsx
const SITE_URL = 'https://sergeevpasha.com';
const PAGES = ['/', '/resume', '/projects', '/contact'];

const pageUrl = (locale, page) => {
    const path = `${locale === i18n.defaultLocale ? '' : `/${locale}`}${page === '/' ? '' : page}`;
    return `${SITE_URL}${path || '/'}`;
};

const lastmod = new Date().toISOString().slice(0, 10);
const alternates = page =>
    [
        ...i18n.locales.map(
            alt => `        <xhtml:link rel="alternate" hreflang="${alt}" href="${pageUrl(alt, page)}" />`
        ),
        `        <xhtml:link rel="alternate" hreflang="x-default" href="${pageUrl(i18n.defaultLocale, page)}" />`,
    ].join('\n');

const urls = PAGES.flatMap(page =>
    i18n.locales.map(
        locale =>
            `    <url>\n        <loc>${pageUrl(locale, page)}</loc>\n        <lastmod>${lastmod}</lastmod>\n${alternates(page)}\n    </url>`
    )
);

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${urls.join('\n')}
</urlset>
`;

writeFileSync(new URL('../public/sitemap.xml', import.meta.url), xml);
console.log(`public/sitemap.xml: ${urls.length} urls, lastmod ${lastmod}`);
