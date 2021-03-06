import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
// Components
import Header from "../components/Header"
import Work from "../components/Work"
import About from "../components/about"
import Footer from "../components/Footer"
import { ThemeProvider, createTheme } from "@mui/material"

const theme = createTheme({
  palette: {
    primary: {
      main: '#000000',
      contrastText: '#fff',
    }
  },
});

const IndexPage = () => (
  <Layout>
    <SEO title="Varsha" />
    <ThemeProvider theme={theme}>
      <Header></Header>
      <Work></Work>
      <About></About>
      <Footer></Footer>
    </ThemeProvider>
  </Layout>
)

export default IndexPage
