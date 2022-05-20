import isEqual from 'fast-deep-equal'
import React from 'react'
import { Actions, useDispatch, useSelector } from 'store'
import remote from 'styles/remote.module.scss'

interface PowerBtnProps {}

const PowerBtn: React.FC<PowerBtnProps> = (props) => {
  const {} = props

  const dispatch = useDispatch()

  const handleClickPower = React.useCallback(() => {
    dispatch(Actions.remote.powerOnOff())
  }, [dispatch])

  return (
    <div className={remote.btn_power} onClick={handleClickPower}>
      <button area-label="power_btn">
        power button
        <i className="power_icon"></i>
      </button>
    </div>
  )
}

export default React.memo(PowerBtn, isEqual)
