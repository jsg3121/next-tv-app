import { RemoteContainer } from 'container'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import React from 'react'
import 'slick-carousel/slick/slick-theme.css'
import 'slick-carousel/slick/slick.css'
import { useSelector, wrapper } from 'store'
import styled from 'styled-components'
import { GlobalStyle } from '../styles/Global'

const Root = styled.main`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  overflow: hidden;

  &.powerOff {
    &::before {
      content: 'power off';
      width: 100vw;
      height: 100vh;
      position: absolute;
      background-color: #000000;
      z-index: 1000000;
      display: flex;
      align-items: center;
      justify-content: center;
      color: #ffffff;
    }
  }
`

function MyApp({ Component, pageProps }: AppProps) {
  const rootRef = React.useRef<HTMLElement>(null)

  const power = useSelector(({ channel }) => channel.power)

  React.useEffect(() => {
    if (power && rootRef.current) {
      rootRef.current.classList.remove('powerOff')
    }
    if (!power && rootRef.current) {
      rootRef.current.classList.add('powerOff')
    }
  }, [power])

  return (
    <>
      <Head>
        <title>Sungyu Jang&apos;s Devfolio</title>
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
      <Root ref={rootRef}>
        <RemoteContainer />
        <Component {...pageProps} />
      </Root>
    </>
  )
}

export default wrapper.withRedux(MyApp)
