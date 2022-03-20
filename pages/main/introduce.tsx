import { About, Project } from 'container'
import type { NextPage } from 'next'
import layout from 'styles/introduce.module.scss'
import useSWR from 'swr'
import http from 'axios'

const Introduce: NextPage = () => {
  const { data: projectData } = useSWR('/intorduce/project', async () => {
    return await http
      .request({
        method: 'GET',
        url: '/api/project',
      })
      .then((res) => res.data)
  })

  return (
    <section className={layout.section}>
      <section>
        <About />
      </section>
      {/* <section>
        <Skills data={data} />
      </section> */}
      <section>
        <Project data={projectData} />
      </section>
    </section>
  )
}

export default Introduce
