import { Link } from 'gatsby'
import React from 'react'
import CookieConsent from 'react-cookie-consent'

export default function Consent() {
    return (
        <CookieConsent
            style={{
                background: 'white',
                borderTop: '1px solid gray',
                flexDirection: 'column',
                justifyContent: 'flex-start',
                alignItems: 'flex-start',
            }}
            enableDeclineButton
            buttonStyle={{
                boxSizing: 'border-box',
                borderRadius: 4,
                color: 'white',
                fontSize: '14px',
                backgroundColor: '#050A27',
                fontWeight: 'bold',
                padding: '8px 16px',
                marginRight: '40px',
            }}
            declineButtonStyle={{
                marginRight: 0,
                color: 'black',
                fontSize: '14px',
                backgroundColor: 'transparent',
            }}
            contentStyle={{
                flex: 'unset',
                margin: '8px',
                marginBottom: 0,
            }}
            location='bottom'
            sameSite='strict'
        >
            <div className="text-black text-opacity-60 text-sm">
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
            </div>
        </CookieConsent>
    )
}