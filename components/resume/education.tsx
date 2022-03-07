import React from 'react';
import { WithTranslation, withTranslation } from 'next-i18next';

type EducationProps = WithTranslation;

function Education(props: EducationProps) {
    const { t } = props;
    return (
        <div className="col-12 col-lg-6">
            <h2 className="title title--h3">
                <img className="title-icon" src="/icons/dark/icon-education.svg" alt="" /> {t('education')}
            </h2>
            <div className="timeline">
                <article className="timeline__item">
                    <h5 className="title title--h5 timeline__title">{t('secondEducationTitle')}</h5>
                    <span className="timeline__period">09/2016 — 09/2017</span>
                    <p className="timeline__description">{t('secondEducationDescription')}</p>
                </article>
                <article className="timeline__item">
                    <h5 className="title title--h5 timeline__title">{t('firstEducationTitle')}</h5>
                    <span className="timeline__period">09/2008 — 06/2013</span>
                    <p className="timeline__description">{t('firstEducationDescription')}</p>
                </article>
            </div>
        </div>
    );
}

export default withTranslation(['education'])(Education);
