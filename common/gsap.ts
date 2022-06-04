import { gsap } from 'gsap'
import { NextRouter } from 'next/router'
import { Actions, Dispatch } from 'store'

export const turnOff = (
  current: HTMLHeadingElement,
  router: NextRouter,
  dispatch: Dispatch
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
      if (router) {
        dispatch(Actions.remote.changeChannel('up'))
        // router.push('/ch/about')
      }
    })
}

export const turnOnOff = (current: HTMLHeadingElement) => {
  const timeLine = gsap.timeline()

  timeLine
    .to(current, {
      backgroundColor: '#222222',
      width: '100%',
      height: '2px',
      ease: 'Power4.easeOut',
      duration: 0.1,
    })
    .to(current, {
      width: '100%',
      height: 'calc(calc(var(--MOBILE-vh, 1vh) * 100) - 7.778rem)',
      duration: 0.2,
    })
    .delay(1)
}
