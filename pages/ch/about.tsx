import http from 'axios'
import { About, Contact, Project } from 'container'
import { gsap } from 'gsap'
import type { NextPage } from 'next'
import React from 'react'
import layout from 'styles/introduce.module.scss'
import useSWR from 'swr'

const introEffect = (
  current1: HTMLHeadingElement,
  current2: HTMLHeadingElement
) => {
  gsap
    .timeline()
    .to(current1, {
      overflowY: 'hidden',
      duration: 0,
    })
    .to(current2, {
      display: 'flex',
    })
    .to(current2, {
      fontSize: '1.5rem',
      left: '15.43rem',
      top: '12.833rem',
      duration: 2,
      delay: 0.5,
    })
    .to(current2, {
      fontWeight: '500',
    })
    .to(
      current2,
      {
        display: 'none',
        duration: 0,
        delay: 4,
      },
      1
    )
    .to(current1, {
      overflowY: 'auto',
      duration: 0,
    })
    .delay(1.5)
}

const bounceEffect = (current: HTMLHeadingElement) => {
  gsap
    .timeline()
    .to(current, {
      y: 30,
      duration: 0.05,
    })
    .to(current, {
      y: 0,
      duration: 0.05,
    })
    .delay(3.75)
  gsap
    .timeline()
    .to(current, {
      y: 20,
      duration: 0.05,
    })
    .to(current, {
      y: 0,
      duration: 0.05,
    })
    .delay(4.5)
  gsap
    .timeline()
    .to(current, {
      y: 10,
      duration: 0.05,
    })
    .to(current, {
      y: 0,
      duration: 0.05,
    })
    .delay(4.875)
  gsap
    .timeline()
    .to(current, {
      y: 2,
      duration: 0.05,
    })
    .to(current, {
      y: 0,
      duration: 0.05,
    })
    .delay(5.125)
  gsap
    .timeline()
    .to(current, {
      y: 5,
      duration: 0.05,
    })
    .to(current, {
      y: 0,
      duration: 0.05,
    })
    .delay(6.325)
}

const Introduce: NextPage = () => {
  const introduceRef = React.useRef<HTMLHeadingElement>(null)
  const openningRef = React.useRef<HTMLHeadingElement>(null)
  const aboutRef = React.useRef<HTMLHeadingElement>(null)

  // const { data: projectData } = useSWR('/intorduce/project', async () => {
  //   return await http
  //     .request({
  //       method: 'GET',
  //       url: '/api/project',
  //     })
  //     .then((res) => res.data)
  // })

  React.useEffect(() => {
    if (introduceRef.current && openningRef.current) {
      introEffect(introduceRef.current, openningRef.current)
    }

    if (introduceRef.current) {
      bounceEffect(introduceRef.current)
    }
  }, [])

  return (
    <>
      <section className={layout.section} ref={introduceRef}>
        <h1 className={layout.openning} ref={openningRef}>
          ABOUT ME
        </h1>
        <section ref={aboutRef}>
          <About />
        </section>
        {/* <section>
          <Project data={projectData} />
        </section>
        <section>
          <Contact />
        </section> */}
      </section>
    </>
  )
}

export default Introduce
