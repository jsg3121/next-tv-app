import { createAction } from '@reduxjs/toolkit'

type ChannelSetInfo = {
  chNum: number
  chName: string
}
type ChannelType = 'up' | 'down'
type Arrow = 'up' | 'left' | 'right' | 'down'

// intro 오프닝
export const channelOpenning = createAction<void, '@@CHANNEL/OPENNING'>(
  '@@CHANNEL/OPENNING'
)

// 새로고침시 적용되는 채널 정보
export const channelSet = createAction<ChannelSetInfo, '@@CHANNEL/CHANNELSET'>(
  '@@CHANNEL/CHANNELSET'
)

// 새로고침시 적용되는 채널 정보
export const refreshChannel = createAction<number, '@@CHANNEL/REFRESH'>(
  '@@CHANNEL/REFRESH'
)

export const showBtnInfo = createAction<boolean, '@@CHANNEL/BTNINFO'>(
  '@@CHANNEL/BTNINFO'
)

export const channelBtnArrow = createAction<Arrow, '@@CHANNEL/ARROW'>(
  '@@CHANNEL/ARROW'
)

// 전원 끄고 키기
export const powerOnOff = createAction<void, '@@CHANNEL/POWER_ON_OFF'>(
  '@@CHANNEL/POWER_ON_OFF'
)

// 전원 채널 정보 표시
export const channelInfoShow = createAction<void, '@@CHANNEL/INFO_SHOW'>(
  '@@CHANNEL/INFO_SHOW'
)

// 화면 채널 정보 표시 해제
export const channelInfoHide = createAction<void, '@@CHANNEL/INFO_HIDE'>(
  '@@CHANNEL/INFO_HIDE'
)

// 채널 변경
export const changeChannel = createAction<
  ChannelType,
  '@@CHANNEL/CHANE_BUTTON'
>('@@CHANNEL/CHANE_BUTTON')
