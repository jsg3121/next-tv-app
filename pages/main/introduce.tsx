import { About, Skills } from 'container'
import type { NextPage } from 'next'
import layout from 'styles/introduce.module.scss'

const introduce: NextPage = () => {
  return (
    <section className={layout.section}>
      <section>
        <About />
      </section>
      <section>
        <Skills />
      </section>
    </section>
  )
}

export default introduce
