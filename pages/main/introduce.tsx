import http from 'axios'
import { About, Skills } from 'container'
import type { NextPage } from 'next'
import layout from 'styles/introduce.module.scss'
import useSWR from 'swr'

const Introduce: NextPage = () => {
  const { data } = useSWR('/api/skills', async () => {
    return await http
      .request({
        url: '/api/skills',
        method: 'GET',
      })
      .then((res) => res.data.result)
  })

  return (
    <section className={layout.section}>
      <section>
        <About />
      </section>
      <section>
        <Skills data={data} />
      </section>
    </section>
  )
}

export default Introduce
