import React from 'react';
import { serverSideTranslations } from 'next-i18next/pages/serverSideTranslations';
import { WithTranslation, withTranslation } from 'next-i18next/pages';
import { PageProps } from '../types';

export const getStaticProps = async ({ locale }: PageProps) => ({
    props: {
        locale,
        ...(await serverSideTranslations(locale)),
    },
});

type ProjectsProps = WithTranslation;

function Projects(props: ProjectsProps) {
    const { t } = props;
    return (
        <div id="resume-tab" className="tabcontent">
            <div className="pb-3">
                <h1 className="title title--h1 first-title title__separate">{t('projects')}</h1>
            </div>
            <div className="pb-0">
                <div className="row">
                    <article className="timeline__item">
                        <h2 className="title title--h5 timeline__title">{t('thirteenthProjectTitle')}</h2>
                        <span className="timeline__period">03/2025 — {t('present')}</span>
                        <p className="timeline__description">{t('thirteenthProjectDescription')}</p>
                    </article>
                    <article className="timeline__item">
                        <h2 className="title title--h5 timeline__title">{t('twelfthProjectTitle')}</h2>
                        <span className="timeline__period">03/2025 — {t('present')}</span>
                        <p className="timeline__description">{t('twelfthProjectDescription')}</p>
                    </article>
                    <article className="timeline__item">
                        <h2 className="title title--h5 timeline__title">{t('eleventhProjectTitle')}</h2>
                        <span className="timeline__period">07/2023 — 12/2024</span>
                        <p className="timeline__description">{t('eleventhProjectDescription')}</p>
                    </article>
                    <article className="timeline__item">
                        <h2 className="title title--h5 timeline__title">{t('tenthProjectTitle')}</h2>
                        <span className="timeline__period">05/2023 — 12/2024</span>
                        <p className="timeline__description">{t('tenthProjectDescription')}</p>
                    </article>
                    <article className="timeline__item">
                        <h2 className="title title--h5 timeline__title">{t('ninthProjectTitle')}</h2>
                        <span className="timeline__period">2022</span>
                        <p className="timeline__description">{t('ninthProjectDescription')}</p>
                    </article>
                    <article className="timeline__item">
                        <h2 className="title title--h5 timeline__title">{t('seventhProjectTitle')}</h2>
                        <span className="timeline__period">10/2021 — 09/2022</span>
                        <p className="timeline__description">{t('seventhProjectDescription')}</p>
                    </article>
                    <article className="timeline__item">
                        <h2 className="title title--h5 timeline__title">{t('sixthProjectTitle')}</h2>
                        <span className="timeline__period">05/2021 — 10/2021</span>
                        <p className="timeline__description">{t('sixthProjectDescription')}</p>
                    </article>
                    <article className="timeline__item">
                        <h2 className="title title--h5 timeline__title">{t('fifthProjectTitle')}</h2>
                        <span className="timeline__period">02/2021 — 05/2021</span>
                        <p className="timeline__description">{t('fifthProjectDescription')}</p>
                    </article>
                    <article className="timeline__item">
                        <h2 className="title title--h5 timeline__title">{t('fourthProjectTitle')}</h2>
                        <span className="timeline__period">08/2020 — 02/2021</span>
                        <p className="timeline__description">{t('fourthProjectDescription')}</p>
                    </article>
                    <article className="timeline__item">
                        <h2 className="title title--h5 timeline__title">{t('eighthProjectTitle')}</h2>
                        <span className="timeline__period">2020</span>
                        <p className="timeline__description">{t('eighthProjectDescription')}</p>
                    </article>
                    <article className="timeline__item">
                        <h2 className="title title--h5 timeline__title">{t('thirdProjectTitle')}</h2>
                        <span className="timeline__period">08/2018 — 08/2020</span>
                        <p className="timeline__description">{t('thirdProjectDescription')}</p>
                    </article>
                    <article className="timeline__item">
                        <h2 className="title title--h5 timeline__title">{t('secondProjectTitle')}</h2>
                        <span className="timeline__period">06/2018 — 08/2018</span>
                        <p className="timeline__description">{t('secondProjectDescription')}</p>
                    </article>
                    <article className="timeline__item">
                        <h2 className="title title--h5 timeline__title">{t('firstProjectTitle')}</h2>
                        <span className="timeline__period">01/2018 — 06/2018</span>
                        <p className="timeline__description">{t('firstProjectDescription')}</p>
                    </article>
                </div>
            </div>
        </div>
    );
}

export default withTranslation(['projects'])(Projects);
