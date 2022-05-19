import isEqual from 'fast-deep-equal'
import React from 'react'
import { Actions, useDispatch, useSelector } from 'store'
import remote from 'styles/remote.module.scss'

interface ChannelBtnProps {}

const ChannelBtn: React.FC<ChannelBtnProps> = (props) => {
  const {} = props

  const { chInfo } = useSelector((props) => props.channel)
  const dispatch = useDispatch()

  const handleClickChUp = React.useCallback(() => {
    if (chInfo.chNum < 4) dispatch(Actions.remote.changeChannel('up'))
  }, [dispatch, chInfo.chNum])

  const handleClickChDown = React.useCallback(() => {
    if (chInfo.chNum > 1) dispatch(Actions.remote.changeChannel('down'))
  }, [dispatch, chInfo.chNum])

  return (
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
  )
}

export default React.memo(ChannelBtn, isEqual)
