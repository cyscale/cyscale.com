import React from 'react';
import styled from 'styled-components';

import theme from '../../utils/theme';

const Root = styled.div`
    display: flex;
    text-align: left;
    align-items: center;
    height: ${theme.spacing(7)};
    padding: 0 ${theme.spacing(2)};
    font-size: ${theme.fontSize(14)};
    border-top: 1px solid ${theme.palette.black05};
    transition-delay: ${({ order }) => `${order * 0.075}s !IMPORTANT`};
`

export default function FeatureTd({ children, isFirst, order }) {
    return (
        <Root order={order} isFirst={isFirst}>
            {children}
        </Root>
    )
}
