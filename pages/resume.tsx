import React from 'react';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { WithTranslation, withTranslation } from 'next-i18next';
import { PageProps } from '../types';
import ProgressBar from '../components/progressBar/index';
import Education from '../components/resume/education';
import Experience from '../components/resume/experience';

export const getStaticProps = async ({ locale }: PageProps) => ({
    props: {
        locale,
        ...(await serverSideTranslations(locale)),
    },
});

type ResumeProps = WithTranslation;

function Resume(props: ResumeProps) {
    const { t } = props;
    return (
        <div id="resume-tab" className="tabcontent">
            <div className="pb-3">
                <h1 className="title title--h1 first-title title__separate">{t('resume')}</h1>
            </div>
            <div className="pb-0">
                <div className="row">
                    <Education />
                    <Experience />
                </div>
            </div>
            <div className="box-inner box-inner--rounded">
                <div className="row">
                    <div className="col-12 col-lg-6">
                        <h2 className="title title--h3">{t('backendSkills')}</h2>
                        <div className="box box__second">
                            <ProgressBar value={100} title="PHP" />
                            <ProgressBar value={100} title="Laravel" />
                            <ProgressBar value={60} title="NodeJS" />
                            <ProgressBar value={65} title="ExpressJS" />
                            <ProgressBar value={90} title="Postgres" />
                            <ProgressBar value={75} title="Mysql" />
                            <ProgressBar value={65} title="Redis" />
                            <ProgressBar value={50} title="mongoDB" />
                            <ProgressBar value={50} title="GraphQL" />
                        </div>
                    </div>
                    <div className="col-12 col-lg-6 mt-4 mt-lg-0">
                        <h2 className="title title--h3">{t('frontendSkills')}</h2>
                        <div className="box box__second">
                            <ProgressBar value={100} title="HTML" />
                            <ProgressBar value={70} title="CSS/SASS" />
                            <ProgressBar value={80} title="JavaScript" />
                            <ProgressBar value={100} title="TypeScript" />
                            <ProgressBar value={100} title="Vue" />
                            <ProgressBar value={100} title="Nuxt" />
                            <ProgressBar value={60} title="React" />
                            <ProgressBar value={65} title="Next" />
                            <ProgressBar value={50} title="Svelte" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="box-inner box-inner--rounded">
                <div className="row">
                    <div className="col-12 col-lg-6">
                        <h2 className="title title--h3">{t('devOpsSkills')}</h2>
                        <div className="box box__second">
                            <ProgressBar value={60} title="AWS" />
                            <ProgressBar value={80} title="Docker" />
                            <ProgressBar value={90} title="Nginx" />
                            <ProgressBar value={70} title="Linux" />
                            <ProgressBar value={80} title="GitHub Actions" />
                            <ProgressBar value={50} title="Jenkins" />
                        </div>
                    </div>
                    <div className="col-12 col-lg-6 mt-4 mt-lg-0">
                        <h2 className="title title--h3">{t('otherSkills')}</h2>
                        <div className="box box__second">
                            <ProgressBar value={100} title="Git" />
                            <ProgressBar value={100} title="Swagger" />
                            <ProgressBar value={40} title="ELK" />
                            <ProgressBar value={50} title="Algolia" />
                            <ProgressBar value={70} title="Behat" />
                            <ProgressBar value={100} title="Jira" />
                            <ProgressBar value={70} title="Serverless" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default withTranslation(['resumeProfile'])(Resume);
