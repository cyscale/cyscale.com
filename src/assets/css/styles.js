import { css } from 'twin.macro';

export const heroHeight = css`
    @media (min-width: 720px) and (max-width: 1280px) {
        min-height: calc(100vh - 11.5rem);
    }

    @media (min-width: 1280px) {
        min-height: calc(100vh - 18.75rem);
    }
`;
