import React, { createRef, useEffect } from 'react';
import { WithTranslation, withTranslation } from 'next-i18next';
import Swiper, { Navigation, Pagination } from 'swiper';

type ClientProps = WithTranslation;

function Clients(props: ClientProps) {
    const { t } = props;
    const carousel = createRef<HTMLDivElement>();
    useEffect(() => {
        Swiper.use([Navigation, Pagination]);
        (() =>
            new Swiper('.js-carousel-clients', {
                slidesPerView: 2,
                spaceBetween: 20,
                speed: 300,
                grabCursor: true,
                watchOverflow: true,
                pagination: {
                    el: '.swiper-pagination',
                    clickable: true,
                },
                autoplay: {
                    delay: 5000,
                },
                breakpoints: {
                    800: {
                        slidesPerView: 3,
                        spaceBetween: 30,
                    },
                    1200: {
                        slidesPerView: 4,
                        spaceBetween: 30,
                    },
                },
            }))();
    });
    return (
        <div className="box-inner box-inner--rounded">
            <h2 className="title title--h3">{t('clients')}</h2>
            <div className="swiper-container js-carousel-clients" ref={carousel}>
                <div className="swiper-wrapper">
                    <div className="swiper-slide">
                        <a href="https://insly.com/en/" target="_blank" rel="noreferrer">
                            <img src="/clients/insly.svg" alt="Insly" height={50} />
                            Insly
                        </a>
                    </div>
                    <div className="swiper-slide">
                        <a href="https://en.uetel.ru/" target="_blank" rel="noreferrer">
                            <img src="/clients/uralenergotel.png" alt="Uralenergotel" height={50} />
                            Uralenergotel
                        </a>
                    </div>
                    <div className="swiper-slide">
                        <a href="https://energetichub.com/" target="_blank" rel="noreferrer">
                            <img src="/clients/energetichub.png" alt="EnergeticHub" height={50} />
                            EnergeticHub
                        </a>
                    </div>
                    <div className="swiper-slide">
                        <a href="https://www.vitastudent.com/en/" target="_blank" rel="noreferrer">
                            <img src="/clients/vitastudent.svg" alt="VitaStudent" height={50} />
                            VitaStudent
                        </a>
                    </div>
                    <div className="swiper-slide">
                        <a href="https://metime.com/" target="_blank" rel="noreferrer">
                            <img src="/clients/metime.png" alt="MeTime" height={50} />
                            MeTime
                        </a>
                    </div>
                </div>
                <div className="swiper-pagination" />
            </div>
        </div>
    );
}

export default withTranslation(['clients'])(Clients);
