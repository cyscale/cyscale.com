import React from 'react';
import { Global } from '@emotion/react';
import tw, { css } from 'twin.macro';

const CustomPagesStyles = () => {
    return (
        <Global
            styles={css`
                [data-cms='heading-one'] {
                    ${tw`text-left text-blue text-4xl lg:text-5xl leading-normal lg:leading-normal mb-16 font-montserrat`}
                }
                [data-cms='heading-one-cta'] {
                    ${tw`text-center px-2 mt-4 mb-2 font-montserrat font-semibold`}
                }
                [data-cms='heading-two-subtitle'] {
                    ${tw`font-bold text-primary leading-normal font-montserrat lg:mt-3`}
                }
            `}
        />
    );
};

export default CustomPagesStyles;
