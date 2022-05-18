import isEqual from 'fast-deep-equal'
import React from 'react'
import { Actions, useDispatch, useSelector } from 'store'
import remote from 'styles/remote.module.scss'

interface ArrowBtnProps {
  onMouseDown: () => void
  onMouseUp: () => void
}

const ArrowBtn: React.FC<ArrowBtnProps> = (props) => {
  const { onMouseDown, onMouseUp } = props

  const { chInfo } = useSelector((props) => props.channel)
  const dispatch = useDispatch()

  const handleMouseDown = React.useCallback(() => {
    onMouseDown()
  }, [])

  const handleMouseUp = React.useCallback(() => {
    onMouseUp()
  }, [])

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

  const handleClickOK = React.useCallback(() => {
    dispatch(Actions.remote.showBtnInfo(true))
  }, [dispatch])

  return (
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
  )
}

export default React.memo(ArrowBtn, isEqual)
