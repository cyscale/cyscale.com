import React, { useEffect } from 'react';
import { css } from 'twin.macro';
import { LearnMoreSection } from '../../assets/css/styles';
import LearnMoreLink from '../use-cases/LearnMoreLink';
import { Link } from 'gatsby';
import AOS from 'aos';

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
    useEffect(() => {
        AOS.init({
            disable: function () {
                const windowWidth = document.documentElement.clientWidth;
                return windowWidth < 1280;
            }
        });
    }, []);

    return (
        <>
            {link ? (
                <Link
                    to={link}
                    className={`col-span-12 lg:col-span-3 mx-auto max-w-xl lg:max-w-lg lg:mx-0 mt-4 lg:mt-0 flex flex-col justify-between p-4 rounded-md h-${cardHeight} lg:h-${cardHeightLg} xl:h-${cardHeight}`}
                    css={cardBackgroundColor}
                    data-aos='fade-up'
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
                </Link>
            ) : (
                <div
                    className={`col-span-12 lg:col-span-3 mx-auto max-w-xl lg:max-w-lg lg:mx-0 mt-4 lg:mt-0 flex flex-col justify-between p-4 rounded-md h-${cardHeight} lg:h-${cardHeightLg} xl:h-${cardHeight}`}
                    css={cardBackgroundColor}
                    data-aos='fade-up'
                >
                    <div>
                        <img src={icon} alt='' height={40} width={40} />
                        <h2 className='font-montserrat text-base font-bold text-blue mt-3'>{title}</h2>
                        <p className='text-sm mt-4 text-gray font-hind'>{text}</p>
                    </div>
                </div>
            )}
        </>
    );
};

export default Card;
