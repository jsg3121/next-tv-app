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

  const { chInfo, power } = useSelector((props) => props.channel)

  const router = useRouter()
  const dispatch = useDispatch()

  const handleMouseDown = React.useCallback(() => {
    if (activeRef.current) {
      activeRef.current.classList.add('active')
    }
  }, [])

  const handleMouseUp = React.useCallback(() => {
    if (activeRef.current) {
      activeRef.current.classList.remove('active')
    }
  }, [])

  const handleClickChUp = React.useCallback(() => {
    if (chInfo.chNum < 4) dispatch(Actions.remote.changeChannel('up'))
  }, [dispatch, chInfo.chNum])

  const handleClickChDown = React.useCallback(() => {
    if (chInfo.chNum > 1) dispatch(Actions.remote.changeChannel('down'))
  }, [dispatch, chInfo.chNum])

  const handleClickOK = React.useCallback(() => {
    dispatch(Actions.remote.showBtnInfo(true))
  }, [dispatch])

  const handleClickArrow = React.useCallback(
    (val: 'up' | 'left' | 'right' | 'down') => () => {
      switch (val) {
        case 'up':
          if (chInfo.chNum < 4) dispatch(Actions.remote.channelBtnArrow(val))
          break
        case 'down':
          if (chInfo.chNum > 1) dispatch(Actions.remote.channelBtnArrow(val))
          break
        case 'left':
          // if (chInfo.chNum < 4) dispatch(Actions.remote.channelBtnArrow(val))
          break
        case 'right':
          // if (chInfo.chNum < 4) dispatch(Actions.remote.channelBtnArrow(val))
          break
      }
    },
    [dispatch, chInfo.chNum]
  )

  const handleClickPower = React.useCallback(() => {
    dispatch(Actions.remote.powerOnOff(!power))
    if (!power) {
      dispatch(Actions.remote.channelInfoShow(true))

      const timeOut = setTimeout(() => {
        dispatch(Actions.remote.channelInfoShow(false))
      }, 2000)
      return () => clearTimeout(timeOut)
    }

    if (power) {
      dispatch(Actions.remote.channelInfoShow(false))
    }
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
              <div className={remote.btn_power} onClick={handleClickPower}>
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
                <li
                  onMouseDown={handleMouseDown}
                  onMouseUp={handleMouseUp}
                  onClick={handleClickArrow('up')}
                />
                <li
                  onMouseDown={handleMouseDown}
                  onMouseUp={handleMouseUp}
                  onClick={handleClickArrow('right')}
                />
                <li
                  onMouseDown={handleMouseDown}
                  onMouseUp={handleMouseUp}
                  onClick={handleClickArrow('down')}
                />
                <li
                  onMouseDown={handleMouseDown}
                  onMouseUp={handleMouseUp}
                  onClick={handleClickArrow('left')}
                />
                <li
                  onMouseDown={handleMouseDown}
                  onMouseUp={handleMouseUp}
                  onClick={handleClickOK}
                >
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
