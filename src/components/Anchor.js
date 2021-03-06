import { Link as GatsbyLink } from 'gatsby';
import React from 'react';
import * as Scroll from 'react-scroll';
import styled from 'styled-components';

import theme from '../utils/theme';

const sharedStyle = `
&:hover {
  cursor: pointer;
  opacity: 0.8;
  transition: all 0.1s ease-in;
}
`

const containedStyle = `
display: inline-block;
font-weight: bold;
text-align: center;
color: ${theme.palette.white};
border-radius: ${theme.radius};
background-color: ${theme.palette.link};
padding: ${theme.spacing(1)} ${theme.spacing(2)};   
`

const borderStyle = `
display: inline-block;
font-weight: bold;
text-align: center;
border-radius:${theme.radius};
border: 1px solid  ${theme.palette.link};
padding: ${theme.spacing(1)} ${theme.spacing(3)};
`

const footerStyle = `
color: ${theme.palette.white};
font-size: ${theme.fontSize(14)};
margin-right: ${theme.spacing(2)};
&:last-child {
    margin-right: 0;
}
`

const menuStyle = `
letter-spacing: 1px; 
color: ${theme.palette.white};
font-size: ${theme.fontSize(14)};
border-bottom: 2px solid transparent;
position: relative;

&:before {
  left: 0;
  top: 100%;
  width: 0;
  content: "";
  height: 2px;
  position: absolute;
  transition: width 0.1s ease-in;
  background: ${theme.palette.link};
}

&:hover {
  opacity: 1;

  &:before {
    width: 100%;
  }
}

&.active:before {
    width: 100%;
}
`

const ctaStyle =
    containedStyle +
    `
font-size: ${theme.fontSize(18)};
padding: ${theme.spacing(2)} ${theme.spacing(4)};   
`

const darkStyle = `
color:  ${theme.palette.link};
`
const FilteredLink = ({ dark, menu, border, contained, footer, ...rest }) => <GatsbyLink {...rest} />
const FilteredScrollLink = ({ dark, menu, border, contained, footer, ...rest }) => <Scroll.Link {...rest} />

export const Link = styled(FilteredLink)`
  ${sharedStyle}
  ${({ dark }) => dark && darkStyle}
  ${({ menu }) => menu && menuStyle}
  ${({ border }) => border && borderStyle}
  ${({ contained }) => contained && containedStyle}
  ${({ footer }) => footer && footerStyle}
  ${({ cta }) => cta && ctaStyle}
`

export const ScrollLink = styled(FilteredScrollLink)`
  ${sharedStyle}
  ${({ dark }) => dark && darkStyle}
  ${({ menu }) => menu && menuStyle}
  ${({ border }) => border && borderStyle}
  ${({ contained }) => contained && containedStyle}
  ${({ footer }) => footer && footerStyle}
  ${({ cta }) => cta && ctaStyle}
`

export const Anchor = styled('a')`
  ${sharedStyle}
  ${({ dark }) => dark && darkStyle}
  ${({ menu }) => menu && menuStyle}
  ${({ border }) => border && borderStyle}
  ${({ contained }) => contained && containedStyle}
  ${({ footer }) => footer && footerStyle}
  ${({ cta }) => cta && ctaStyle}
`
