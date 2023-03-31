import '../assets/styles/style.scss';
import '../assets/styles/style-dark.scss';
import type { AppProps } from 'next/app';
import { appWithTranslation, useTranslation } from 'next-i18next';
import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import Script from 'next/script';
import { Analytics } from '@vercel/analytics/react';
import Layout from '../layouts/Main';
import Sidebar from '../components/sidebar';
import Navigation from '../components/navigation';

function MyApp({ Component, pageProps }: AppProps) {
    const { t } = useTranslation('common');
    const router = useRouter();
    const [ogUrl, setOgUrl] = useState('');

    useEffect(() => {
        const { host } = window.location;
        const baseUrl = `https://${host}`;
        const localePath = baseUrl + router.pathname + (router.locale === 'en' ? '' : router.locale);
        setOgUrl(localePath.replace(/\/$/, ''));
    }, [router.pathname, router.locale]);

    return (
        <Layout>
            <div className="container gutter-top">
                <Head>
                    <title>{t('title')}</title>
                    <meta name="description" content={t('description')} />
                    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
                    <meta name="author" content={`${t('firstName')} ${t('lastName')}`} />
                    <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
                    <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
                    <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
                    <link rel="manifest" href="/site.webmanifest" />
                    <meta name="robots" content="index, follow" />
                    <meta name="apple-mobile-web-app-title" content={t('applicationName')} />
                    <meta name="application-name" content={t('applicationName')} />
                    <meta name="msapplication-TileColor" content="#2d89ef" />
                    <meta name="theme-color" content="#ffffff" />
                    <meta property="og:title" content={t('title')} />
                    <meta property="og:description" content={t('description')} />
                    <meta property="og:url" content={ogUrl} />
                    <meta property="og:image" content="/apple-touch-icon.png" />
                    <meta property="og:site_name" content={t('applicationName')} />
                    <meta property="og:type" content="profile" />
                    <meta property="profile:first_name" content={t('firstName')} />
                    <meta property="profile:last_name" content={t('lastName')} />
                    <meta property="profile:username" content={t('userName')} />
                    <meta property="profile:gender" content={t('male')} />
                </Head>
                <div className="row sticky-parent">
                    <aside className="col-12 col-md-12 col-xl-3">
                        <Sidebar />
                    </aside>
                    <div className="col-12 col-md-12 col-xl-9">
                        <div className="box shadow pb-0">
                            <Navigation />
                            <div className="content">
                                <Component {...pageProps} />
                            </div>
                        </div>
                        <footer className="footer">© 2022</footer>
                    </div>
                </div>
                <svg className="svg-defs">
                    <clipPath id="avatar-box">
                        <path d="M1.85379 38.4859C2.9221 18.6653 18.6653 2.92275 38.4858 1.85453 56.0986.905299 77.2792 0 94 0c16.721 0 37.901.905299 55.514 1.85453 19.821 1.06822 35.564 16.81077 36.632 36.63137C187.095 56.0922 188 77.267 188 94c0 16.733-.905 37.908-1.854 55.514-1.068 19.821-16.811 35.563-36.632 36.631C131.901 187.095 110.721 188 94 188c-16.7208 0-37.9014-.905-55.5142-1.855-19.8205-1.068-35.5637-16.81-36.63201-36.631C.904831 131.908 0 110.733 0 94c0-16.733.904831-37.9078 1.85379-55.5141z" />
                    </clipPath>
                    <clipPath id="avatar-hexagon">
                        <path d="M0 27.2891c0-4.6662 2.4889-8.976 6.52491-11.2986L31.308 1.72845c3.98-2.290382 8.8697-2.305446 12.8637-.03963l25.234 14.31558C73.4807 18.3162 76 22.6478 76 27.3426V56.684c0 4.6805-2.5041 9.0013-6.5597 11.3186L44.4317 82.2915c-3.9869 2.278-8.8765 2.278-12.8634 0L6.55974 68.0026C2.50414 65.6853 0 61.3645 0 56.684V27.2891z" />
                    </clipPath>
                </svg>
                <Script src="https://www.googletagmanager.com/gtag/js?id=UA-222755399-1" strategy="afterInteractive" />
                <Script id="google-analytics" strategy="afterInteractive">
                    {`
                            window.dataLayer = window.dataLayer || [];
                            function gtag(){dataLayer.push(arguments);}
                            gtag('js', new Date());
                            gtag('config', 'UA-222755399-1');
                        `}
                </Script>
                <Analytics />
            </div>
        </Layout>
    );
}

export default appWithTranslation(MyApp);
