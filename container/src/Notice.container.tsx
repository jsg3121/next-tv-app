import { Button, Input, Title } from 'components'
import isEqual from 'fast-deep-equal'
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

const NoticeContainer: React.FC = () => {
  const [name, setName] = React.useState<string>()

  const handleClick = React.useCallback(() => {
    Router.replace('/')
  }, [])

  React.useEffect(() => {
    const storage = localStorage.getItem('guestName')
    if (storage) {
      setName(storage)
    }
  }, [])

  return (
    <>
      <Notice>
        <Title depth={1}>
          {name === '님' ? '안녕하세요!' : name} 찾아주셔서 감사합니다!
        </Title>
        <Button onClick={handleClick}>
          {name === '님'
            ? '이름을 알려줄게요!'
            : `제 이름은 ${name}이 아니에요!`}
        </Button>
      </Notice>
    </>
  )
}

export default React.memo(NoticeContainer, isEqual)
