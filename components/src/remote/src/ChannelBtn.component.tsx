import isEqual from 'fast-deep-equal'
import React from 'react'
import remote from 'styles/remote.module.scss'

interface ChannelBtnProps {
  onClickUp: () => void
  onClickDown: () => void
}

const ChannelBtn: React.FC<ChannelBtnProps> = (props) => {
  const { onClickUp, onClickDown } = props

  const handleClickChUp = React.useCallback(() => {
    onClickUp()
  }, [])
  const handleClickChDown = React.useCallback(() => {
    onClickDown()
  }, [])

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
