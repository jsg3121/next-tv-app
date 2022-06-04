import { RemoteContainer } from 'container'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import { useRouter } from 'next/router'
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
  position: relative;

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

      @media screen and (pointer: coarse) {
        height: calc(var(--MOBILE-vh, 1vh) * 100);
      }
    }
  }

  @media screen and (pointer: coarse) {
    height: calc(var(--MOBILE-vh, 1vh) * 100);
  }
`

function MyApp({ Component, pageProps }: AppProps) {
  const rootRef = React.useRef<HTMLElement>(null)
  const power = useSelector(({ channel }) => channel.power)
  const router = useRouter()

  React.useEffect(() => {
    if (power && rootRef.current) {
      rootRef.current.classList.remove('powerOff')
    }
    if (!power && rootRef.current) {
      rootRef.current.classList.add('powerOff')
    }
  }, [power])

  React.useEffect(() => {
    const vh = window.innerHeight * 0.01
    document.documentElement.style.setProperty('--MOBILE-vh', `${vh}px`)
  }, [])

  return (
    <>
      <Head>
        <title>Sungyu Jang&apos;s Devfolio</title>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="author" content="xodm95@gmail.com" />
        <meta
          name="viewport"
          content="width=device-width,height=device-height, initial-scale=1.0, maximum-scale=5.0"
        />
        <meta
          name="keywords"
          content="Jang Sungyu, Portfolio, Developer, Front-End, 개발자, 프론트엔드"
        />
        <meta
          name="description"
          content="
          FrontEnd Developer Jang Sungyu's Devfolio 프론트엔드 개발자 장선규의 개발 포트폴리오 입니다. 
          찾아주셔서 감사합니다!
          Thank you for visiting my dev portfolio site!!
          "
        />
        <meta name="og:site_name" content="장선규's Devfolio" />
        <meta name="og:title" content="프론트엔드 개발자 장선규" />
        <meta
          name="og:description"
          content="안녕하세요 프론트엔드 개발자 장선규의 포트폴리오 사이트 입니다."
        />
        <meta name="og:type" content="website" />
        <meta name="og:url" content="" />
        <meta name="og:image" content="/favicon.ico" />
        <meta name="robots" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <GlobalStyle />
      <Root ref={rootRef}>
        {router.pathname !== '/ch/intro' && <RemoteContainer />}
        <Component {...pageProps} />
      </Root>
    </>
  )
}

export default wrapper.withRedux(MyApp)
