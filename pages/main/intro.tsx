import { IntorContainer, NoticeContainer } from 'container'
import { gsap } from 'gsap'
import type { NextPage } from 'next'
import React from 'react'
import styled from 'styled-components'
import { $Color } from 'styles'

const Main = styled.main`
  width: 100%;
  height: 100vh;
  background-color: ${$Color.default.dark3};
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`

const Intro: NextPage = () => {
  const introRef = React.useRef<HTMLButtonElement>(null)

  React.useEffect(() => {
    // gsap.to(introRef.current, {
    //   width: '100%',
    //   height: '100vh',
    // })
  }, [])

  return (
    <Main ref={introRef}>
      <IntorContainer />
      <NoticeContainer />
    </Main>
  )
}

export default Intro
