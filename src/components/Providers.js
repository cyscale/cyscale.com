import { filter, map } from 'lodash'
import React from 'react'
import { Col, Row, useScreenClass } from 'react-grid-system'
import styled from 'styled-components'

import theme from '../utils/theme'
import Divider from './Divider'
import PreviewCompatibleImage from './PreviewCompatibleImage'

const Provider = styled.div`
    ${({ production }) => !production && `filter: grayscale(100%);`}
    & > div {
        display: block;
        margin-top: 0;
        text-align: center;
        color: ${theme.palette.white};

        & > span {
            font-size: ${theme.fontSize(14)};
        }

        @media (max-width: ${theme.bp.md}) {
            & > span {
                font-size: ${theme.fontSize(12)};
            }
        }
    }
`
export default function Providers({ providers }) {
    const screenClass = useScreenClass()
    const filteredProviders = filter(providers, ({ production }) =>
        ['md', 'lg', 'xl'].includes(screenClass) ? true : production
    )
    return (
        <div>
            <Divider spacing={['lg', 'xl'].includes(screenClass) ? 4 : 2} />
            <Row>
                {!!providers &&
                    map(filteredProviders, ({ image, name, production }) => (
                        <Col key={name}>
                            <Provider production={production}>
                                <PreviewCompatibleImage imageInfo={image} alt={name} />
                                <div>
                                    <span>{name}</span>
                                    {!production && <small> (soon)</small>}
                                </div>
                            </Provider>
                        </Col>
                    ))}
            </Row>
        </div>
    )
}
