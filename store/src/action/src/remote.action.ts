import { createAction } from '@reduxjs/toolkit'

type ChannelType = 'up' | 'down'

export const changeChannel = createAction<ChannelType, '@@CHANNEL/NUMBER'>(
  '@@CHANNEL/NUMBER'
)

export const powerOnOff = createAction<boolean, '@@CHANNEL/POWER'>(
  '@@CHANNEL/POWER'
)

export const channelInfoShow = createAction<void, '@@CHANNEL/INFO'>(
  '@@CHANNEL/INFO'
)
