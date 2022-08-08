import React, { useEffect, useRef, useState } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import useScrollTrigger from '../scrollTrigger';
import { useAppLink } from '../../common/links';
import Navigation from './Navigation';
import useToggleMenu from './useToggleMenu';

const TopNav = ({ pageName, showLogo = true }) => {
    const root = useRef();
    const trigger = useScrollTrigger();
    const [showBurgerButton, setShowBurgerButton] = useState(pageName !== 'HomePage');
    const appLink = useAppLink();
    const { menu, toggleMenuIcon } = useToggleMenu(pageName);

    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY === 0) {
                root.current.classList.remove('transparent-bg');
            } else {
                root.current.classList.add('transparent-bg');
            }
        };

        if (typeof window !== 'undefined' && root.current) {
            onScroll();
            window.addEventListener('scroll', onScroll);
        }

        return () => {
            if (typeof window !== 'undefined') {
                window.removeEventListener('scroll', onScroll);
            }
        };
    }, []);

    const data = useStaticQuery(graphql`
        query CareersQueryForMenu {
            allMarkdownRemark(
                limit: 5
                sort: { fields: frontmatter___date, order: DESC }
                filter: { frontmatter: { templateKey: { eq: "career-page" }, disabled: { eq: false } } }
            ) {
                nodes {
                    frontmatter {
                        date
                        description
                        permalink
                        title
                        experience
                    }
                }
            }
        }
    `);

    useEffect(() => {
        if (pageName === 'HomePage') {
            const timer = setTimeout(() => setShowBurgerButton(true), 500);
            return () => clearTimeout(timer);
        }
    }, [pageName]);

    let jobs = data.allMarkdownRemark.nodes;
    const rootClasses = !trigger ? 'translate-y-0' : '-translate-y-full';
    return (
        <div
            ref={root}
            style={{ maxWidth: '100vw' }}
            className={`fixed top-0 left-0 block w-full mx-auto z-20 transition duration-300 transform ${rootClasses}`}
        >
            <div className={`topNav ${menu.toggleBg} container max-w-7xl m-auto px-8 pt-2.5`}>
                <Navigation
                    pageName={pageName}
                    menu={menu}
                    showLogo={showLogo}
                    showBurgerButton={showBurgerButton}
                    toggleMenuIcon={toggleMenuIcon}
                    jobs={jobs}
                    appLink={appLink}
                />
            </div>
        </div>
    );
};

export default TopNav;
