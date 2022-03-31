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
        top: '280px',
        duration: 2,
        delay: 0.5,
      })
      .to(
        openningRef.current,
        {
          fontWeight: 'normal',
          duration: 1,
        },
        4
      )
      .to(openningRef.current, {
        display: 'none',
        duration: 0,
      })
      .to(introduceRef.current, {
        overflowY: 'auto',
        duration: 0,
      })
      .delay(1.5)
  }, [])

  return (
    <>
      <h1 className={layout.openning} ref={openningRef}>
        ABOUT ME
      </h1>
      <section className={layout.section} ref={introduceRef}>
        <section>
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
