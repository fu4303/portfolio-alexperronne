import React from "react"
import { Global } from "@emotion/react"
import tw, { GlobalStyles } from "twin.macro"

import { global } from "@styles"
import { Document, MessageTop, Header, Footer } from "@components"

export const Wrapper = ({ title, children }) => (
  <div>
    <GlobalStyles />
    <Global styles={global} />
    <Document title={title} />
    <MessageTop />
    <Container>
      <Header />
      <main>{children}</main>
      <Footer />
    </Container>
  </div>
)

const Container = tw.div`container`
