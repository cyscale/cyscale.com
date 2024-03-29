import React, { useState, useEffect } from 'react';
import { animateScroll } from 'react-scroll';
import upArrow from '../../assets/images/up-arrow-shadow.svg';

const ScrollToTopButton = () => {
    const [showBtnTop, setShowBtnTop] = useState(false);

    const watchScrolling = () => {
        const { scrollHeight, clientHeight, scrollTop } = document.documentElement;
        const winScroll = document.body.scrollTop || scrollTop;
        const winHeight = scrollHeight - clientHeight;
        const scrolled = (winScroll / winHeight) * 100;
        const firstFold = (clientHeight * 100) / scrollHeight;

        if (scrolled >= firstFold) {
            setShowBtnTop(true);
        } else {
            setShowBtnTop(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', watchScrolling);

        return () => window.removeEventListener('scroll', watchScrolling);
    }, []);

    return (
        <div>
            {showBtnTop && (
                <img
                    src={upArrow}
                    role='presentation'
                    tabIndex='-1'
                    onKeyDown={() => {}}
                    onClick={() => animateScroll.scrollToTop()}
                    className='top-52 right-0 fixed sm:hidden z-20'
                    alt='scroll to top'
                />
            )}
        </div>
    );
};

export default ScrollToTopButton;
