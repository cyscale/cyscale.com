import React from 'react';
import { css } from 'twin.macro';
import LearnMoreLink from '../use-cases/LearnMoreLink';

const cardBackground = css`
    background-image: linear-gradient(#e4edfc, #fff);
`;

const cardTitle = css`
    font-size: 0.875rem;
`;

const GradientCard = ({ icon, title, text, link }) => {
    return (
        <div
            className='mt-12 lg:mt-0 rounded-xl pt-4 px-4 max-w-xl lg:max-w-2xl mx-auto lg:mr-0 lg:ml-auto relative'
            css={cardBackground}
        >
            <img src={icon} alt='' />
            <h2 className='text-base font-semibold font-montserrat text-blue mt-4'>{title}</h2>
            <p className='mt-4 font-hind' css={cardTitle}>
                {text}
            </p>
            <div className={'mt-4'}>
                <LearnMoreLink link={link} />
            </div>
        </div>
    );
};

export default GradientCard;
