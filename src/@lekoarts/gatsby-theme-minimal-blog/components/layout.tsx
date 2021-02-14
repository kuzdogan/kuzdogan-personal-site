/** @jsx jsx */
import { Global } from "@emotion/core"
import React from "react"
import { Box, Container, jsx } from "theme-ui"
import "typeface-ibm-plex-sans"
import CodeStyles from "../styles/code"
import Footer from "./footer"
import Header from "./header"
import SEO from "./seo"
import SkipNavLink from "./skip-nav"

const MyH1 = props => <h1 style={{ color: "tomato" }} {...props} />
const MyParagraph = props => (
  <p style={{ fontSize: "18px", lineHeight: 1.6 }} {...props} />
)
const myImg = props => { 
  console.log('Image props');
  console.log(props)
  return <img {...props} />
}

const components = {
  h1: MyH1,
  h2: MyH1,
  // img: myImg,
  p: MyParagraph,
}

type LayoutProps = { children: React.ReactNode; className?: string }

const Layout = ({ children, className = `` }: LayoutProps) => (
  <React.Fragment>
    <Global
      styles={(theme) => ({
        "*": {
          boxSizing: `inherit`,
        },
        html: {
          WebkitTextSizeAdjust: `100%`,
        },
        img: {
          borderStyle: `none`,
        },
        pre: {
          fontFamily: `monospace`,
          fontSize: `1em`,
        },
        "[hidden]": {
          display: `none`,
        },
        "::selection": {
          backgroundColor: theme.colors.text,
          color: theme.colors.background,
        },
        a: {
          transition: `all 0.3s ease-in-out`,
          color: `text`,
        },
      })}
    />
    <SEO />
    <SkipNavLink>Skip to content</SkipNavLink>
    <Container>
      <Header />
      <Box id="skip-nav" sx={{ ...CodeStyles }} className={className}>
        {/* <MDXProvider components={components}> */}
        {children}
        {/* </MDXProvider> */}
      </Box>
      <Footer />
    </Container>
  </React.Fragment>
)

export default Layout
