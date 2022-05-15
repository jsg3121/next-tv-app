import React from 'react'
import isEqual from 'fast-deep-equal'
import channel from 'styles/channel.module.scss'
import { Title } from '../../components/src/Title'
import styled from 'styled-components'

import dayjs from 'dayjs'
import utc from 'dayjs/plugin/utc'
import timezone from 'dayjs/plugin/timezone'
import { Actions, useDispatch, useSelector } from 'store'

dayjs.extend(utc)
dayjs.extend(timezone)
dayjs().format()

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
    <>
      {isShow && (
        <>
          <div className={channel.container}>
            <Title depth={1}>00{chInfo.chNum}</Title>
            <Title depth={2}>{chInfo.chName}</Title>
          </div>
        </>
      )}
      {(isShow || btn_show) && (
        <>
          <div className={channel.epg_container}>
            <div className={channel.channel_number}>
              <h1>00{chInfo.chNum}</h1>
            </div>
            <div className={channel.epg_progress}>
              <div className={channel.ch_info}>
                <p>{chInfo.chName}</p>
                <p>현재 시간 {dayjs().format('HH:mm')}</p>
              </div>
              <div className={channel.progress_info}>
                <div className={channel.broadcast_name}>
                  <p>{chInfo.broadcast}</p>
                </div>
                <span className={channel.progress_bar}>
                  <Progress progress={chInfo.progress} />
                </span>
                <div className={channel.broadcast_time}>
                  <p>{dayjs().subtract(1, 'hour').format('HH:mm')}</p>
                  <p>{dayjs().add(1, 'hour').format('HH:mm')}</p>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
      <div className={channel.channel_wartermark}>
        <h1>{beforeChInfo ? beforeChInfo.chName : chInfo.chName}</h1>
      </div>
    </>
  )
}

export default React.memo(Channel, isEqual)
