import { Text, Title } from 'components'
import isEqual from 'fast-deep-equal'
import { gsap } from 'gsap'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import about from 'styles/about.module.scss'

/**
 * info : bounce effect
 * @param {HTMLHeadingElement} current HTMLHeadingElement
 */
const bounceEffect = (current: HTMLElement) => {
  gsap
    .timeline()
    .to(current, {
      y: '-220%',
      duration: 0,
    })
    .to(current, {
      y: 0,
      duration: 2,
      ease: 'bounce.out',
    })
    .to(
      current,
      {
        duration: 2,
        rotateZ: -720,
        x: -10,
      },
      '-=1.75'
    )
    .to(
      current,
      {
        transformOrigin: 'bottom left',
        rotateZ: -730,
        ease: 'power2.out',
        duration: 1,
      },
      2.15
    )
    .to(current, {
      rotateZ: -720,
      x: 0,
      duration: 0.3,
      ease: 'power4.out',
    })
    .delay(3)
}

const bounceEffect2 = (current: HTMLDivElement) => {
  gsap
    .timeline()
    .to(current, {
      y: '-50%',
      duration: 0.5,
      ease: 'expo.out',
    })
    .delay(3.75)
  gsap
    .timeline()
    .to(current, {
      y: '-30%',
      duration: 0.5,
      ease: 'expo.out',
    })
    .delay(4.5)
  gsap
    .timeline()
    .to(current, {
      y: '-10%',
      duration: 0.5,
      ease: 'expo.out',
    })
    .delay(4.875)
  gsap
    .timeline()
    .to(current, {
      y: '-5%',
      duration: 0.5,
      ease: 'expo.out',
    })
    .delay(5.125)
  gsap
    .timeline()
    .to(current, {
      y: 0,
      duration: 0.5,
      ease: 'expo.out',
    })
    .delay(6.325)
}

const About: React.FC = () => {
  const pictureRef = React.useRef<HTMLElement>(null)
  const descriptionRef = React.useRef<HTMLDivElement>(null)

  React.useEffect(() => {
    if (pictureRef.current) bounceEffect(pictureRef.current)
    if (descriptionRef.current) bounceEffect2(descriptionRef.current)
  }, [])

  return (
    <article className={about.container} id="about">
      <div>
        <Title depth={1}>ABOUT ME</Title>
        <div className={about.profile_info}>
          <picture className={about.profile} ref={pictureRef}>
            <figure>
              <Image
                src="/profile.webp"
                alt="profile_image"
                layout="fill"
                loading="lazy"
                style={{
                  borderRadius: '0.555rem',
                  zIndex: '-1',
                }}
              />
            </figure>
          </picture>
          <ul className={about.info_list}>
            <li>
              <Title depth={3}>NAME</Title>
              <Text>&nbsp;:&nbsp;장선규 (Jang Sungyu)</Text>
            </li>
            <li>
              <Title depth={3}>BIRTH</Title>
              <Text>&nbsp;:&nbsp;1995. 08. 09</Text>
            </li>
            <li>
              <Title depth={3}>VELOG</Title>
              <Link href="https://velog.io/@jsg3121">
                <a target="_blank">&nbsp;:&nbsp;https://velog.io/@jsg3121</a>
              </Link>
            </li>
            <li>
              <Title depth={3}>WAKATIME</Title>
              <Link href="https://wakatime.com/@jsg3121">
                <a target="_blank">
                  &nbsp;:&nbsp;https://wakatime.com/@jsg3121
                </a>
              </Link>
            </li>
            <li>
              <Title depth={3}>CAREER</Title>
              <Text>&nbsp;:&nbsp;Quber Web Developer ( 2019. 11 ~ )</Text>
            </li>
            <li>
              <Title depth={3}> </Title>
              <Text>
                &nbsp;&nbsp;&nbsp;Cresector Web Developer ( 2018. 06 ~ 2019. 07
                )
              </Text>
            </li>
          </ul>
        </div>
        <div className={about.info_description} ref={descriptionRef}>
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
