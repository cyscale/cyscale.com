import React, { useEffect } from 'react';
import { css } from 'twin.macro';
import { LearnMoreSection } from '../../assets/css/styles';
import LearnMoreLink from '../use-cases/LearnMoreLink';
import sal from 'sal.js';

const cardBackgroundColor = css`
    @media (max-width: 1024px) {
        background-color: #ffffff;
    }
    background-color: #f3f8ff;

    &:hover {
        @media (min-width: 1024px) {
            background-color: #ffffff;
            ${LearnMoreSection} {
                display: block;
            }
        }
    }
`;

const Card = ({ icon, title, text, link, cardHeight, cardHeightLg }) => {
    const navigate = () => {
        if (link) {
            window.location.href = link;
        }
    };

    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            navigate();
        }
    };

    useEffect(() => {
        sal({
            threshold: 0.1,
            once: false
        });
    }, []);

    return (
        <>
            <div
                onClick={navigate}
                onKeyDown={handleKeyDown}
                tabIndex='0'
                role='button'
                className={`col-span-12 lg:col-span-4 mx-auto max-w-xl lg:max-w-lg lg:mx-0 mt-4 lg:mt-0 flex flex-col justify-between p-4 rounded-md h-${cardHeight} lg:h-${cardHeightLg} xl:h-${cardHeight} ${
                    link ? 'cursor-pointer' : ''
                }`}
                css={cardBackgroundColor}
                data-sal='slide-up'
            >
                <div>
                    <img src={icon} alt='' height={40} width={40} />
                    <h2 className='font-montserrat text-base font-bold text-blue mt-3'>{title}</h2>
                    <p className='text-sm mt-4 text-gray font-hind'>{text}</p>
                </div>
                {link && (
                    <LearnMoreSection>
                        <LearnMoreLink link={link} />
                    </LearnMoreSection>
                )}
            </div>
        </>
    );
};

export default Card;
