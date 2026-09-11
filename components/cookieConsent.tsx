import React, { useEffect, useSyncExternalStore } from 'react';
import Script from 'next/script';
import { useTranslation } from 'next-i18next/pages';

type Consent = 'accepted' | 'declined' | null;

const STORAGE_KEY = 'cookie-consent';
const CHANGE_EVENT = 'cookie-consent-change';
const ANALYTICS_KEY = /^(_ga|_gid|_ym)/;

let settingsOpen = false;

const notify = () => window.dispatchEvent(new Event(CHANGE_EVENT));

const subscribe = (onChange: () => void) => {
    window.addEventListener('storage', onChange);
    window.addEventListener(CHANGE_EVENT, onChange);
    return () => {
        window.removeEventListener('storage', onChange);
        window.removeEventListener(CHANGE_EVENT, onChange);
    };
};

const readConsent = (): Consent => {
    try {
        const value = window.localStorage.getItem(STORAGE_KEY);
        return value === 'accepted' || value === 'declined' ? value : null;
    } catch {
        return null;
    }
};

const clearAnalyticsData = () => {
    const expired = 'expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/';
    const domains = ['', `; domain=.${window.location.hostname.split('.').slice(-2).join('.')}`];
    document.cookie
        .split(';')
        .map(cookie => cookie.split('=')[0].trim())
        .filter(name => ANALYTICS_KEY.test(name))
        .forEach(name => domains.forEach(domain => (document.cookie = `${name}=; ${expired}${domain}`)));
    Object.keys(window.localStorage)
        .filter(key => ANALYTICS_KEY.test(key))
        .forEach(key => window.localStorage.removeItem(key));
};

const saveConsent = (consent: 'accepted' | 'declined') => {
    const revoked = consent === 'declined' && readConsent() === 'accepted';
    try {
        window.localStorage.setItem(STORAGE_KEY, consent);
    } catch {
        // Storage is unavailable (private mode), so the choice only lasts for this page view
    }
    settingsOpen = false;
    if (revoked) {
        // Analytics scripts are already running, so a reload is the only way to unload them
        clearAnalyticsData();
        window.location.reload();
        return;
    }
    notify();
};

export const openCookieSettings = () => {
    settingsOpen = true;
    notify();
};

function CookieConsent() {
    const { t } = useTranslation('common');
    const consent = useSyncExternalStore(subscribe, readConsent, () => undefined);
    const showSettings = useSyncExternalStore(
        subscribe,
        () => settingsOpen,
        () => false
    );

    useEffect(() => {
        // Trackers may still write data while the page unloads after a revoke
        if (consent === 'declined') clearAnalyticsData();
    }, [consent]);

    return (
        <>
            {consent === 'accepted' && (
                <>
                    <Script
                        src="https://www.googletagmanager.com/gtag/js?id=G-TVT25F288C"
                        strategy="afterInteractive"
                    />
                    <Script id="google-analytics" strategy="afterInteractive">
                        {`
                            window.dataLayer = window.dataLayer || [];
                            function gtag(){dataLayer.push(arguments);}
                            gtag('js', new Date());

                            gtag('config', 'G-TVT25F288C');
                        `}
                    </Script>
                    <Script id="yandex-counter" strategy="afterInteractive">
                        {`
                            (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
                                m[i].l=1*new Date();
                                for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
                                k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
                                (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

                                ym(94010124, "init", {
                                clickmap:true,
                                trackLinks:true,
                                accurateTrackBounce:true,
                                webvisor:true
                            });
                        `}
                    </Script>
                </>
            )}
            {(consent === null || showSettings) && (
                <div className="cookie-consent" role="dialog" aria-live="polite" aria-label={t('cookieTitle')}>
                    <p className="cookie-consent__text">{t('cookieText')}</p>
                    <div className="cookie-consent__actions">
                        <button
                            type="button"
                            className="btn cookie-consent__decline"
                            onClick={() => saveConsent('declined')}
                        >
                            {t('cookieDecline')}
                        </button>
                        <button type="button" className="btn" onClick={() => saveConsent('accepted')}>
                            {t('cookieAccept')}
                        </button>
                    </div>
                </div>
            )}
        </>
    );
}

export default CookieConsent;
