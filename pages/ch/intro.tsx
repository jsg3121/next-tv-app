import { turnOff, turnOnOff } from 'common'
import { Channel } from 'components'
import { IntorContainer, NoticeContainer } from 'container'
import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import React from 'react'
import intro from 'styles/intro.module.scss'

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
      {isShow && (
        <Channel chName="Intro" chNumber="001" progress={0} broadcast="시작" />
      )}
      <section className={intro.container} ref={mainRef}>
        {isShow && (
          <div>
            <IntorContainer />
            <NoticeContainer onClick={handleClick} />
          </div>
        )}
      </section>
    </>
  )
}

export default Intro
