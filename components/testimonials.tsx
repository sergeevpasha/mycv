import React, { createRef, useEffect } from 'react';
import { WithTranslation, withTranslation } from 'next-i18next/pages';
import type Swiper from 'swiper';

type TestimonialsProps = WithTranslation;

function Testimonials(props: TestimonialsProps) {
    const { t } = props;
    const carousel = createRef<HTMLDivElement>();
    useEffect(() => {
        // Swiper is loaded after hydration to keep it off the critical path; CSS pre-sizes the slides
        let swiper: Swiper | undefined;
        let cancelled = false;
        import('../utils/carousel').then(({ default: createCarousel }) => {
            if (cancelled) return;
            swiper = createCarousel('.js-carousel-review', {
                slidesPerView: 1,
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
                    1200: {
                        slidesPerView: 2,
                        spaceBetween: 30,
                    },
                },
            });
        });
        return () => {
            cancelled = true;
            swiper?.destroy();
        };
    }, []);
    return (
        <div className="box-inner box-inner--white">
            <h2 className="title title--h3">{t('testimonials')}</h2>
            <div className="swiper-container js-carousel-review" ref={carousel}>
                <div className="swiper-wrapper">
                    <div className="swiper-slide review-item">
                        <svg className="avatar avatar--80" viewBox="0 0 84 84">
                            <g className="avatar__hexagon">
                                <image xlinkHref="/images/pavelTsymbal.jpeg" height="100%" width="100%" />
                            </g>
                        </svg>
                        <a
                            className="social__link ml-2"
                            href="https://www.linkedin.com/in/pavel-tsymbal-63a101143/"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <h3 className="d-flex align-items-center title title--h5">{t('firstReviewerName')}</h3>
                        </a>
                        <p className="review-item__caption">{t('firstReviewerText')}</p>
                    </div>
                    <div className="swiper-slide review-item">
                        <svg className="avatar avatar--80" viewBox="0 0 84 84">
                            <g className="avatar__hexagon">
                                <image xlinkHref="/images/vladislavPanfilov.jpeg" height="100%" width="100%" />
                            </g>
                        </svg>
                        <a
                            className="social__link ml-2"
                            href="https://www.linkedin.com/in/halfbottleofmind/"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <h3 className="d-flex align-items-center title title--h5">{t('secondReviewerName')}</h3>
                        </a>
                        <p className="review-item__caption">{t('secondReviewerText')}</p>
                    </div>
                    <div className="swiper-slide review-item">
                        <svg className="avatar avatar--80" viewBox="0 0 84 84">
                            <g className="avatar__hexagon">
                                <image xlinkHref="/images/sergeyLemeshev.jpeg" height="100%" width="100%" />
                            </g>
                        </svg>
                        <a
                            className="social__link ml-2"
                            href="https://www.linkedin.com/in/sergey-lemeshev-82256b76/"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <h3 className="d-flex align-items-center title title--h5">{t('thirdReviewerName')}</h3>
                        </a>
                        <p className="review-item__caption">{t('thirdReviewerText')}</p>
                    </div>
                </div>
                <div className="swiper-pagination" />
            </div>
        </div>
    );
}

export default withTranslation(['testimonials'])(Testimonials);
