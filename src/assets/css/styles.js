import { css } from 'twin.macro';
import styled from '@emotion/styled';

export const heroHeight = css`
    @media (min-width: 720px) and (max-width: 1280px) {
        min-height: calc(100vh - 11.5rem);
    }

    @media (min-width: 1280px) {
        min-height: calc(100vh - 18.75rem);
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
