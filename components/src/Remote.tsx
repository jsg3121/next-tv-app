import React from 'react'
import isEqual from 'fast-deep-equal'
import remote from 'styles/remote.module.scss'
import Image from 'next/image'
import styled from 'styled-components'

interface RemoteProps {}

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

const Remote: React.FC<RemoteProps> = (props) => {
  const {} = props
  const activeRef = React.useRef<HTMLDivElement>(null)

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

  const themeImg = React.useMemo(() => {
    return (
      <>
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
      </>
    )
  }, [])

  return (
    <>
      <div className={remote.container}>
        <div className={remote.controller_container}>
          <div className={remote.btn_power}>
            <button>
              <i></i>
            </button>
          </div>
          <Lights ref={activeRef}>
            <i></i>
          </Lights>
        </div>
        <div className={remote.channel_btn}>
          <ul className={remote.btn_container}>
            <li
              onMouseDown={handleSignal}
              onMouseUp={handleOff}
              className="ch_up"
            ></li>
            <li
              onMouseDown={handleSignal}
              onMouseUp={handleOff}
              className="ch_right"
            ></li>
            <li
              onMouseDown={handleSignal}
              onMouseUp={handleOff}
              className="ch_down"
            ></li>
            <li
              onMouseDown={handleSignal}
              onMouseUp={handleOff}
              className="ch_left"
            ></li>
            <li
              onMouseDown={handleSignal}
              onMouseUp={handleOff}
              className="ch_ok"
            >
              OK
            </li>
          </ul>
        </div>
        <div className={remote.switch_theme}>
          <input type="checkbox" name="theme" id="theme" />
          <label htmlFor="theme">
            <i></i>
          </label>
          <div className={remote.theme_icon}>{themeImg}</div>
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
  )
}

export default React.memo(Remote, isEqual)