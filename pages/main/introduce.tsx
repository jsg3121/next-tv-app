import http from 'axios'
import { About, Contact, Project } from 'container'
import { gsap } from 'gsap'
import type { NextPage } from 'next'
import React from 'react'
import layout from 'styles/introduce.module.scss'
import useSWR from 'swr'

const Introduce: NextPage = () => {
  const introduceRef = React.useRef<HTMLHeadingElement>(null)
  const openningRef = React.useRef<HTMLHeadingElement>(null)
  const aboutRef = React.useRef<HTMLHeadingElement>(null)

  const { data: projectData } = useSWR('/intorduce/project', async () => {
    return await http
      .request({
        method: 'GET',
        url: '/api/project',
      })
      .then((res) => res.data)
  })

  React.useEffect(() => {
    gsap
      .timeline()
      .to(introduceRef.current, {
        overflowY: 'hidden',
        duration: 0,
      })
      .to(openningRef.current, {
        display: 'flex',
      })
      .to(openningRef.current, {
        fontSize: '1.5rem',
        left: '270px',
        top: '272px',
        duration: 2,
        delay: 0.5,
      })
      .to(openningRef.current, {
        fontWeight: 'normal',
      })
      .to(openningRef.current, {
        display: 'none',
        duration: 0,
      })
      .to(introduceRef.current, {
        overflowY: 'auto',
        duration: 0,
      })
      .delay(1.5)

    gsap
      .timeline()
      .to(aboutRef.current, {
        y: 30,
        duration: 0.05,
      })
      .to(aboutRef.current, {
        y: 0,
        duration: 0.05,
      })
      .delay(3.75)
    gsap
      .timeline()
      .to(aboutRef.current, {
        y: 20,
        duration: 0.05,
      })
      .to(aboutRef.current, {
        y: 0,
        duration: 0.05,
      })
      .delay(4.5)

    gsap
      .timeline()
      .to(aboutRef.current, {
        y: 10,
        duration: 0.05,
      })
      .to(aboutRef.current, {
        y: 0,
        duration: 0.05,
      })
      .delay(4.875)

    gsap
      .timeline()
      .to(aboutRef.current, {
        y: 2,
        duration: 0.05,
      })
      .to(aboutRef.current, {
        y: 0,
        duration: 0.05,
      })
      .delay(5.125)

    gsap
      .timeline()
      .to(aboutRef.current, {
        y: 40,
        duration: 0.05,
      })
      .to(aboutRef.current, {
        y: 0,
        duration: 0.05,
      })
      .delay(7.325)
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
        <section>
          <Project data={projectData} />
        </section>
        <section>
          <Contact />
        </section>
      </section>
    </>
  )
}

export default Introduce
