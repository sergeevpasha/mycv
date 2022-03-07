import React, { useRef } from 'react';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { withTranslation, WithTranslation } from 'next-i18next';
import emailjs from '@emailjs/browser';
import { PageProps } from '../types';
import SimpleMap from '../components/map';

export const getStaticProps = async ({ locale }: PageProps) => ({
    props: {
        locale,
        ...(await serverSideTranslations(locale)),
    },
});

type ContactProps = WithTranslation;

function Contact(props: ContactProps) {
    const { t } = props;
    const form = useRef<HTMLFormElement>(null);
    const valid = useRef<HTMLDivElement>(null);

    emailjs.init('6sTy98Mn5vPyUzWWY');

    function sendEmail(event: React.FormEvent<HTMLFormElement>): void {
        event.preventDefault();
        emailjs.sendForm('gmail_cv_servervice', 'template_cv', form.current || '', '6sTy98Mn5vPyUzWWY').then(
            () => {
                if (valid.current) {
                    valid.current.className = 'validation-success';
                    valid.current.innerHTML = 'Thanks! Your message has been sent.';
                }
                if (form.current) form.current.reset();
            },
            () => {
                if (valid.current) {
                    valid.current.className = 'validation-danger';
                    valid.current.innerHTML = 'Please fill in the form...!';
                }
            }
        );
    }

    return (
        <div id="contact-tab" className="tabcontent">
            <div className="pb-2">
                <h1 className="title title--h1 first-title title__separate">{t('contact')}</h1>
            </div>
            <SimpleMap />
            <h2 className="title title--h3">{t('contactForm')}</h2>
            <form id="contact-form" ref={form} className="contact-form" onSubmit={sendEmail}>
                <div className="row">
                    <div className="form-group col-12 col-md-6">
                        <i className="font-icon icon-user" />
                        <input
                            type="text"
                            className="input input__icon form-control"
                            placeholder={t('fullName')}
                            required
                            name="full_name"
                        />
                        <div className="help-block with-errors" />
                    </div>
                    <div className="form-group col-12 col-md-6">
                        <i className="font-icon icon-envelope" />
                        <input
                            type="email"
                            className="input input__icon form-control"
                            placeholder={t('emailAddress')}
                            required
                            name="email"
                        />
                        <div className="help-block with-errors" />
                    </div>
                    <div className="form-group col-12 col-md-12">
                        <textarea
                            className="textarea form-control"
                            placeholder={t('yourMessage')}
                            rows={4}
                            required
                            name="message"
                        />
                        <div className="help-block with-errors" />
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 col-md-6 order-2 order-md-1 text-center text-md-left">
                        <div id="validator-contact" ref={valid} className="hidden" />
                    </div>
                    <div className="col-12 col-md-6 order-1 order-md-2 text-right">
                        <button type="submit" className="btn">
                            <i className="font-icon icon-send" /> {t('sendMessage')}
                        </button>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default withTranslation(['contact'])(Contact);
