import React, { useEffect, useState } from 'react'
import OutsideClickHandler from 'react-outside-click-handler'
import styled from 'styled-components'

import theme from '../utils/theme'

const Root = styled.div`
    position: relative;
`

const Toggler = styled.div`
    cursor: pointer;
    display: inline-block;
`

const Drawer = styled.div`
    right: 0;
    display: flex;
    position: absolute;
    flex-direction: column;
    align-items: flex-start;
    top: ${theme.spacing(5)};
    backdrop-filter: blur(4px);
    padding: ${theme.spacing(2)};
    border-radius: ${theme.radius};
    background: rgba(0, 0, 0, 0.75);
    
    & > * {
        margin-bottom: ${theme.spacing(1 / 2)};
        margin-right: 0;
        width: fit-content;
        white-space: nowrap;
        &:last-child {
            margin-bottom: 0;
        }
    }
`

export default function Dropdown({ button, children, isOpen, onClick: parentOnClick, onClose: parentOnClose }) {
    const [open, setOpen] = useState(isOpen)

    useEffect(() => {
        setOpen(!!isOpen)
    }, [isOpen])

    const onClick = () => {
        setOpen(!open)
        parentOnClick && parentOnClick(!open)
    }
    const onClose = () => {
        setOpen(false)
        parentOnClose && parentOnClose(false)
    }

    return (
        <Root>
            <OutsideClickHandler onOutsideClick={onClose}>
                <Toggler onClick={onClick}>{React.cloneElement(button)}</Toggler>
                {open && <Drawer>{children}</Drawer>}
            </OutsideClickHandler>
        </Root>
    )
}
