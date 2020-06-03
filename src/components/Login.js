import React from 'react'
import styled from 'styled-components'

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

    ${({ separator }) =>
        separator &&
        `
        padding-left: ${theme.spacing(2)};
        border-left: 1px solid ${theme.palette.white};
    `}

    ${({ cta }) =>
        cta &&
        `
        border-radius: 100em;
        padding:${theme.spacing(1)};
        background-color: ${theme.palette.primary};

        & > span {
          font-weight: bold;
          margin-left: ${theme.spacing(1)};
        }
    `}

    & > a {
        align-items: center;
        border-radius: 100em;
        display: inline-flex;
        justify-content: center;
        padding: ${theme.spacing(1.314)};
        margin-right: ${theme.spacing(1)};
        background-color: ${theme.palette.white};

        &:last-child {
            margin-right: 0;
        }
    }

    & > span {
        color: ${theme.palette.white};
        font-size: ${theme.fontSize(14)};
        margin-right: ${theme.spacing(2)};
    }

    @media (max-width: ${theme.bp.lg}) {
        & > a {
            padding: ${theme.spacing(1)};
            margin-right: ${theme.spacing(1 / 2)};
        }
    }
`

export default function Login({ separator = false, cta = false }) {
    return (
        <Root separator={separator} cta={cta}>
            <span>Signup with</span>
            <a rel='noopener noreferrer' href='https://app.cyscale.com/#/login'>
                <Provider src={microsoft} alt='Signup with Microsoft' />
            </a>
            <a rel='noopener noreferrer' href='https://app.cyscale.com/#/login'>
                <Provider src={google} alt='Signup with Google' />
            </a>
            <a rel='noopener noreferrer' href='https://app.cyscale.com/#/login'>
                <Provider src={github} alt='Signup with Github' />
            </a>
        </Root>
    )
}
