import type { NextPage } from 'next'
import Router from 'next/router'
import React from 'react'

const Home: NextPage = () => {
  React.useEffect(() => {
    Router.replace('/main/intro')
  }, [])

  return <></>
}

export default Home
