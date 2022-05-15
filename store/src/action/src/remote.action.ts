import { createAction } from '@reduxjs/toolkit'

type ChannelSetInfo = {
  chNum: number
  chName: string
}

type ChannelType = 'up' | 'down'

type Arrow = 'up' | 'left' | 'right' | 'down'

export const channelOpenning = createAction<void, '@@CHANNEL/OPENNING'>(
  '@@CHANNEL/OPENNING'
)

export const channelSet = createAction<ChannelSetInfo, '@@CHANNEL/CHANNELSET'>(
  '@@CHANNEL/CHANNELSET'
)

export const changeChannel = createAction<ChannelType, '@@CHANNEL/NUMBER'>(
  '@@CHANNEL/NUMBER'
)

export const refreshChannel = createAction<number, '@@CHANNEL/REFRESH'>(
  '@@CHANNEL/REFRESH'
)

export const powerOnOff = createAction<boolean, '@@CHANNEL/POWER'>(
  '@@CHANNEL/POWER'
)

export const channelInfoShow = createAction<boolean, '@@CHANNEL/INFO'>(
  '@@CHANNEL/INFO'
)

export const showBtnInfo = createAction<boolean, '@@CHANNEL/BTNINFO'>(
  '@@CHANNEL/BTNINFO'
)

export const channelBtnArrow = createAction<Arrow, '@@CHANNEL/ARROW'>(
  '@@CHANNEL/ARROW'
)
