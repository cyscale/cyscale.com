import React from 'react';
import tw, { css } from 'twin.macro';
import CyscaleLoading from '../../assets/images/logo-new-symbol-main.svg';

const loaderWrapper = css`
    z-index: 10;
    width: 100%;
    height: 100%;
    min-width: 80px;
    max-height: 240px;
    overflow: hidden;
    position: relative;
`;

const logo = css`
    position: absolute;
    transform: translate(-50%, -50%);
    top: 50%;
    left: 50%;
    width: 32px;
`;

const loader = css`
    display: block;
    position: absolute;
    left: 50%;
    top: 50%;
    width: 80px;
    height: 80px;
    margin: -40px 0 0 -40px;
    border-radius: 50%;
    border: 2px solid transparent;
    border-top-color: #ff4a56;
    z-index: 11;
    ${tw`animate-spin-loader`}

    &::before,
    &::after {
        content: '';
        position: absolute;
        border-radius: 50%;
        border: 2px solid transparent;
        ${tw`animate-spin-reverse`}
    }
    &::before {
        top: 3px;
        left: 3px;
        right: 3px;
        bottom: 3px;
        opacity: 0.6;
        border-top-color: #0f26aa;
        ${tw`animate-spin-reverse`}
    }
    &::after {
        top: 9px;
        left: 9px;
        right: 9px;
        bottom: 9px;
        opacity: 0.3;
        border-top-color: #ff4a56;
        ${tw`animate-spin-loader-after`}
    }
`;

const overlay = css`
    top: 50%;
    left: 50%;
    min-width: 100px;
    min-height: 100px;
    position: fixed;
    transform: translate(-50%, -50%);
`;

function Loader() {
    return (
        <div css={[overlay, loaderWrapper]}>
            <div css={[loader]} />
            <img src={CyscaleLoading} alt='loader' css={[logo]} />
        </div>
    );
}

export default Loader;
