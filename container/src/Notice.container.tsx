import { Button, Title } from 'components'
import isEqual from 'fast-deep-equal'
import { useRouter } from 'next/router'
import React from 'react'
import notice from 'styles/notice.module.scss'
import { gsap } from 'gsap'

const NoticeContainer: React.FC = () => {
  const noticeRef = React.useRef<HTMLElement>(null)
  const router = useRouter()

  const handleClickNext = React.useCallback(() => {
    gsap
      .to(noticeRef.current, {
        scale: 0,
      })
      .duration(0.2)
      .then(() => {
        setInterval(() => {
          // router.replace('/main/introduce')
        }, 300)
      })
  }, [])

  return (
    <article className={notice.container} ref={noticeRef}>
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
