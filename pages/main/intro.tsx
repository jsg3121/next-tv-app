import { IntorContainer, NoticeContainer } from 'container'
import { gsap, Power4 } from 'gsap'
import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import React from 'react'
import intro from 'styles/intro.module.scss'

const Intro: NextPage = () => {
  const [isShow, setIsShow] = React.useState<boolean>(false)
  const mainRef = React.useRef<HTMLHeadingElement>(null)
  const router = useRouter()

  const handleClick = React.useCallback(() => {
    gsap
      .timeline()
      .to(mainRef.current, {
        width: '100%',
        height: '2px',
        ease: Power4.easeOut,
        duration: 0.2,
      })
      .to(mainRef.current, {
        width: '0',
        height: '0',
        duration: 0.2,
      })
      .then(() => {
        router.push('/main/introduce')
      })
  }, [router])

  React.useEffect(() => {
    const timeLine = gsap.timeline()

    timeLine
      .to(mainRef.current, {
        width: '100%',
        height: '2px',
        ease: Power4.easeOut,
        duration: 0.2,
      })
      .to(mainRef.current, {
        width: '0',
        height: '0',
        duration: 0.2,
      })
      .to(mainRef.current, {
        width: '100%',
        height: '2px',
        ease: Power4.easeOut,
        duration: 0.2,
      })
      .to(mainRef.current, {
        width: '100%',
        height: '100vh',
        duration: 0.2,
      })
      .delay(1)

    const timeSet = setInterval(() => {
      setIsShow(true)
    }, 1400)
  }, [])

  return (
    <main className={intro.container} ref={mainRef}>
      {isShow && (
        <>
          <IntorContainer />
          <NoticeContainer onClick={handleClick} />
        </>
      )}
    </main>
  )
}

export default Intro
