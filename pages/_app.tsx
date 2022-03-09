import { SideContainer } from 'container'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import { useRouter } from 'next/router'
import styled from 'styled-components'
import { GlobalStyle } from '../styles/Global'

const Root = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
`

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter()

  return (
    <>
      <Head>
        <title>Sungyu Jang&apos;s Devfolio</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <GlobalStyle />
      <Root>
        {router.pathname === '/main/introduce' && <SideContainer />}
        <Component {...pageProps} />
      </Root>
    </>
  )
}

export default MyApp
