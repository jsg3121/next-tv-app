import isEqual from 'fast-deep-equal'
import { useRouter } from 'next/router'
import React from 'react'
import styled from 'styled-components'
import remote from 'styles/remote.module.scss'
import { ArrowBtn, ChannelBtn, PowerBtn, ThemeBtn } from './remote'

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

  const router = useRouter()

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
              <PowerBtn />
              <Lights ref={activeRef}>
                <i></i>
              </Lights>
            </div>
            <ArrowBtn onMouseDown={handleMouseDown} onMouseUp={handleMouseUp} />
            <ThemeBtn />
            <ChannelBtn />
          </div>
        </>
      )}
    </>
  )
}

export default React.memo(Remote, isEqual)
