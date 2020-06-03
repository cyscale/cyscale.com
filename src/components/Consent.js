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
                backdropFilter: 'blur(4px)',
                background: 'rgba(255, 255, 255, 0.95)',
                alignItems: 'center',
                borderTop: `1px solid ${theme.palette.black05}`,
            }}
            enableDeclineButton
            buttonStyle={{
                boxSizing: 'border-box',
                borderRadius: theme.radius,
                color: theme.palette.white,
                fontSize: theme.fontSize(13),
                backgroundColor: theme.palette.link,
                padding: `${theme.spacing(1 / 2)} ${theme.spacing(2)}`,
            }}
            declineButtonStyle={{
                marginRight: 0,
                borderRadius: theme.radius,
                color: theme.palette.white,
                fontSize: theme.fontSize(13),
                backgroundColor: theme.palette.error,
                padding: `${theme.spacing(1 / 2)} ${theme.spacing(2)}`,
            }}
            location='bottom'
            expires={150}
        >
            <Content>
                <p>
                    This website <strong>stores cookies on your computer</strong>. These cookies are used to collect
                    information about how you interact with our website and allow us to remember you. We use this
                    information <strong>in order to improve and customize your browsing experience</strong> and for{' '}
                    <strong>analytics and metrics about our visitors</strong> both on this website and other media. To
                    find out more about the cookies we use, see our{' '}
                    <Link to='policies/privacy-policy'>
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
