import { BroadcastTime, timeSet } from 'common'
import { Title } from 'components'
import isEqual from 'fast-deep-equal'
import React from 'react'
import { Actions, useDispatch, useSelector } from 'store'
import styled from 'styled-components'
import channel from 'styles/channel.module.scss'

const Progress = styled((props) => {
  return <p {...props}>진행막대</p>
})`
  font-size: 0;
  width: ${(props) => props.progress}%;
  height: 0.5rem;
  background-color: #e5e4f1;
  border-radius: 0.25rem;
`

const Channel: React.FC = () => {
  const [date, setDate] = React.useState<BroadcastTime>()

  const dispatch = useDispatch()
  const {
    btn_show,
    chShow: isShow,
    chInfo,
    beforeChInfo,
  } = useSelector(({ channel }) => channel)

  React.useEffect(() => {
    dispatch(Actions.remote.channelInfoShow())
  }, [dispatch])

  React.useEffect(() => {
    setDate(timeSet())
  }, [])

  return (
    <section>
      {isShow && (
        <div className={channel.container}>
          <Title depth={1}>00{beforeChInfo.chNum}</Title>
          <Title depth={2}>{beforeChInfo.chName}</Title>
        </div>
      )}
      {(isShow || btn_show) && (
        <div className={channel.epg_container}>
          <div className={channel.channel_number}>
            <h1>00{chInfo.chNum}</h1>
          </div>
          <div className={channel.epg_progress}>
            <div className={channel.ch_info}>
              <p>{chInfo.chName}</p>
              <p>{date?.now}</p>
            </div>
            <div className={channel.progress_info}>
              <div className={channel.broadcast_name}>
                <p>{chInfo.broadcast}</p>
              </div>
              <span className={channel.progress_bar}>
                <Progress progress={chInfo.progress} />
              </span>
              <div className={channel.broadcast_time}>
                <p>{date?.before}</p>
                <p>{date?.after}</p>
              </div>
            </div>
          </div>
        </div>
      )}
      <div className={channel.channel_wartermark}>
        <h1>{beforeChInfo.chName}</h1>
      </div>
    </section>
  )
}

export default React.memo(Channel, isEqual)
