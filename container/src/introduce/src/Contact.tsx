import React from 'react'
import isEqual from 'fast-deep-equal'
import contact from 'styles/contact.module.scss'
import { Title } from 'components'

const Contact: React.FC = () => {
  return (
    <article className={contact.container}>
      <Title depth={1}>How to call me?</Title>
    </article>
  )
}

export default React.memo(Contact, isEqual)
