import React from 'react';
import styled from 'styled-components';

import theme from '../../utils/theme';

const Root = styled.div`
    display: flex;
    min-height: 400px;
    position: relative;
    text-align: center;
    flex-direction: column;
    justify-content: space-between;
    padding-top: ${theme.spacing(3)};
    color: ${theme.palette.black60};
    background: ${theme.palette.white};
    border-right: 1px solid ${theme.palette.black05};
    ${({ pickCol }) => pickCol && `min-width: 25%;`}
    ${({ featured }) => featured && `box-shadow: 0 8px 16px 0 rgba(59,116,168,.2); z-index: 1;`}

    &:first-child {
        border-top-left-radius: ${theme.radius};
        border-bottom-left-radius: ${theme.radius};
    }

    &:last-child {
        border-top-right-radius: ${theme.radius};
        border-bottom-right-radius: ${theme.radius};
    }

    ${({ featured }) =>
        featured &&
        `&:before {
            left: 0;
            right: 0;
            z-index:2;
            font-weight: 600;
            margin-left: auto;
            margin-right: auto;
            position: absolute;
            text-align: center;
            content: 'Most Popular';
            height: ${theme.spacing(7 / 2)};
            width: ${theme.spacing(14)};
            top: ${theme.spacing(-7 / 4)};
            color: ${theme.palette.white};
            font-size: ${theme.fontSize(13)};
            border-radius: ${theme.radius};
            background: ${theme.palette.error};
            padding: ${theme.spacing(1 / 4)} 0;
        }
       
    `}

    @media (max-width: ${theme.bp.lg}) {
        min-height: unset;
        border-right:none;
        border-radius: ${theme.radius};
        margin-top: ${theme.spacing(8)};
        box-shadow: 0 8px 16px 0 rgba(59,116,168,.2);
        padding-bottom: 0;

         ${({ pickCol }) => pickCol && `box-shadow: none; margin-top: 0;`}
    }
`

export default function Column({ children, featured, pickCol }) {
    return (
        <Root pickCol={pickCol} featured={featured}>
            {children}
        </Root>
    )
}
