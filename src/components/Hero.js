import { lowerCase, map, split } from 'lodash'
import React from 'react'
import { Col, Container, Row, useScreenClass } from 'react-grid-system'
import { Link as ScrollLink } from 'react-scroll'
import styled, { keyframes } from 'styled-components'

import theme from '../utils/theme'
import Divider from './Divider'
import Login from './Login'
import PreviewCompatibleImage from './PreviewCompatibleImage'
import Providers from './Providers'

const pulse = keyframes`
0% {
  opacity: 0;
}
30% {
  opacity: 1;
}
60% {
  box-shadow: 0 0 0 ${theme.spacing(5)} rgba(255, 255, 255, 0.1);
  opacity: 0;
}
100% {
  opacity: 0;
}
`

const Scroll = styled(ScrollLink)`
    z-index: 2;
    left: 50%;
    color: ${theme.palette.white};
    position: absolute;
    display: inline-block;
    bottom: ${theme.spacing(3)};
    transform: translateX(-50%);
    padding-top: ${theme.spacing(8)};

    &:hover {
        opacity: 0.5;
        transition: opacity 0.2s ease-in;
    }

    & > span {
        top: 0;
        left: 50%;
        position: absolute;
        border-radius: 100%;
        box-sizing: border-box;
        width: ${theme.spacing(5)};
        height: ${theme.spacing(5)};
        margin-left: -${theme.spacing(5) / 2};
        border: 1px solid ${theme.palette.white};
    }

    & > span::after {
        top: 50%;
        left: 50%;
        content: '';
        position: absolute;
        margin: -12px 0 0 -8px;
        box-sizing: border-box;
        transform: rotate(-45deg);
        width: ${theme.spacing(2)};
        height: ${theme.spacing(2)};
        border-left: 1px solid ${theme.palette.white};
        border-bottom: 1px solid ${theme.palette.white};
    }

    & > span::before {
        top: 0;
        left: 0;
        opacity: 0;
        z-index: -1;
        content: '';
        position: absolute;
        border-radius: 100%;
        box-sizing: border-box;
        width: ${theme.spacing(5)};
        height: ${theme.spacing(5)};
        animation: ${pulse} 3s infinite;
        box-shadow: 0 0 0 0 rgba(255, 255, 255, 0.1);
    }
`

const Root = styled.section`
    position: relative;
    color: ${theme.palette.white};
    background: ${theme.palette.deepOcean};
`

const H1 = styled.h1`
    margin: 0;
    color: ${theme.palette.white};
    font-size: ${theme.fontSize(56)};
    font-weight: normal;

    & > strong {
        font-weight: bold;
    }
    @media (max-width: ${theme.bp.xl}) {
        font-size: ${theme.fontSize(48)};
    }

    @media (max-width: ${theme.bp.lg}) {
        font-size: ${theme.fontSize(36)};
    }
`

const Description = styled.p`
    margin: 0;
`

const Small = styled.p`
    display: block;
    margin-top: ${theme.spacing(2)};
    // font-size: ${theme.fontSize(14)};
`

const Mockup = styled(PreviewCompatibleImage)`
    border: 2px solid ${theme.palette.white};
    border-radius: ${theme.radius};
`

export default function Hero({ image, title, cta, heading, providers, subheading, scroll = true }) {
    const screenClass = useScreenClass()
    const titleWords = split(title, ' ')
    return (
        <Root>
            <Container>
                <Divider spacing={['xl', 'lg'].includes(screenClass) ? 3 : 2} />
                <Row>
                    <Col xl={5} lg={6} md={12}>
                        <H1>
                            {map(titleWords, (word) =>
                                lowerCase(word) === 'protect' ? <strong>{word} </strong> : `${word} `
                            )}
                        </H1>
                        <Divider spacing={2} />
                        <Description>{heading}</Description>
                        <Divider spacing={3} />
                        <Login cta />
                        <Small>{subheading}</Small>
                    </Col>
                    {!['xl', 'lg'].includes(screenClass) && (
                        <Col md={12}>
                            <Divider spacing={2} />
                        </Col>
                    )}
                    <Col xl={7} lg={6} md={12}>
                        <Mockup imageInfo={image} />
                    </Col>
                </Row>
                {providers && <Providers providers={providers} />}
                <Divider spacing={['xl', 'lg'].includes(screenClass) ? 8 : 2} />
            </Container>
            {['xl', 'lg'].includes(screenClass) && scroll && (
                <Scroll to='content' smooth={true} duration={500}>
                    <span></span>
                </Scroll>
            )}
            {!['xl', 'lg'].includes(screenClass) && <Divider spacing={6} />}
            <div class='custom-shape-divider-bottom-1591349939'>
                <svg
                    data-name='Layer 1'
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 1200 120'
                    preserveAspectRatio='none'
                >
                    <path
                        d='M0 0v46.29c47.79 22.2 103.59 32.17 158 28 70.36-5.37 136.33-33.31 206.8-37.5 73.84-4.36 147.54 16.88 218.2 35.26 69.27 18 138.3 24.88 209.4 13.08 36.15-6 69.85-17.84 104.45-29.34C989.49 25 1113-14.29 1200 52.47V0z'
                        opacity='.25'
                        class='shape-fill'
                    ></path>
                    <path
                        d='M0 0v15.81c13 21.11 27.64 41.05 47.69 56.24C99.41 111.27 165 111 224.58 91.58c31.15-10.15 60.09-26.07 89.67-39.8 40.92-19 84.73-46 130.83-49.67 36.26-2.85 70.9 9.42 98.6 31.56 31.77 25.39 62.32 62 103.63 73 40.44 10.79 81.35-6.69 119.13-24.28s75.16-39 116.92-43.05c59.73-5.85 113.28 22.88 168.9 38.84 30.2 8.66 59 6.17 87.09-7.5 22.43-10.89 48-26.93 60.65-49.24V0z'
                        opacity='.5'
                        class='shape-fill'
                    ></path>
                    <path
                        d='M0 0v5.63C149.93 59 314.09 71.32 475.83 42.57c43-7.64 84.23-20.12 127.61-26.46 59-8.63 112.48 12.24 165.56 35.4C827.93 77.22 886 95.24 951.2 90c86.53-7 172.46-45.71 248.8-84.81V0z'
                        class='shape-fill'
                    ></path>
                </svg>
            </div>
        </Root>
    )
}
