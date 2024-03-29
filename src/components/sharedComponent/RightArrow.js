import React from 'react';
import { css } from 'twin.macro';

const RightArrow = ({ fillColor, marginTop }) => {
    return (
        <svg
            width='18'
            height='18'
            viewBox='0 0 18 18'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
            className='w-5 inline-block'
            css={[
                css`
                    margin-top: ${marginTop};
                `
            ]}
        >
            <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M5.67325 3.14298C6.11259 2.70364 6.8249 2.70364 7.26424 3.14298L12.3267 8.20548C12.7661 8.64482 12.7661 9.35713 12.3267 9.79647L7.26424 14.859C6.8249 15.2983 6.11259 15.2983 5.67325 14.859C5.23392 14.4196 5.23392 13.7073 5.67325 13.268L9.94026 9.00098L5.67325 4.73397C5.23392 4.29463 5.23392 3.58232 5.67325 3.14298Z'
                fill={fillColor}
            />
        </svg>
    );
};

export default RightArrow;
