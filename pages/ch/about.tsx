import { About, ChannelContainer } from 'container'
import { gsap } from 'gsap'
import type { NextPage } from 'next'
import React from 'react'
import { Actions, useDispatch } from 'store'
import page from 'styles/page.module.scss'

const introEffect = (current: HTMLHeadingElement) => {
  gsap
    .timeline()
    .to(current, {
      display: 'flex',
    })
    .to(current, {
      display: 'none',
      duration: 0,
      delay: 2,
    })
    .delay(1)
}

const chSet = {
  chName: 'About',
  chNum: 2,
}

const Introduce: NextPage = () => {
  const introduceRef = React.useRef<HTMLHeadingElement>(null)
  const openningRef = React.useRef<HTMLHeadingElement>(null)

  const dispatch = useDispatch()

  React.useEffect(() => {
    if (introduceRef.current && openningRef.current) {
      introEffect(openningRef.current)
    }
  }, [])

  React.useEffect(() => {
    dispatch(Actions.remote.channelSet(chSet))
    dispatch(Actions.remote.refreshChannel(2))
  }, [dispatch])

  return (
    <>
      <ChannelContainer />
      <h1 className={page.openning} ref={openningRef}>
        ABOUT ME
      </h1>
      <section className={page.section_about} ref={introduceRef}>
        <section>
          <About />
        </section>
      </section>
    </>
  )
}

export default Introduce
