import { turnOff, turnOnOff } from 'common'
import { ChannelContainer, IntorContainer, NoticeContainer } from 'container'
import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import React from 'react'
import { Actions, useDispatch, useSelector } from 'store'
import intro from 'styles/intro.module.scss'

const chSet = {
  chName: 'Intro',
  chNum: 1,
}

const Intro: NextPage = () => {
  const [isShow, setIsShow] = React.useState<boolean>(false)
  const mainRef = React.useRef<HTMLHeadingElement>(null)

  const router = useRouter()

  const isOpen = useSelector(({ channel }) => channel.openning)
  const dispatch = useDispatch()

  const handleClick = React.useCallback(() => {
    if (mainRef.current) {
      turnOff(mainRef.current, router)
    }
  }, [router])

  React.useEffect(() => {
    if (!isOpen) {
      if (mainRef.current) {
        turnOnOff(mainRef.current)
        const timeSet = setInterval(() => {
          setIsShow(true)
        }, 1400)

        return () => {
          return clearInterval(timeSet)
        }
      }
    } else {
      if (mainRef.current) {
        mainRef.current.style.backgroundImage = 'none'
      }
      setIsShow(true)
    }
  }, [isOpen, dispatch])

  React.useEffect(() => {
    dispatch(Actions.remote.channelSet(chSet))
  }, [dispatch])

  return (
    <>
      {isShow && <ChannelContainer />}
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
