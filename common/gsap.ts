import { NextRouter } from 'next/router'
import { gsap } from 'gsap'

export const turnOff = (
  current: HTMLHeadingElement,
  router: NextRouter
): void => {
  gsap
    .timeline()
    .to(current, {
      filter: 'grayscale(0)',
      duration: 0.5,
    })
    .to(current, {
      width: '100%',
      height: '2px',
      ease: 'Power4.easeOut',
      duration: 0.1,
      delay: 0.5,
    })
    .to(current, {
      width: '0',
      height: '0',
      duration: 0.1,
    })
    .then(() => {
      router.push('/ch/about')
    })
}

export const turnOnOff = (current: HTMLHeadingElement) => {
  const timeLine = gsap.timeline()

  timeLine
    .to(current, {
      width: '100%',
      height: '2px',
      ease: 'Power4.easeOut',
      duration: 0.1,
    })
    .to(current, {
      width: '0',
      height: '0',
      duration: 0.2,
    })
    .to(current, {
      width: '100%',
      height: '2px',
      ease: 'Power4.easeOut',
      duration: 0.2,
      backgroundImage: 'none',
    })
    .to(current, {
      width: '100%',
      height: 'calc(100vh - 7.778rem)',
      duration: 0.1,
    })
    .delay(1)
}
