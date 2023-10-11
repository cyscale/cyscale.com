import tw, { css } from 'twin.macro';
import styled from '@emotion/styled';

export const heroHeight = css`
    @media (min-width: 720px) and (max-width: 1280px) {
        min-height: calc(100vh - 7.5rem);
    }

    @media (min-width: 1280px) {
        min-height: calc(100vh - 15.75rem);
    }
`;

export const titleSection = css`
    font-size: 1.75rem;
    line-height: 2.188rem;
`;

export const heroTitleFontSize = css`
    @media (max-width: 768px) {
        font-size: 1.75rem;
    }
    font-size: 2rem;
`;

export const LearnMoreSection = styled.div`
    display: block;

    @media (min-width: 1024px) {
        display: none;
    }
`;

export const cardBackgroundColor = css`
    @media (max-width: 1024px) {
        background-color: #f3f8ff;
    }
    background-color: #ffffff;

    &:hover {
        @media (min-width: 1024px) {
            background-color: #f3f8ff;
            ${LearnMoreSection} {
                display: block;
            }
        }
    }
`;

export const ctaTransition = css`
    transition: all 0.25s ease-in-out 0s;
`;

export const hrStyle = css`
    color: #e3e3e3;
    width: 13.5rem;
`;

export const Subtitle = tw.h2`text-xl font-bold font-montserrat mt-12 lg:mt-14`;

export const subtitleColor = css`
    color: #1d2639;
`;

export const textColor = css`
    color: #363e4f;
`;
