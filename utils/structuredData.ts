import { SITE_URL } from './site';

const PERSON_ID = `${SITE_URL}/#person`;
const WEBSITE_ID = `${SITE_URL}/#website`;

// schema.org graph for the home page: who the site is about and where else they are online
const profileJsonLd = (url: string, name: string, locale: string): string =>
    JSON.stringify({
        '@context': 'https://schema.org',
        '@graph': [
            {
                '@type': 'WebSite',
                '@id': WEBSITE_ID,
                url: `${SITE_URL}/`,
                name: 'Pavel Sergeev',
                inLanguage: ['en', 'ru', 'de'],
            },
            {
                '@type': 'ProfilePage',
                '@id': `${url}#profile`,
                url,
                name,
                inLanguage: locale,
                isPartOf: { '@id': WEBSITE_ID },
                mainEntity: { '@id': PERSON_ID },
            },
            {
                '@type': 'Person',
                '@id': PERSON_ID,
                name: 'Pavel Sergeev',
                alternateName: 'Павел Сергеев',
                url: `${SITE_URL}/`,
                image: `${SITE_URL}/images/me.jpeg`,
                jobTitle: 'Full-Stack Software Engineer',
                worksFor: { '@type': 'Organization', name: 'iGMS', url: 'https://www.igms.com' },
                alumniOf: { '@type': 'CollegeOrUniversity', name: 'Ural State University of Economics' },
                knowsAbout: [
                    'PHP',
                    'Laravel',
                    'Go',
                    'Node.js',
                    'TypeScript',
                    'Vue.js',
                    'React',
                    'PostgreSQL',
                    'ClickHouse',
                    'AWS',
                    'LLM integration',
                    'Retrieval-augmented generation',
                ],
                knowsLanguage: ['en', 'ru'],
                sameAs: [
                    'https://www.linkedin.com/in/pavel-sergeev-35742a162',
                    'https://github.com/sergeevpasha',
                    'https://telegram.me/sergeevpasha',
                    'https://www.instagram.com/sergeev_pasha',
                ],
            },
        ],
    }).replace(/</g, '\\u003c');

export default profileJsonLd;
