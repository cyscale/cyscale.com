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

        if (scrolled >= 25) {
            setShowBtnTop(true);
        } else {
            setShowBtnTop(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', watchScrolling);
    }, []);

    return (
        <div>
            {showBtnTop && (
                <img
                    src={upArrow}
                    onClick={() => animateScroll.scrollToTop()}
                    className='top-40 right-0 fixed sm:hidden'
                    alt="scroll to top"
                />
            )}
        </div>
    );
};

export default ScrollToTopButton;
