import { Channel, Title } from 'components'
import { IntorContainer, NoticeContainer } from 'container'
import { gsap, Power4 } from 'gsap'
import type { NextPage } from 'next'
import { NextRouter, useRouter } from 'next/router'
import React from 'react'
import intro from 'styles/intro.module.scss'

const turnOff = (current: HTMLHeadingElement, router: NextRouter): void => {
  gsap
    .timeline()
    .to(current, {
      width: '100%',
      height: '2px',
      ease: Power4.easeOut,
      duration: 0.1,
    })
    .to(current, {
      width: '0',
      height: '0',
      duration: 0.1,
    })
    .then(() => {
      router.push('/ch/about')
    })
}

const turnOnOff = (current: HTMLHeadingElement) => {
  const timeLine = gsap.timeline()

  timeLine
    .to(current, {
      width: '100%',
      height: '2px',
      ease: Power4.easeOut,
      duration: 0.1,
    })
    .to(current, {
      width: '0',
      height: '0',
      duration: 0.2,
    })
    .to(current, {
      width: '100%',
      height: '2px',
      ease: Power4.easeOut,
      duration: 0.2,
      backgroundImage: 'none',
    })
    .to(current, {
      width: '100%',
      height: 'calc(100vh - 7.778rem)',
      duration: 0.1,
    })
    .delay(1)
}

const Intro: NextPage = () => {
  const [isShow, setIsShow] = React.useState<boolean>(false)
  const mainRef = React.useRef<HTMLHeadingElement>(null)
  const router = useRouter()

  const handleClick = React.useCallback(() => {
    if (mainRef.current) {
      turnOff(mainRef.current, router)
    }
  }, [router])

  React.useEffect(() => {
    if (mainRef.current) {
      turnOnOff(mainRef.current)
      const timeSet = setInterval(() => {
        setIsShow(true)
      }, 1400)

      return () => {
        return clearInterval(timeSet)
      }
    }
  }, [])

  return (
    <>
      {isShow && <Channel chName="Intro" chNumber="001" />}
      <main className={intro.container} ref={mainRef}>
        {isShow && (
          <div>
            <IntorContainer />
            <NoticeContainer onClick={handleClick} />
          </div>
        )}
      </main>
    </>
  )
}

export default Intro
