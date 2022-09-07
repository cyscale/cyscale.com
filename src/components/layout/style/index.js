import React from 'react';
import { css } from 'twin.macro';
import styled from '@emotion/styled';

export const fontNavLinkStyle = css`
    font-size: 1rem;
    line-height: 1.25rem;
    font-weight: 400;
    transition: 0.16s;
    border-left: 0.188rem solid transparent;
    &:hover {
        font-weight: 500;
        color: #0f26aa;
        background-color: rgb(232, 238, 248, 0.3);
        border-left: 0.188rem solid #0f26aa;
    }
`;

export const montserratFontStyle = css`
    font-family: 'Montserrat', sans-serif;
`;

export const sectionTitleColorStyle = css`
    color: #079bee;
`;

export const descriptionColorStyle = css`
    color: #606060;
`;

export const borderBottomItemNavStyle = css`
    border-bottom: 1px solid #e2e2e2;
`;

export const paddingLeftStyle = css`
    padding-left: 0.688rem;
`;

export const hoverButtonColorStyle = css`
    &:hover {
        background-color: rgba(30, 64, 175, 1);
    }
`;

export const widthFitStyle = css`
    width: fit-content;
`;

export const logoStyle = css`
    width: 11rem;
    height: 2.534rem;

    @media (max-width: 480px) {
        width: 7.813rem;
        height: 'auto';
    }
`;

export const HeaderLogo = styled.img`
    ${logoStyle}
`;
