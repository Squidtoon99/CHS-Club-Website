import type { AppProps } from 'next/app'
import { ThemeProvider, DefaultTheme } from 'styled-components'
import GlobalStyle from '../components/globalstyles'
import Nav from "components/Nav";
import Footer from "components/Footer";
import Head from "next/head";

const theme: DefaultTheme = {
  colors: {
    red: '#D90429',
    orange: '#EF233C',
    white: "#EDF2F4",
    lightBlue: "#8D99AE",
    darkBlue: "#2B2D42"
  },
}

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Head>
          <title>CHS Clubs</title>
          <meta name="description" content="A list of clubs at CHS" />
          <link rel="icon" href="https://www.coppellisd.com/cms/lib09/TX01000550/Centricity/Domain/1/favicon.ico" />
        </Head>
        <div style={{minHeight: "100vh"}}>
          <Nav displayNav={false} />
          <Component {...pageProps} />
        </div>
        <Footer/>
      </ThemeProvider>
    </>
  )
}
