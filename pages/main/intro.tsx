import { IntorContainer, NoticeContainer } from 'container'
import type { NextPage } from 'next'
import React from 'react'
import intro from 'styles/intro.module.scss'

const Intro: NextPage = () => {
  return (
    <main className={intro.container}>
      <IntorContainer />
      <NoticeContainer />
    </main>
  )
}

export default Intro
