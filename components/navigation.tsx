import React, { Component, createRef, RefObject } from 'react';
import { WithTranslation, withTranslation } from 'next-i18next';
import anime from 'animejs';
import Link from './link';

type NavigationProps = WithTranslation;

type NavigationState = {
    isActiveMenu: boolean;
    menu: RefObject<HTMLDivElement>;
    nav: any | null;
};

class Sidebar extends Component<NavigationProps, NavigationState> {
    constructor(props: NavigationProps) {
        super(props);
        this.state = {
            isActiveMenu: false,
            menu: createRef<HTMLDivElement>(),
            nav: null,
        };
    }

    componentDidMount() {
        this.animate();
    }

    animate = () => {
        const nav = anime.timeline({ autoplay: false });
        const { menu } = this.state;
        if (menu.current) {
            if (window.matchMedia('(max-width: 580px)').matches) {
                nav.add({
                    targets: menu.current.children,
                    duration: 1000,
                    width: ['0', '100%'],
                    opacity: [0, 1],
                    easing: 'easeInOutBack',
                }).add(
                    {
                        targets: menu.current.children[0].children,
                        duration: 200,
                        delay: anime.stagger(50),
                        opacity: [0, 1],
                        translateX: [70, 0],
                        easing: 'easeInOutBack',
                    },
                    '-=500'
                );
            } else {
                nav.add({
                    targets: menu.current.children,
                    duration: 1000,
                    width: ['0', '100%'],
                    easing: 'easeInOutBack',
                }).add(
                    {
                        targets: menu.current.children[0].children,
                        duration: 200,
                        delay: anime.stagger(50),
                        opacity: [0, 1],
                        translateX: [70, 0],
                        easing: 'easeInOutBack',
                    },
                    '-=500'
                );
            }
        }

        this.setState({
            nav,
        });
    };

    toggleMenu = (): void => {
        const { isActiveMenu, nav } = this.state;
        const body = document.getElementsByTagName('body')[0];
        body.className = !isActiveMenu ? 'bg-triangles open-menu' : 'bg-triangles';

        this.setState({
            isActiveMenu: !isActiveMenu,
        });

        if (nav.began) {
            nav.reverse();
            nav.completed = false;
        }
        if (nav.paused) {
            nav.play();
        }
    };

    closeMenu = (): void => {
        if (window.matchMedia('(max-width: 580px)').matches) {
            this.toggleMenu();
        }
    };

    render() {
        const { t } = this.props;
        const { isActiveMenu, menu } = this.state;
        return (
            <>
                <div
                    role="button"
                    className="circle-menu"
                    onClick={this.toggleMenu}
                    onKeyDown={this.toggleMenu}
                    tabIndex={0}
                >
                    <div className={`hamburger ${isActiveMenu ? 'is-active' : ''}`}>
                        <div className="line" />
                        <div className="line" />
                        <div className="line" />
                    </div>
                </div>
                <div ref={menu} className={`inner-menu js-tabs ${isActiveMenu ? 'is-active' : ''}`}>
                    <ul className="nav">
                        <li className="nav__item">
                            <Link to="/" onClick={this.closeMenu}>
                                {t('about')}
                            </Link>
                        </li>
                        <li className="nav__item">
                            <Link to="/resume" onClick={this.closeMenu}>
                                {t('resume')}
                            </Link>
                        </li>
                        <li className="nav__item">
                            <Link to="/projects" onClick={this.closeMenu}>
                                {t('projects')}
                            </Link>
                        </li>
                        <li className="nav__item">
                            <Link to="/contact" onClick={this.closeMenu}>
                                {t('contact')}
                            </Link>
                        </li>
                    </ul>
                </div>
            </>
        );
    }
}

export default withTranslation(['navigation'])(Sidebar);
