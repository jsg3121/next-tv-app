import React from 'react'
import isEqual from 'fast-deep-equal'
import contact from 'styles/contact.module.scss'
import { Title } from 'components'

const Contact: React.FC = () => {
  return (
    <article className={contact.container} id="contact">
      <Title depth={1}>Contact & Others Info</Title>
      <ul>
        <li>
          <p>git</p>
          <span>asdflkj</span>
        </li>
        <li>
          <p>mail</p>
          <span>masdfiadslkh</span>
        </li>
        <li>
          <p>Velog</p>
          <span>ddd</span>
        </li>
        <li>
          <p>pdf</p>
          <span>asdflkhjasdf.pdf</span>
        </li>
        <li>
          <p>word</p>
          <span>dasdf.word</span>
        </li>
      </ul>
    </article>
  )
}

export default React.memo(Contact, isEqual)
