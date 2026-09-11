import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next/pages';

// Next.js prefers this cookie over Accept-Language, so the choice sticks on the next visit to "/"
const rememberLocale = (locale: string) => {
    document.cookie = `NEXT_LOCALE=${locale}; path=/; max-age=31536000; SameSite=Lax`;
};

function LanguageSwitcher() {
    const { t } = useTranslation('common');
    const { locale, locales = [], asPath } = useRouter();

    return (
        <nav className="lang-switcher" aria-label={t('language')}>
            {locales.map(target => (
                <Link
                    key={target}
                    href={asPath}
                    locale={target}
                    hrefLang={target}
                    className={`lang-switcher__link ${target === locale ? 'is-active' : ''}`}
                    aria-current={target === locale ? 'true' : undefined}
                    onClick={() => rememberLocale(target)}
                >
                    {target.toUpperCase()}
                </Link>
            ))}
        </nav>
    );
}

export default LanguageSwitcher;
