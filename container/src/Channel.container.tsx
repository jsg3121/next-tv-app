import { Title } from 'components'
import dayjs from 'dayjs'
import 'dayjs/locale/ko'
import timezone from 'dayjs/plugin/timezone'
import utc from 'dayjs/plugin/utc'
import isEqual from 'fast-deep-equal'
import React from 'react'
import { Actions, useDispatch, useSelector } from 'store'
import styled from 'styled-components'
import channel from 'styles/channel.module.scss'

dayjs.extend(timezone)
dayjs.extend(utc)

dayjs.tz.setDefault('Asia/Seoul')
dayjs.locale('ko')

const Progress = styled((props) => {
  return <p {...props}>진행막대</p>
})`
  font-size: 0;
  width: ${(props) => props.progress}%;
  height: 0.5rem;
  background-color: #e5e4f1;
  border-radius: 0.25rem;
`

const date = new Date()

const Channel: React.FC = () => {
  const dispatch = useDispatch()
  const {
    btn_show,
    chShow: isShow,
    chInfo,
    beforeChInfo,
  } = useSelector(({ channel }) => channel)

  React.useEffect(() => {
    dispatch(Actions.remote.channelInfoShow(true))

    const timeOut = setTimeout(() => {
      dispatch(Actions.remote.channelInfoShow(false))
    }, 2000)

    return () => clearTimeout(timeOut)
  }, [dispatch])

  return (
    <section>
      {isShow && (
        <div className={channel.container}>
          <Title depth={1}>00{chInfo.chNum}</Title>
          <Title depth={2}>{chInfo.chName}</Title>
        </div>
      )}
      <div className={channel.epg_container}>
        <div className={channel.channel_number}>
          <h1>00{chInfo.chNum}</h1>
        </div>
        <div className={channel.epg_progress}>
          <div className={channel.ch_info}>
            <p>{chInfo.chName}</p>
            <p>현재 시간 {dayjs(date).format('HH:mm')}</p>
          </div>
          <div className={channel.progress_info}>
            <div className={channel.broadcast_name}>
              <p>{chInfo.broadcast}</p>
            </div>
            <span className={channel.progress_bar}>
              <Progress progress={chInfo.progress} />
            </span>
            <div className={channel.broadcast_time}>
              <p>{dayjs(date).subtract(1, 'h').format('HH:mm')}</p>
              <p>{dayjs(date).add(1, 'h').format('HH:mm')}</p>
            </div>
          </div>
        </div>
      </div>
      <div className={channel.channel_wartermark}>
        <h1>{beforeChInfo ? beforeChInfo.chName : chInfo.chName}</h1>
      </div>
    </section>
  )
}

export default React.memo(Channel, isEqual)
