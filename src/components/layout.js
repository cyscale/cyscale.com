import React from 'react'
import { Container, setConfiguration } from 'react-grid-system'

import Footer from './footer'
import Header from './header'
import Hero from './hero'

setConfiguration({ gutterWidth: 32 })

const Layout = ({ location, hero, children }) => {
  const { pathname } = location
  return (
    <>
      <Header />
      {pathname === "/" && <Hero hero={hero} />}

      <Container>
        <main>{children}</main>
      </Container>
      <Footer />
    </>
  )
}

export default Layout
