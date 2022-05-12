import type { NextPage } from 'next'
import Router from 'next/router'
import React from 'react'

const Home: NextPage = () => {
  React.useEffect(() => {
    sessionStorage.setItem('chNum', '1')
    Router.replace('/ch/intro')
  }, [])

  return <></>
}

export default Home
