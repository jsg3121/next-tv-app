import isEqual from 'fast-deep-equal'
import Image from 'next/image'
import { useRouter } from 'next/router'
import React from 'react'
import { Actions, useDispatch, useSelector } from 'store'
import styled from 'styled-components'
import remote from 'styles/remote.module.scss'

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

const Remote: React.FC = () => {
  const activeRef = React.useRef<HTMLDivElement>(null)
  const [isShow, setIsShow] = React.useState<boolean>(true)

  const { chNum, power } = useSelector((props) => props.channel)

  const router = useRouter()
  const dispatch = useDispatch()

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

  const handleClickChUp = React.useCallback(() => {
    if (chNum < 4) dispatch(Actions.remote.changeChannel('up'))
  }, [dispatch, chNum])

  const handleClickChDown = React.useCallback(() => {
    if (chNum > 1) dispatch(Actions.remote.changeChannel('down'))
  }, [dispatch, chNum])

  const handleClickOK = React.useCallback(() => {
    dispatch(Actions.remote.powerOnOff(!power))
  }, [dispatch, power])

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
              <div className={remote.btn_power} onClick={handleClickOK}>
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
                <i onClick={handleClickChUp}>channel up</i>
                <i onClick={handleClickChDown}>channel down</i>
                <p>CH</p>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  )
}

export default React.memo(Remote, isEqual)
