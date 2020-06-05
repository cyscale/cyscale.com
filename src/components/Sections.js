import { map } from 'lodash'
import React from 'react'
import { Col, Container, Row, useScreenClass } from 'react-grid-system'
import styled from 'styled-components'

import theme from '../utils/theme'
import { Link } from './Anchor'
import Divider from './Divider'
import PreviewCompatibleImage from './PreviewCompatibleImage'

const Root = styled.div``

const Heading = styled.h1`
    margin-top: 0;
`

const CTA = styled(Link)`
    margin-top: ${theme.spacing(2)};
`

export default function Sections({ sections }) {
    const screenClass = useScreenClass()
    return (
        <Root>
            <Container>
                <Divider spacing={['xl', 'lg', 'md'].includes(screenClass) ? 6 : 2} />
                {map(sections, ({ image, title, text, cta }, key) => (
                    <React.Fragment key={key}>
                        {key > 0 && <Divider spacing={8} border={!['xl', 'lg', 'md'].includes(screenClass)} />}
                        <Row
                            align='center'
                            component='section'
                            name={`section-${key + 1}`}
                            style={{
                                flexDirection: ['xl', 'lg', 'md'].includes(screenClass)
                                    ? (key + 1) % 2
                                        ? 'row'
                                        : 'row-reverse'
                                    : 'column-reverse',
                            }}
                        >
                            <Col md={6} sm={12}>
                                <Heading>{title}</Heading>
                                <p>{text}</p>
                                {cta && (
                                    <CTA contained to={cta.link}>
                                        {cta.label}
                                    </CTA>
                                )}
                            </Col>
                            {!['xl', 'lg', 'md'].includes(screenClass) && (
                                <Col md={12}>
                                    <Divider spacing={2} />
                                </Col>
                            )}
                            <Col md={6} sm={12}>
                                <PreviewCompatibleImage imageInfo={image} />
                            </Col>
                        </Row>
                    </React.Fragment>
                ))}
                <Divider spacing={8} border={!['xl', 'lg', 'md'].includes(screenClass)} />
            </Container>
        </Root>
    )
}
