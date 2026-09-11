import React, { createRef, useEffect } from 'react';
import { WithTranslation, withTranslation } from 'next-i18next/pages';
import Image from 'next/image';
import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';

type ClientProps = WithTranslation;

function Clients(props: ClientProps) {
    const { t } = props;
    const carousel = createRef<HTMLDivElement>();
    useEffect(() => {
        const swiper = new Swiper('.js-carousel-clients', {
            modules: [Navigation, Pagination],
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
        });
        return () => {
            swiper.destroy();
        };
    }, []);
    return (
        <div className="box-inner box-inner--rounded">
            <h2 className="title title--h3">{t('clients')}</h2>
            <div className="swiper-container js-carousel-clients" ref={carousel}>
                <div className="swiper-wrapper">
                    <div className="swiper-slide">
                        <a href="https://insly.com/en/" target="_blank" rel="noreferrer">
                            <Image src="/clients/insly.svg" alt="Insly" width={50} height={50} />
                            Insly
                        </a>
                    </div>
                    <div className="swiper-slide">
                        <a href="https://en.uetel.ru/" target="_blank" rel="noreferrer">
                            <Image src="/clients/uralenergotel.png" alt="Uralenergotel" width={50} height={50} />
                            Uralenergotel
                        </a>
                    </div>
                    <div className="swiper-slide">
                        <a href="https://energetichub.com/" target="_blank" rel="noreferrer">
                            <Image src="/clients/energetichub.png" alt="EnergeticHub" width={50} height={50} />
                            EnergeticHub
                        </a>
                    </div>
                    <div className="swiper-slide">
                        <a href="https://www.vitastudent.com/en/" target="_blank" rel="noreferrer">
                            <Image src="/clients/vitastudent.svg" alt="VitaStudent" width={49} height={50} />
                            VitaStudent
                        </a>
                    </div>
                    <div className="swiper-slide">
                        <a href="https://metime.com/" target="_blank" rel="noreferrer">
                            <Image src="/clients/metime.png" alt="MeTime" width={50} height={50} />
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
