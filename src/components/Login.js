import React from 'react'
import styled from 'styled-components'

import email from '../img/login/email.svg'
import github from '../img/login/github.png'
import google from '../img/login/google.png'
import microsoft from '../img/login/microsoft.png'
import theme from '../utils/theme'

const Provider = styled.img`
    width: ${theme.spacing(2.25)};
    height: ${theme.spacing(2.25)};

    @media (max-width: ${theme.bp.lg}) {
        width: ${theme.spacing(2)};
        height: ${theme.spacing(2)};
    }
`

const Root = styled.div`
    display: inline-flex;
    align-items: center;


    & > a {
        align-items: center;
        display: inline-flex;
        justify-content: center;
        width: ${theme.spacing(3.5)};
        height: ${theme.spacing(3.5)};
        border-radius: ${theme.radius};
        margin-right: ${theme.spacing(1)};
        background-color: ${theme.palette.white};
        transition: transform 0.1s ease-out;

        &:hover {
            transform: scale(1.1);
            transition: transform 0.1s ease-in;
        }

        &:last-child {
            margin-right: 0;
        }
    }

    & > span {
        letter-spacing: 1px;
        color: ${theme.palette.white};
        margin-right: ${theme.spacing(1)};
    }

    ${({ separator }) =>
        separator &&
        `
    padding-left: ${theme.spacing(2)};
    border-left: 1px solid ${theme.palette.white};
    `}

    ${({ cta }) =>
        cta &&
        `
    padding:${theme.spacing(3)};
    border-radius: ${theme.radius};
    background-color: ${theme.palette.link};

    & > span {
      font-weight: bold;
      font-size: ${theme.fontSize(16)};
      margin-right: ${theme.spacing(2)};
    }

    @media (max-width: ${theme.bp.md}) {
        padding: ${theme.spacing(2)};
        & > span {
            font-size: ${theme.fontSize(14)};
        }
    }
    `}

    @media (max-width: ${theme.bp.lg}) {
        & > a {
            width: ${theme.spacing(3)};
            height: ${theme.spacing(3)};
            margin-right: ${theme.spacing(1 / 2)};
        }
    }
    @media (max-width: ${theme.bp.md}) {
        & > span {
            font-size: ${theme.fontSize(12)};
        }
    }
`

const LargeLabel = styled.span`
    letter-spacing: 1px;
    color: ${theme.palette.white};
    font-size: ${theme.fontSize(14)} !important;
    margin-right: ${theme.spacing(1)};
`

export default function Login({ separator = false, cta = false, largeLabel = false }) {
    return (
        <Root separator={separator} cta={cta}>
            {largeLabel ? <LargeLabel>Sign up with</LargeLabel> : <span>Sign up with</span>}
            <a rel='noopener noreferrer' href='https://auth.cyscale.com/authorize?provider=microsoft'>
                <Provider src={microsoft} alt='Sign up with Microsoft' />
            </a>
            <a rel='noopener noreferrer' href='https://auth.cyscale.com/authorize?provider=google'>
                <Provider src={google} alt='Sign up with Google' />
            </a>
            <a rel='noopener noreferrer' href='https://auth.cyscale.com/authorize?provider=github'>
                <Provider src={github} alt='Sign up with Github' />
            </a>
            <a rel='noopener noreferrer' href='https://app.cyscale.com/#/login'>
                <Provider src={email} alt='Sign up with Email' />
            </a>
        </Root>
    )
}
