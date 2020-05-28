import { Link as GatsbyLink } from 'gatsby'
import styled from 'styled-components'

import theme from '../utils/theme'

const sharedStyle = `
margin-right: ${theme.spacing(4)};

&:last-child {
  margin-right: 0;
}

&:hover {
  opacity: 0.8;
  transition: opacity 0.1s ease-in;
}
`

const containedStyle = `
display: inline-block;
font-weight: bold;
text-align: center;
color: ${theme.palette.white};
border-radius: ${theme.radius};
background-color: ${theme.palette.primary};
padding: ${theme.spacing(1)} ${theme.spacing(2)};   
`

const borderStyle = `
display: inline-block;
font-weight: bold;
text-align: center;
border-radius: 100em;
border: 2px solid  ${theme.palette.primary};
padding: ${theme.spacing(1)} ${theme.spacing(3)};

&:hover {
  opacity: 1;
  transition: background-color 0.1s ease-in;
  background-color: ${theme.palette.primary};
}
`

const footerStyle = `
color: ${theme.palette.white};
font-size: ${theme.fontSize(14)};
text-decoration: underline;
`

const menuStyle = `
color: ${theme.palette.white};
font-weight: bold;
text-transform: uppercase;
font-size: ${theme.fontSize(14)};
`

const darkStyle = `
color:  ${theme.palette.link};
`

export const Link = styled(GatsbyLink)`
  ${sharedStyle}
  ${({ dark }) => dark && darkStyle}
  ${({ menu }) => menu && menuStyle}
  ${({ border }) => border && borderStyle}
  ${({ contained }) => contained && containedStyle}
  ${({ footer }) => footer && footerStyle}
`

export const Anchor = styled('a')`
  ${sharedStyle}
  ${({ dark }) => dark && darkStyle}
  ${({ menu }) => menu && menuStyle}
  ${({ border }) => border && borderStyle}
  ${({ contained }) => contained && containedStyle}
  ${({ footer }) => footer && footerStyle}
`
