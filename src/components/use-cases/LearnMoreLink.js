import React, { useState } from 'react';
import RightArrow from '../sharedComponent/RightArrow';
import { Link } from 'gatsby';
import { css } from 'twin.macro';

const LearnMoreLink = ({ link }) => {
    const [isHover, setIsHover] = useState(false);

    return (
        <Link
            to={link}
            className='lg:mt-4'
            onMouseEnter={() => setIsHover(true)}
            onMouseLeave={() => setIsHover(false)}
        >
            <RightArrow fillColor={isHover ? '#0b175a' : '#0F26AA'} marginTop={'-0.25rem'} />
            <span
                className='text-md ml-2 inline-block font-bold text-base'
                css={css`
                    color: #0f26aa;
                    &:hover {
                        color: #0b175a;
                    }
                `}
            >
                Learn more
            </span>
        </Link>
    );
};

export default LearnMoreLink;
