import React from 'react'
import isEqual from 'fast-deep-equal'
import channel from 'styles/channel.module.scss'
import { Title } from './Title'
import styled from 'styled-components'

import dayjs from 'dayjs'
import utc from 'dayjs/plugin/utc'
import timezone from 'dayjs/plugin/timezone'

dayjs.extend(utc)
dayjs.extend(timezone)
dayjs().format()

interface ChannelProps {
  chNumber: string
  chName: string
  progress: number
  broadcast: string
}

const Progress = styled((props) => {
  return <p {...props}>진행막대</p>
})`
  font-size: 0;
  width: ${(props) => props.progress}%;
  height: 0.5rem;
  background-color: #e5e4f1;
  border-radius: 0.25rem;
`

const Channel: React.FC<ChannelProps> = (props) => {
  const { chName, chNumber, progress, broadcast } = props
  const [isShow, setIsShow] = React.useState<boolean>(true)

  React.useEffect(() => {
    const show = setInterval(() => {
      setIsShow(false)
    }, 1500)

    return () => {
      return clearInterval(show)
    }
  }, [])

  return (
    <>
      {isShow && (
        <>
          <div className={channel.container}>
            <Title depth={1}>{chNumber}</Title>
            <Title depth={2}>{chName}</Title>
          </div>
          <div className={channel.epg_container}>
            <div className={channel.channel_number}>
              <h1>{chNumber}</h1>
            </div>
            <div className={channel.epg_progress}>
              <div className={channel.ch_info}>
                <p>{chName}</p>
                <p>현재 시간 {dayjs().format('HH:mm')}</p>
              </div>
              <div className={channel.progress_info}>
                <div className={channel.broadcast_name}>
                  <p>{broadcast}</p>
                </div>
                <span className={channel.progress_bar}>
                  <Progress progress={progress} />
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
        <h1>{chName}</h1>
      </div>
    </>
  )
}

export default React.memo(Channel, isEqual)
