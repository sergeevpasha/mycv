import React, { Component } from 'react';
import Sticky from 'react-stickynode';
import { WithTranslation, withTranslation } from 'next-i18next';
import formatDate from '../utils/formatDate';

type SidebarProps = WithTranslation;

class Sidebar extends Component<SidebarProps, { sticky: boolean }> {
    constructor(props: SidebarProps) {
        super(props);
        this.state = {
            sticky: true,
        };
    }

    componentDidMount() {
        this.updateDimensions();
        window.addEventListener('resize', this.updateDimensions);
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.updateDimensions);
    }

    updateDimensions = () => {
        this.setState({ sticky: window.innerWidth > 1200 });
    };

    changeSticky = ({ status }: { status: number }): void => {
        const { sticky } = this.state;
        const sidebar = document.getElementsByClassName('sidebar')[0];
        if (status === Sticky.STATUS_ORIGINAL || !sticky) {
            sidebar.classList.remove('is_stuck');
        } else {
            sidebar.classList.add('is_stuck');
        }
    };

    render() {
        const { t, i18n } = this.props;
        const { language } = i18n;
        const { sticky } = this.state;
        return (
            <Sticky enabled={sticky} top={0} onStateChange={this.changeSticky}>
                <div className="sidebar box shadow pb-0 sticky-column">
                    <svg className="avatar avatar--180" viewBox="0 0 188 188">
                        <g className="avatar__box">
                            <image xlinkHref="/images/me.jpeg" height="100%" width="100%" />
                        </g>
                    </svg>
                    <div className="text-center">
                        <h3 className="title title--h3 sidebar__user-name">
                            <span className="weight--500">{t('lastName')}</span> {t('firstName')}
                        </h3>
                        <div className="badge badge--light">{t('jobTitle')}</div>
                        <div className="social">
                            <a
                                className="social__link"
                                href="https://www.instagram.com/sergeev_pasha"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <i className="font-icon icon-instagram" />
                            </a>
                            <a
                                className="social__link"
                                href="https://www.linkedin.com/in/pavel-sergeev-35742a162"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <i className="font-icon icon-linkedin2" />
                            </a>
                            <a
                                className="social__link"
                                href="https://github.com/sergeevpasha"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <i className="font-icon icon-github" />
                            </a>
                        </div>
                    </div>

                    <div className="sidebar__info box-inner box-inner--rounded">
                        <ul className="contacts-block">
                            <li
                                className="contacts-block__item"
                                data-toggle="tooltip"
                                data-placement="top"
                                title={t('birthday')}
                            >
                                <i className="font-icon icon-calendar" />
                                {formatDate('1990-12-20', language)}
                            </li>
                            <li
                                className="contacts-block__item"
                                data-toggle="tooltip"
                                data-placement="top"
                                title={t('address')}
                            >
                                <i className="font-icon icon-location" />
                                {t('location')}
                            </li>
                            <li
                                className="contacts-block__item"
                                data-toggle="tooltip"
                                data-placement="top"
                                title="E-mail"
                            >
                                <a href="mailto:sergeevpasha90@gmail.com">
                                    <i className="font-icon icon-envelope" />
                                    sergeevpasha90@gmail.com
                                </a>
                            </li>
                            <li
                                className="contacts-block__item"
                                data-toggle="tooltip"
                                data-placement="top"
                                title="Phone"
                            >
                                <i className="font-icon icon-phone" />
                                +66 (82) 338-5321
                            </li>
                            <li
                                className="contacts-block__item"
                                data-toggle="tooltip"
                                data-placement="top"
                                title="Telegram"
                            >
                                <a href="https://telegram.me/sergeevpasha" target="_blank" rel="noreferrer">
                                    <i className="font-icon icon-send" />
                                    sergeevpasha
                                </a>
                            </li>
                        </ul>

                        <a className="btn" href="/files/sergeevpavel_cv.pdf" download>
                            <i className="font-icon icon-download" /> {t('downloadCV')}
                        </a>
                    </div>
                </div>
            </Sticky>
        );
    }
}

export default withTranslation(['sidebar'])(Sidebar);
