import isEqual from 'fast-deep-equal'
import React from 'react'
import { Actions, useDispatch, useSelector } from 'store'
import remote from 'styles/remote.module.scss'

interface PowerBtnProps {}

const PowerBtn: React.FC<PowerBtnProps> = (props) => {
  const {} = props

  const { power } = useSelector((props) => props.channel)
  const dispatch = useDispatch()

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
