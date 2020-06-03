import { map } from 'lodash'
import React from 'react'
import { Col, Container, Row } from 'react-grid-system'
import styled from 'styled-components'

import theme from '../utils/theme'
import { Anchor } from './Anchor'
import Divider from './Divider'
import PreviewCompatibleImage from './PreviewCompatibleImage'

const Root = styled.div``

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
                <Divider spacing={10} />
                {map(sections, ({ image, title, text, cta }, key) => (
                    <React.Fragment key={key}>
                        {key > 0 && <Divider spacing={8} />}
                        <Row
                            align='center'
                            component='section'
                            name={`section-${key + 1}`}
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
                                <PreviewCompatibleImage imageInfo={image} />
                            </Col>
                        </Row>
                    </React.Fragment>
                ))}
                <Divider spacing={8} />
            </Container>
        </Root>
    )
}
