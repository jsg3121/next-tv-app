import { Text } from 'components'
import isEqual from 'fast-deep-equal'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import side from 'styles/side.module.scss'

const SideContainer: React.FC = () => {
  return (
    <section className={side.container}>
      <nav className={side.menu_nav}>
        <ul>
          <li>
            <Text>About</Text>
          </li>
          <li>
            <Text>Skills</Text>
          </li>
          <li>
            <Text>Project</Text>
          </li>
          <li>
            <Text>Contact</Text>
          </li>
        </ul>
      </nav>
      <ul className={side.link_nav}>
        <li>
          <Link href="https://github.com/jsg3121" passHref={true}>
            <a target="_blank">
              <figure>
                <Image
                  src="/github.svg"
                  alt="link_icon"
                  loading="lazy"
                  width="50"
                  height="50"
                  layout="responsive"
                />
              </figure>
            </a>
          </Link>
        </li>
        <li>
          <Link href="mailto:xodm95@gmail.com" passHref={true}>
            <figure>
              <Image
                src="/mail.svg"
                alt="link_icon"
                loading="lazy"
                width="50"
                height="50"
                layout="responsive"
              />
            </figure>
          </Link>
        </li>
      </ul>
    </section>
  )
}

export default React.memo(SideContainer, isEqual)
