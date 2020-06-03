import { withPrefix } from 'gatsby'
import React from 'react'
import { Helmet } from 'react-helmet'
import styled from 'styled-components'

import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import { useSiteMetadata } from '../utils/hooks'
import Consent from './Consent'

const Main = styled.main`
    min-height: calc(100vh - 160px);
`

const TemplateWrapper = ({ children }) => {
    const { title, description } = useSiteMetadata()
    return (
        <div>
            <Helmet>
                <html lang='en' />
                <title>{title}</title>
                <meta name='description' content={description} />
                <link
                    sizes='57x57'
                    rel='apple-touch-icon'
                    href={`${withPrefix('/')}img/favicon/apple-icon-57x57.png`}
                />
                <link
                    sizes='60x60'
                    rel='apple-touch-icon'
                    href={`${withPrefix('/')}img/favicon/apple-icon-60x60.png`}
                />
                <link
                    sizes='72x72'
                    rel='apple-touch-icon'
                    href={`${withPrefix('/')}img/favicon/apple-icon-72x72.png`}
                />
                <link
                    sizes='76x76'
                    rel='apple-touch-icon'
                    href={`${withPrefix('/')}img/favicon/apple-icon-76x76.png`}
                />
                <link
                    sizes='114x114'
                    rel='apple-touch-icon'
                    href={`${withPrefix('/')}img/favicon/apple-icon-114x114.png`}
                />
                <link
                    sizes='120x120'
                    rel='apple-touch-icon'
                    href={`${withPrefix('/')}img/favicon/apple-icon-120x120.png`}
                />
                <link
                    sizes='144x144'
                    rel='apple-touch-icon'
                    href={`${withPrefix('/')}img/favicon/apple-icon-144x144.png`}
                />
                <link
                    sizes='152x152'
                    rel='apple-touch-icon'
                    href={`${withPrefix('/')}img/favicon/apple-icon-152x152.png`}
                />
                <link
                    sizes='180x180'
                    rel='apple-touch-icon'
                    href={`${withPrefix('/')}img/favicon/apple-icon-180x180.png`}
                />
                <link
                    rel='icon'
                    sizes='192x192'
                    type='image/png'
                    href={`${withPrefix('/')}img/favicon/android-icon-192x192.png`}
                />
                <link
                    rel='icon'
                    sizes='32x32'
                    type='image/png'
                    href={`${withPrefix('/')}img/favicon/favicon-32x32.png`}
                />
                <link
                    rel='icon'
                    sizes='96x96'
                    type='image/png'
                    href={`${withPrefix('/')}img/favicon/favicon-96x96.png`}
                />
                <link
                    rel='icon'
                    sizes='16x16'
                    type='image/png'
                    href={`${withPrefix('/')}img/favicon/favicon-16x16.png`}
                />
                <link rel='manifest' href={`${withPrefix('/')}img/favicon/manifest.json`} />
                <meta name='msapplication-TileColor' content='#ffffff' />
                <meta name='msapplication-TileImage' content={`${withPrefix('/')}img/favicon/ms-icon-144x144.png`} />
                <meta property='og:image' content={`${withPrefix('/')}img/mockup.png`} />
                <meta name='theme-color' content='#ffffff' />
                <meta property='og:type' content='business.business' />
                <meta property='og:title' content={title} />
                <meta property='og:url' content='/' />
            </Helmet>

            <Navbar />
            <Main>{children}</Main>
            <Footer />
            <Consent />
        </div>
    )
}

export default TemplateWrapper
