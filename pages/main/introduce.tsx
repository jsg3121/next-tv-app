import http from 'axios'
import { About, Contact, Project } from 'container'
import { gsap, Power4 } from 'gsap'
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
    // gsap
    //   .timeline()
    //   .to(introduceRef.current, {
    //     width: '0',
    //     height: '0',
    //     duration: 0,
    //     overflow: 'hidden',
    //   })
    //   .to(introduceRef.current, {
    //     width: '100%',
    //     height: '2px',
    //     ease: Power4.easeOut,
    //     duration: 0.1,
    //     overflow: 'hidden',
    //   })
    //   .to(introduceRef.current, {
    //     width: '100%',
    //     height: '100vh',
    //     duration: 0.1,
    //     overflowY: 'auto',
    //   })
  }, [])

  return (
    <section className={layout.section} ref={introduceRef}>
      <div ref={openningRef}>
        <h1>ABOUT ME</h1>
      </div>
      <section>
        <About />
      </section>
      {/* <section>
        <Skills data={data} />
      </section> */}
      <section>
        <Project data={projectData} />
      </section>
      <section>
        <Contact />
      </section>
    </section>
  )
}

export default Introduce
