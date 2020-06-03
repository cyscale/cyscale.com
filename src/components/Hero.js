import React from 'react'
import { Col, Container, Row } from 'react-grid-system'
import { Link as ScrollLink } from 'react-scroll'
import styled, { keyframes } from 'styled-components'

import theme from '../utils/theme'
import { Link } from './Anchor'
import Divider from './Divider'
import PreviewCompatibleImage from './PreviewCompatibleImage'

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
    left: 50%;
    color: ${theme.palette.white};
    position: absolute;
    display: inline-block;
    bottom: ${theme.spacing(2)};
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
    font-size: ${theme.fontSize(64)};
`

const Description = styled.p`
    margin-top: ${theme.spacing(1)};
    margin-bottom: ${theme.spacing(5)};
`

const Small = styled.small`
    display: block;
    margin-top: ${theme.spacing(1)};
    font-size: ${theme.fontSize(14)};
`

const Mockup = styled(PreviewCompatibleImage)`
    border: 2px solid ${theme.palette.white};
    border-radius: ${theme.radius};
`

export default function Hero({ image, title, cta, heading, subheading, scroll = true }) {
    return (
        <Root>
            <Container>
                <Divider spacing={6} />
                <Row>
                    <Col>
                        <H1>{title}</H1>
                        <Description>{heading}</Description>
                        <Link contained to={cta.link}>
                            {cta.label}
                        </Link>
                        <Small>{subheading}</Small>
                    </Col>
                    <Col>
                        <Mockup imageInfo={image} />
                    </Col>
                </Row>
                <Divider spacing={12} />
            </Container>
            {scroll && (
                <Scroll to='content' smooth={true} duration={500}>
                    <span></span>
                </Scroll>
            )}
        </Root>
    )
}
