import { Link } from 'gatsby'
import React from 'react'
import styled from 'styled-components'

import Divider from '../components/Divider'
import road from '../img/hit-the-road.svg'
import theme from '../utils/theme'

const Root = styled.main`
    text-align: center;
    height: 100vh;
`

const Road = styled.img`
    max-width: 30vw;
`

const Title = styled.h1`
    margin: 0;
    font-weight: bold;
    font-size: ${theme.fontSize(128)};
    letter-spacing: ${theme.spacing(4)};
`

const NotFoundPage = () => (
    <Root>
        <Divider spacing={6} />
        <Title>404</Title>
        <p>
            You just hit the <strong>404 Route</strong> that doesn't exist... Go
            <Link to='/'>
                <strong> Home </strong>
            </Link>
            instead.
        </p>
        <Divider spacing={6} />
        <Road src={road} />
    </Root>
)

export default NotFoundPage
