export const SITE_URL = 'https://sergeevpasha.com';

export const OG_LOCALES: Record<string, string> = {
    en: 'en_US',
    ru: 'ru_RU',
    de: 'de_DE',
};

const pageUrl = (locale: string, defaultLocale: string, pathname: string): string => {
    const path = `${locale === defaultLocale ? '' : `/${locale}`}${pathname === '/' ? '' : pathname}`;
    return `${SITE_URL}${path || '/'}`;
};

export default pageUrl;
