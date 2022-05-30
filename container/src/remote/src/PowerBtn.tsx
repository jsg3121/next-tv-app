import isEqual from 'fast-deep-equal'
import React from 'react'
import { Actions, useDispatch } from 'store'
import remote from 'styles/remote.module.scss'

interface PowerBtnProps {
  onMouseDown: () => void
  onMouseUp: () => void
}

const PowerBtn: React.FC<PowerBtnProps> = (props) => {
  const { onMouseDown, onMouseUp } = props

  const dispatch = useDispatch()

  const handleMouseDown = React.useCallback(() => {
    onMouseDown()
  }, [onMouseDown])

  const handleMouseUp = React.useCallback(() => {
    onMouseUp()
  }, [onMouseUp])

  const handleClickPower = React.useCallback(() => {
    dispatch(Actions.remote.powerOnOff())
  }, [dispatch])

  return (
    <div className={remote.btn_power} onClick={handleClickPower}>
      <button
        area-label="power_btn"
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
      >
        power button
        <i className="power_icon"></i>
      </button>
    </div>
  )
}

export default React.memo(PowerBtn, isEqual)
