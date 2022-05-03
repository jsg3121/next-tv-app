import { Button, Text, Title } from 'components'
import isEqual from 'fast-deep-equal'
import React from 'react'
import notice from 'styles/notice.module.scss'

interface NoticeContainerProps {
  onClick: () => void
}

const NoticeContainer: React.FC<NoticeContainerProps> = (props) => {
  const { onClick } = props
  const [isClick, setIsClick] = React.useState<boolean>(true)
  const handleClickNext = React.useCallback(() => {
    if (isClick) {
      onClick()
      setIsClick(false)
    }
  }, [onClick, isClick])

  return (
    <article className={notice.container}>
      <Text>Hi! my name is</Text>
      <Title depth={1}>Sungyu Jang</Title>
      <Title depth={2}>Front End Devfolio</Title>
      <div className={notice.container_button}>
        <Button onClick={handleClickNext} type="primary">
          구경가기
        </Button>
      </div>
    </article>
  )
}

export default React.memo(NoticeContainer, isEqual)
