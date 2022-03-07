import React from 'react';
import { WithTranslation, withTranslation } from 'next-i18next';

type EducationProps = WithTranslation;

function Experience(props: EducationProps) {
    const { t } = props;
    return (
        <div className="col-12 col-lg-6">
            <h2 className="title title--h3">
                <img className="title-icon" src="/icons/dark/icon-experience.svg" alt="" /> {t('experience')}
            </h2>
            <div className="timeline">
                <article className="timeline__item">
                    <h5 className="title title--h5 timeline__title">{t('thirdExperienceTitle')}</h5>
                    <span className="timeline__period">08/2020 — {t('present')}</span>
                    <p className="timeline__description">{t('thirdExperienceDescription')}</p>
                </article>
                <article className="timeline__item">
                    <h5 className="title title--h5 timeline__title">{t('secondExperienceTitle')}</h5>
                    <span className="timeline__period">01/2018 — 08/2020</span>
                    <p className="timeline__description">{t('secondExperienceDescription')}</p>
                </article>
                <article className="timeline__item">
                    <h5 className="title title--h5 timeline__title">{t('firstExperienceTitle')}</h5>
                    <span className="timeline__period">08/2014 — 08/2016</span>
                    <p className="timeline__description">{t('firstExperienceDescription')}</p>
                </article>
            </div>
        </div>
    );
}

export default withTranslation(['experience'])(Experience);
