import React from 'react'
import styled from 'styled-components'

import theme from '../utils/theme'

const Root = styled.div`
    ${({ spacing }) =>
        spacing &&
        `
        margin-bottom: ${theme.spacing(spacing)};
        padding-bottom: ${theme.spacing(spacing)};
    `}

    ${({ border }) =>
        border &&
        `
        border-bottom: 1px solid ${theme.palette.black10};
    `}
`

export default function Divider({ spacing = 8, border = false }) {
    return <Root spacing={spacing} border={border}></Root>
}
