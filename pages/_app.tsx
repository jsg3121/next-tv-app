import { SideContainer } from 'container'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import { useRouter } from 'next/router'
import styled from 'styled-components'
import { GlobalStyle } from '../styles/Global'
import 'react-image-gallery/styles/scss/image-gallery.scss'

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
        <title>Sungyu Jang&apos;s Devfolio </title>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="author" content="xodm95@gmail.com" />
        <meta
          name="description"
          content="
          FrontEnd Developer Jang Sungyu's Devfolio 프론트엔드 개발자 장선규의 개발 포트폴리오 입니다. 
          찾아주셔서 감사합니다!
          Thank you for visiting my dev portfolio site!!
          "
        />
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
