import { Channel } from 'components'
import { About } from 'container'
import { gsap } from 'gsap'
import type { NextPage } from 'next'
import React from 'react'
import page from 'styles/page.module.scss'

const introEffect = (
  current1: HTMLHeadingElement,
  current2: HTMLHeadingElement
) => {
  gsap
    .timeline()
    .to(current2, {
      display: 'flex',
    })
    .to(current2, {
      display: 'none',
      duration: 0,
      delay: 2,
    })
    .delay(1)
}

const Introduce: NextPage = () => {
  const introduceRef = React.useRef<HTMLHeadingElement>(null)
  const openningRef = React.useRef<HTMLHeadingElement>(null)

  React.useEffect(() => {
    if (introduceRef.current && openningRef.current) {
      introEffect(introduceRef.current, openningRef.current)
    }
  }, [])

  return (
    <>
      <Channel chName="About" chNumber="002" />

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
