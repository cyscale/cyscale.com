import React from 'react';
import tw, { css } from 'twin.macro';
import CyscaleLoadingLogo from '../../assets/images/logo-new-symbol-main.svg';

const loaderWrapper = css`
    z-index: 10;
    width: 100%;
    height: 100%;
    min-width: 5rem;
    max-height: 15rem;
    overflow: hidden;
    position: relative;
`;

const logo = css`
    position: absolute;
    transform: translate(-50%, -50%);
    top: 50%;
    left: 50%;
    width: 2rem;
`;

const loader = css`
    display: block;
    position: absolute;
    left: 50%;
    top: 50%;
    width: 5rem;
    height: 5rem;
    margin: -2.5rem 0 0 -2.5rem;
    border-radius: 50%;
    border: 0.125rem solid transparent;
    border-top-color: #ff4a56;
    z-index: 11;
    ${tw`animate-spin-loader`}

    &::before,
  &::after {
        content: '';
        position: absolute;
        border-radius: 50%;
        border: 0.125rem solid transparent;
        ${tw`animate-spin-reverse`}
    }
    &::before {
        top: 0.188rem;
        left: 0.188rem;
        right: 0.188rem;
        bottom: 0.188rem;
        opacity: 0.6;
        border-top-color: #0f26aa;
        ${tw`animate-spin-reverse`}
    }
    &::after {
        top: 0.563rem;
        left: 0.563rem;
        right: 0.563rem;
        bottom: 0.563rem;
        opacity: 0.3;
        border-top-color: #ff4a56;
        ${tw`animate-spin-loader-after`}
    }
`;

const overlay = css`
    top: 50%;
    left: 50%;
    min-width: 6.25rem;
    min-height: 6.25rem;
    position: fixed;
    transform: translate(-50%, -50%);
`;

function Loader() {
    return (
        <div css={[overlay, loaderWrapper]}>
            <div css={loader} />
            <img src={CyscaleLoadingLogo} alt='loader' css={logo} />
        </div>
    );
}

export default Loader;
