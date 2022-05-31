import { Text, Title } from 'components'
import isEqual from 'fast-deep-equal'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import about from 'styles/about.module.scss'

const About: React.FC = () => {
  return (
    <article className={about.container} id="about">
      <div>
        <div className={about.profile_info}>
          <ul className={about.info_list}>
            <li>
              <Title depth={2}>PROFILE</Title>
            </li>
            <li>
              <Title depth={3}>NAME</Title>
              <Text>장선규 (Jang Sungyu)</Text>
            </li>
            <li>
              <Title depth={3}>BIRTH</Title>
              <Text>1995. 08. 09</Text>
            </li>
            <li>
              <Title depth={3}>VELOG</Title>
              <Link href="https://velog.io/@jsg3121">
                <a target="_blank">https://velog.io/@jsg3121</a>
              </Link>
            </li>
            <li>
              <Title depth={3}>GIT</Title>
              <Link href="https://github.com/jsg3121">
                <a target="_blank">https://github.com/jsg3121</a>
              </Link>
            </li>
            <li>
              <Title depth={3}>CAREER</Title>
              <Text>Quber ( 2019. 11 ~ )</Text>
            </li>
            <li>
              <Title depth={2}>&nbsp;</Title>
              <Text>Cresector ( 2018. 06 ~ 2019. 07 )</Text>
            </li>
          </ul>
        </div>
        <div className={about.info_description}>
          <Text>
            주로 즐겨하던 게임들은 대부분 진행 난이도가 높아 입문하기 어려운
            게임 종류였습니다.
            <br />
            룰을 이해하고 노력한 뒤 발전된 플레이를 하여 한 단계씩 성장하는
            캐릭터를 보며 성취감과 뿌듯함을 느낄 수 있기 때문입니다.
            <br />
            <br />
            개발이란 과정도 목표를 향해 이해하고 시도하며 성장해, 완성된
            결과물을 보았을 때 다가오는 성취감과 뿌듯함은 게임을 할 때와 같이
            매우 소중합니다.
            <br />
            여러 경험들을 거쳐 이제는 아무것도 없는 공간에, 협업하는 이들의 모든
            노력들을 표현할 수 있는 기술을 가졌습니다.
            <br />
            <br />
            스스로 더욱 발전하며 즐거운 성취감을 느낄 수 있도록 더욱 높은 곳을
            위해 끈임없이 도전하고 노력해 나아가겠습니다.
          </Text>
        </div>
      </div>
    </article>
  )
}

export default React.memo(About, isEqual)
