import Image from 'gatsby-image'
import { map } from 'lodash'
import React from 'react'
import { Col, Container, Row } from 'react-grid-system'
import styled from 'styled-components'

import theme from '../utils/theme'
import { Anchor } from './Anchor'

const Root = styled.div``

const Content = styled(Row)`
    margin-top: ${theme.spacing(20)};
    margin-bottom: ${theme.spacing(20)};
`

const Heading = styled.h1`
    margin-top: 0;
`

const CTA = styled(Anchor)`
    margin-top: ${theme.spacing(2)};
`

export default function Sections({ sections }) {
    return (
        <Root>
            <Container>
                {map(sections, ({ image, title, text, cta }, key) => (
                    <Content
                        key={key}
                        component='section'
                        align='center'
                        style={{ flexDirection: (key + 1) % 2 ? 'row' : 'row-reverse' }}
                    >
                        <Col md={5}>
                            <Heading>{title}</Heading>
                            <p>{text}</p>
                            {cta && (
                                <CTA contained href={cta.link}>
                                    {cta.label}
                                </CTA>
                            )}
                        </Col>
                        <Col md={2}></Col>
                        <Col md={5}>
                            <Image fluid={image.childImageSharp.fluid} />
                        </Col>
                    </Content>
                ))}
            </Container>
        </Root>
    )
}
