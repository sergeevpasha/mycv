import React from 'react';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { WithTranslation, withTranslation } from 'next-i18next';
import { PageProps } from '../types';
import Testimonials from '../components/testimonials';
import Clients from '../components/clients';

export const getStaticProps = async ({ locale }: PageProps) => ({
    props: {
        locale,
        ...(await serverSideTranslations(locale)),
    },
});

type HomeProps = WithTranslation;

function Home(props: HomeProps) {
    const { t } = props;

    return (
        <div id="about-tab" className="tabcontent active">
            <div className="pb-0 pb-sm-2">
                <h1 className="title title--h1 first-title title__separate">{t('title')}</h1>
                <p>{t('firstParagraph')}</p>
                <p>{t('secondParagraph')}</p>
            </div>
            <div className="box-inner pb-0">
                <h2 className="title title--h3">{t('skills')}</h2>
                <div className="row">
                    <div className="col-12 col-lg-6">
                        <div className="case-item box box__second">
                            <img className="case-item__icon" src="/icons/dark/icon-design.svg" alt="" />
                            <div>
                                <h3 className="title title--h5">{t('backendDevTitle')}</h3>
                                <p className="case-item__caption">{t('backendDevBody')}</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-lg-6">
                        <div className="case-item box box__second">
                            <img className="case-item__icon" src="/icons/dark/icon-dev.svg" alt="" />
                            <div>
                                <h3 className="title title--h5">{t('frontendDevTitle')}</h3>
                                <p className="case-item__caption">{t('frontendDevBody')}</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-lg-6">
                        <div className="case-item box box__second">
                            <img className="case-item__icon" src="/icons/dark/icon-app.svg" alt="" />
                            <div>
                                <h3 className="title title--h5">{t('htmlDevTitle')}</h3>
                                <p className="case-item__caption">{t('htmlDevBody')}</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-lg-6">
                        <div className="case-item box box__second">
                            <img className="case-item__icon" src="/icons/dark/icon-database.svg" alt="" />
                            <div>
                                <h3 className="title title--h5">{t('databaseArchitectureTitle')}</h3>
                                <p className="case-item__caption">{t('databaseArchitectureBody')}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Testimonials />
            <Clients />
        </div>
    );
}

export default withTranslation(['about', 'common'])(Home);
