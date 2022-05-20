import isEqual from 'fast-deep-equal'
import React from 'react'
import { Actions, useDispatch } from 'store'
import remote from 'styles/remote.module.scss'

interface ArrowBtnProps {
  onMouseDown: () => void
  onMouseUp: () => void
  onClick: (arrow: 'up' | 'down') => void
}

const ArrowBtn: React.FC<ArrowBtnProps> = (props) => {
  const { onMouseDown, onMouseUp, onClick } = props

  const dispatch = useDispatch()

  const handleMouseDown = React.useCallback(() => {
    onMouseDown()
  }, [])

  const handleMouseUp = React.useCallback(() => {
    onMouseUp()
  }, [])

  const handleClickArrow = React.useCallback(
    (arrow: 'up' | 'down') => () => {
      onClick(arrow)
    },
    []
  )

  const handleClickOK = React.useCallback(() => {
    dispatch(Actions.remote.okBtn(true))
  }, [dispatch])

  return (
    <div className={remote.arrow_btn}>
      <ul className={remote.btn_container}>
        <li
          onMouseDown={handleMouseDown}
          onMouseUp={handleMouseUp}
          onClick={handleClickArrow('up')}
        />
        <li onMouseDown={handleMouseDown} onMouseUp={handleMouseUp} />
        <li
          onMouseDown={handleMouseDown}
          onMouseUp={handleMouseUp}
          onClick={handleClickArrow('down')}
        />
        <li onMouseDown={handleMouseDown} onMouseUp={handleMouseUp} />
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
