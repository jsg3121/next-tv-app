import React from 'react'
import isEqual from 'fast-deep-equal'
import remote from 'styles/remote.module.scss'
import Image from 'next/image'
import styled from 'styled-components'
import { useRouter } from 'next/router'

const Lights = styled.div`
  width: 0.8rem;
  height: 0.3rem;
  border-radius: 1.5rem;
  position: absolute;
  background-color: #afafaf;
  right: 0;
  box-shadow: 0.4px 0.8px 1px -0.2px #888888, inset 0.5px 0.3px 1px #ffffff;

  &.active {
    background-color: #a5e741 !important;
  }
`

const channelChange = (arrow: 'up' | 'down') => {
  const channelNumber = sessionStorage.getItem('chNum')
  switch (channelNumber) {
    case '1':
      if (arrow === 'up') {
        return '/ch/about'
      }
      break
    case '2':
      if (arrow === 'up') {
        return '/ch/project'
      }
      if (arrow === 'down') {
        return '/ch/intro'
      }
      break
    case '3':
      if (arrow === 'up') {
        return '/ch/contact'
      }
      if (arrow === 'down') {
        return '/ch/about'
      }
      break
    case '4':
      if (arrow === 'down') {
        return '/ch/project'
      }
    default:
      return '#'
  }
}

const Remote: React.FC = () => {
  const activeRef = React.useRef<HTMLDivElement>(null)
  const [isShow, setIsShow] = React.useState<boolean>(true)

  const router = useRouter()

  const handleSignal = React.useCallback(() => {
    if (activeRef.current) {
      activeRef.current.classList.add('active')
    }
  }, [])

  const handleOff = React.useCallback(() => {
    if (activeRef.current) {
      activeRef.current.classList.remove('active')
    }
  }, [])

  const handleClickUp = React.useCallback(() => {
    const ch = channelChange('up')
    if (ch) {
      router.push(ch)
    }
  }, [router])

  const handleClickDown = React.useCallback(() => {
    const ch = channelChange('down')
    if (ch) {
      router.push(ch)
    }
  }, [router])

  React.useEffect(() => {
    if (router.pathname === '/ch/intro') {
      const timeOut = setTimeout(() => {
        setIsShow(true)

        return () => {
          return clearTimeout(timeOut)
        }
      }, 5500)
    }
    if (router.pathname !== '/ch/intro') {
      setIsShow(true)
    }
  }, [router.pathname])

  return (
    <>
      {isShow && (
        <>
          <div className={remote.container}>
            <div className={remote.controller_container}>
              <div className={remote.btn_power}>
                <button area-label="power_btn">
                  power button
                  <i className="power_icon"></i>
                </button>
              </div>
              <Lights ref={activeRef}>
                <i></i>
              </Lights>
            </div>
            <div className={remote.arrow_btn}>
              <ul className={remote.btn_container}>
                <li onMouseDown={handleSignal} onMouseUp={handleOff} />
                <li onMouseDown={handleSignal} onMouseUp={handleOff} />
                <li onMouseDown={handleSignal} onMouseUp={handleOff} />
                <li onMouseDown={handleSignal} onMouseUp={handleOff} />
                <li onMouseDown={handleSignal} onMouseUp={handleOff}>
                  OK
                </li>
              </ul>
            </div>
            <div className={remote.switch_theme}>
              <input type="checkbox" name="theme" id="theme" />
              <label htmlFor="theme">
                theme change toggle
                <i></i>
              </label>
              <div className={remote.theme_icon}>
                <i>
                  <Image
                    src="/theme_light.svg"
                    layout="fill"
                    alt="icon_theme"
                    priority
                  />
                </i>
                <i>
                  <Image
                    src="/theme_dark.svg"
                    layout="fill"
                    alt="icon_theme"
                    priority
                  />
                </i>
              </div>
            </div>
            <div className={remote.channel_btn_container}>
              <div>
                <i>volum up</i>
                <i>volum up</i>
                <p>VOL</p>
              </div>
              <div>
                <i onClick={handleClickUp}>channel up</i>
                <i onClick={handleClickDown}>channel down</i>
                <p>CH</p>
              </div>
            </div>
            {/* <div className="keypad">
          <ul>
            <li>
              <button className="keypad_number">1</button>
            </li>
            <li>
              <button className="keypad_number">2</button>
            </li>
            <li>
              <button className="keypad_number">3</button>
            </li>
            <li>
              <button className="keypad_number">4</button>
            </li>
            <li>
              <button className="keypad_number">5</button>
            </li>
            <li>
              <button className="keypad_number">6</button>
            </li>
            <li>
              <button className="keypad_number">7</button>
            </li>
            <li>
              <button className="keypad_number">8</button>
            </li>
            <li>
              <button className="keypad_number">9</button>
            </li>
            <li>
              <button className="keypad_number">0</button>
            </li>
          </ul>
        </div> */}
          </div>
        </>
      )}
    </>
  )
}

export default React.memo(Remote, isEqual)
