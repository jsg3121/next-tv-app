import { Button, Title } from 'components'
import isEqual from 'fast-deep-equal'
import { useRouter } from 'next/router'
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

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 90px;
  margin-top: 10px;
`

const NoticeContainer: React.FC = () => {
  const [name, setName] = React.useState<string>()
  const router = useRouter()

  const handleClickBack = React.useCallback(() => {
    router.replace('/')
  }, [router])

  const handleClickNext = React.useCallback(() => {
    router.replace('/main/introduce')
  }, [router])

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
        <Title depth={2}>Front End개발자 장선규 입니다</Title>
        <ButtonContainer>
          <Button onClick={handleClickNext} type="primary">
            구경가기
          </Button>
          <Button onClick={handleClickBack} type="danger">
            {name === '님'
              ? '혹시 다른 분이신가요?'
              : `제 이름은 ${name?.substring(
                  name.length * -1,
                  name.length - 1
                )}이(가) 아니에요!`}
          </Button>
        </ButtonContainer>
      </Notice>
    </>
  )
}

export default React.memo(NoticeContainer, isEqual)
