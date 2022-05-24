import isEqual from 'fast-deep-equal'
import React from 'react'
import remote from 'styles/remote.module.scss'

interface ChannelBtnProps {
  onClickUp: () => void
  onClickDown: () => void
  onMouseDown: () => void
  onMouseUp: () => void
}

const ChannelBtn: React.FC<ChannelBtnProps> = (props) => {
  const { onMouseDown, onMouseUp, onClickUp, onClickDown } = props

  const handleMouseDown = React.useCallback(() => {
    onMouseDown()
  }, [onMouseDown])

  const handleMouseUp = React.useCallback(() => {
    onMouseUp()
  }, [onMouseUp])

  const handleClickChUp = React.useCallback(() => {
    onClickUp()
  }, [onClickUp])
  const handleClickChDown = React.useCallback(() => {
    onClickDown()
  }, [onClickDown])

  return (
    <div className={remote.channel_btn_container}>
      <div>
        <i onMouseDown={handleMouseDown} onMouseUp={handleMouseUp}>
          volum up
        </i>
        <i onMouseDown={handleMouseDown} onMouseUp={handleMouseUp}>
          volum up
        </i>
        <p>VOL</p>
      </div>
      <div>
        <i
          onClick={handleClickChUp}
          onMouseDown={handleMouseDown}
          onMouseUp={handleMouseUp}
        >
          channel up
        </i>
        <i
          onClick={handleClickChDown}
          onMouseDown={handleMouseDown}
          onMouseUp={handleMouseUp}
        >
          channel down
        </i>
        <p>CH</p>
      </div>
    </div>
  )
}

export default React.memo(ChannelBtn, isEqual)
