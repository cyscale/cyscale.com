import React, { useEffect, useRef, useState } from 'react';
import useScrollTrigger from '../../scrollTrigger';
import { useAppLink } from '../../../common/links';
import { css } from 'twin.macro';

import NewNavigation from './NewNavigation';
import useMediaQuery from './useMediaQuery';

const paddingNav = css`
    padding-left: 2rem;
    padding-right: 2rem;
    @media (min-width: 1536px) {
        padding-left: 10rem;
        padding-right: 10rem;
    }
`;

const NewTopNav = ({ pageName, showLogo = true }) => {
    const root = useRef();
    const trigger = useScrollTrigger();
    const isDesktop = useMediaQuery('(min-width: 1280px)');
    const [showBurgerButton, setShowBurgerButton] = useState(pageName !== 'HomePage');
    const appLink = useAppLink();

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

    useEffect(() => {
        if (pageName === 'HomePage') {
            const timer = setTimeout(() => setShowBurgerButton(true), 500);
            return () => clearTimeout(timer);
        }
    }, [pageName]);

    const rootClasses = !trigger ? 'translate-y-0' : '-translate-y-full';

    return (
        <div
            ref={root}
            style={{ maxWidth: '100vw' }}
            className={`fixed top-0 left-0 block w-full mx-auto z-20 transition duration-300 transform ${rootClasses}`}
        >
            {isDesktop && (
                <div tw='container max-w-7xl mx-auto pt-2.5' css={paddingNav} id='mariko'>
                    <NewNavigation pageName={pageName} showLogo={showLogo} appLink={appLink} classes={false} />
                </div>
            )}
        </div>
    );
};

export default NewTopNav;
