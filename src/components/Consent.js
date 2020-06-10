import { Link } from 'gatsby'
import React from 'react'
import CookieConsent from 'react-cookie-consent'
import styled from 'styled-components'

import theme from '../utils/theme'

const Content = styled.div`
    color: ${theme.palette.black60};
    font-size: ${theme.fontSize(13)};
`

export default function Consent() {
    return (
        <CookieConsent
            style={{
                background: theme.palette.white,
                borderTop: `1px solid ${theme.palette.black05}`,
                flexDirection: 'column',
                justifyContent: 'flex-start',
                alignItems: 'flex-start',
            }}
            enableDeclineButton
            buttonStyle={{
                boxSizing: 'border-box',
                borderRadius: theme.radius,
                color: theme.palette.white,
                fontSize: theme.fontSize(14),
                backgroundColor: theme.palette.link,
                fontWeight: 'bold',
                padding: `${theme.spacing(1 / 2)} ${theme.spacing(2)}`,
                marginRight: theme.spacing(10),
            }}
            declineButtonStyle={{
                marginRight: 0,
                color: theme.palette.black,
                fontSize: theme.fontSize(14),
                backgroundColor: 'transparent',
            }}
            contentStyle={{
                flex: 'unset',
                margin: theme.spacing(1),
                marginBottom: 0,
            }}
            location='bottom'
            sameSite='strict'
        >
            <Content>
                <p>
                    This website <strong>stores cookies on your computer</strong>. These cookies are used to collect
                    information about how you interact with our website and allow us to remember you. We use this
                    information <strong>in order to improve and customize your browsing experience</strong> and for{' '}
                    <strong>analytics and metrics about our visitors</strong> both on this website and other media. To
                    find out more about the cookies we use, see our{' '}
                    <Link to='/policies/privacy-policy'>
                        <strong>Privacy Policy.</strong>
                    </Link>
                </p>
                <p>
                    If you decline, your information won’t be tracked when you visit this website. A single cookie will
                    be used in your browser to remember your preference not to be tracked.
                </p>
            </Content>
        </CookieConsent>
    )
}
