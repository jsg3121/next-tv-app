import { Channel, Text, Title } from 'components'
import type { NextPage } from 'next'
import Link from 'next/link'
import React from 'react'
import contact from 'styles/contact.module.scss'
import page from 'styles/page.module.scss'

const Contact: NextPage = () => {
  React.useEffect(() => {
    sessionStorage.setItem('chNum', '4')
  }, [])

  return (
    <>
      <Channel
        chName="Contact"
        chNumber="004"
        progress={90}
        broadcast="Devfolio the movie"
      />
      <div className={page.section_contact}>
        <div className={contact.conatiner}>
          <ul className={contact.credit_container}>
            <li>
              <Title depth={1}>Cast</Title>
            </li>
            <br />
            <li>
              <Title depth={2}>기획</Title>
              <Text>장선규</Text>
            </li>
            <li>
              <Title depth={2}>디자인</Title>
              <Text>장선규</Text>
            </li>
            <li>
              <Title depth={2}>개발</Title>
              <Text>장선규</Text>
            </li>
            <br />
            <li>
              <Title depth={2}>Main Skills</Title>
              <div>
                <Text>Next.js</Text>
                <Text>React</Text>
                <Text>TypeScript</Text>
                <Text>Scss</Text>
              </div>
            </li>
            <li>
              <Title depth={2}>Open Source Library</Title>
              <div>
                <Text>Styled-Component</Text>
                <Text>Styled-reset</Text>
                <Text>Axios</Text>
                <Text>Shap</Text>
                <Text>Gsap</Text>
                <Text>Fast-deep-equal</Text>
                <Text>Swr</Text>
                <Text>Dayjs</Text>
              </div>
            </li>
            <br />
          </ul>
          <ul className={contact.contact_container}>
            <li>
              <Title depth={1}>Gmail</Title>
              <Link href="mailto:xodm95@gmail.com">xodm95@gmail.com</Link>
            </li>
            <br />
            <li>
              <Title depth={1}>Git</Title>
              <Link href="https://github.com/jsg3121">
                <a target="_blank" rel="noopener">
                  https://github.com/jsg3121
                </a>
              </Link>
            </li>
            <br />
            <li>
              <Title depth={3}>
                Copyright 2022. Jangsungyu All pictures cannot be copied without
                permission.
              </Title>
            </li>
          </ul>
        </div>
      </div>
    </>
  )
}

export default Contact