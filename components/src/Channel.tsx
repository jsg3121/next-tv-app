import React from 'react'
import isEqual from 'fast-deep-equal'
import channel from 'styles/channel.module.scss'
import { Title } from './Title'

interface ChannelProps {
  chNumber: number | string
  chName: string
}

const Channel: React.FC<ChannelProps> = (props) => {
  const { chName, chNumber } = props
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
        <div className={channel.container}>
          <Title depth={1}>{chNumber}</Title>
          <Title depth={2}>{chName}</Title>
        </div>
      )}
    </>
  )
}

export default React.memo(Channel, isEqual)
