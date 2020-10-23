import React from 'react';
import styled from 'styled-components';

import theme from '../utils/theme';

const Label = styled.label`
    width: 48px;
    height: 24px;
    display: block;
    cursor: pointer;
    position: relative;
    border-radius: 100em;
    text-indent: -9999px;
    border: 1px solid ${theme.palette.primary};
    &::after {
        content: '';
        top: 1px;
        left: 1px;
        width: 20px;
        height: 20px;
        display: block;
        position: absolute;
        border-radius: 100em;
        transition: all 0.2s ease-in;
        background: ${theme.palette.primary};
    }
    &:active::after {
        width: 32px;
    }
`

const HiddenInput = styled.input`
    width: 0;
    height: 0;
    visibility: hidden;
    &:checked + label::after {
        left: calc(100% - 1px);
        transform: translateX(-100%);
    }
`

export const Switch = ({checked, onChange }) => {
    return (
        <>
            <HiddenInput checked={checked} onChange={onChange} type='checkbox' id='switch' />
            <Label for='switch'>Toggle</Label>
        </>
    )
}
