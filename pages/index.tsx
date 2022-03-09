import { Button, Input } from 'components'
import { gsap } from 'gsap'
import type { NextPage } from 'next'
import Router from 'next/router'
import React from 'react'
import styled from 'styled-components'

const Notice = styled.article`
  width: 400px;
  height: 140px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 999;
  background-color: #cccae359;
  box-shadow: 0 8px 32px 0 #1f26875e;
  backdrop-filter: blur(9.5px);
  -webkit-backdrop-filter: blur(9.5px);
  border-radius: 10px;
  border: 1px solid #ffffff2d;
  padding: 20px 30px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  overflow: hidden;
`

const Home: NextPage = () => {
  const [name, setName] = React.useState<string>('')
  const noticeRef = React.useRef<HTMLButtonElement>(null)

  const handleClick = React.useCallback(() => {
    localStorage.setItem('guestName', `${name}님`)
    // gsap
    //   .to(noticeRef.current, {
    //     width: 0,
    //     height: 0,
    //     padding: 0,
    //   })
    //   .then(() => {
    //   })
    Router.replace('/main/intro')
  }, [name])

  const handleChange = React.useCallback((payload: string) => {
    setName(payload)
  }, [])

  return (
    <Notice ref={noticeRef}>
      <Input
        onChange={handleChange}
        type="text"
        placeholder="제가 부를 수 있는 별명을 알려주세요!"
      />
      <Button onClick={handleClick} type="primary">
        {name ? '입장하기' : '알려주지 않고 입장하기'}
      </Button>
    </Notice>
  )
}

export default Home
