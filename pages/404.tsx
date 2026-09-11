import React from 'react';
import Link from 'next/link';
import { serverSideTranslations } from 'next-i18next/pages/serverSideTranslations';
import { WithTranslation, withTranslation } from 'next-i18next/pages';
import { PageProps } from '../types';

export const getStaticProps = async ({ locale }: PageProps) => ({
    props: {
        locale,
        ...(await serverSideTranslations(locale)),
    },
});

type NotFoundProps = WithTranslation;

function NotFound(props: NotFoundProps) {
    const { t } = props;
    return (
        <div id="not-found-tab" className="tabcontent">
            <div className="pb-3">
                <h1 className="title title--h1 first-title title__separate">{t('notFoundHeading')}</h1>
            </div>
            <p>{t('notFoundText')}</p>
            <div className="pb-4">
                <Link href="/" className="btn">
                    {t('notFoundLink')}
                </Link>
            </div>
        </div>
    );
}

export default withTranslation(['common'])(NotFound);
