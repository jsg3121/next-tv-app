import { Button, Title } from 'components'
import isEqual from 'fast-deep-equal'
import React from 'react'
import notice from 'styles/notice.module.scss'

interface NoticeContainerProps {
  onClick: () => void
}

const NoticeContainer: React.FC<NoticeContainerProps> = (props) => {
  const { onClick } = props
  const handleClickNext = React.useCallback(() => {
    onClick()
  }, [onClick])

  return (
    <article className={notice.container}>
      <Title depth={1}>안녕하세요! 찾아주셔서 감사합니다!</Title>
      <Title depth={2}>Front End개발자 장선규 입니다</Title>
      <div className={notice.container_button}>
        <Button onClick={handleClickNext} type="primary">
          구경가기
        </Button>
      </div>
    </article>
  )
}

export default React.memo(NoticeContainer, isEqual)
