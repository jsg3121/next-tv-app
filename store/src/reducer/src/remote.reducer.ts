import { createReducer } from '@reduxjs/toolkit'
import produce from 'immer'
import Router from 'next/router'
import { remoteActions } from 'store/src/action'

export type RemoteStateType = {
  chInfo: {
    chNum: number
    chName: string
    progress: number
    broadcast: string
  }
  power: boolean
  chShow: boolean
  btn_show: boolean
  beforeChInfo: {
    chNum: number
    chName: string
    progress: number
    broadcast: string
  }
  openning: boolean
}

const channelState: RemoteStateType = {
  chInfo: {
    chNum: 1,
    chName: 'Intro',
    broadcast: '',
    progress: 0,
  },
  power: true,
  chShow: true,
  btn_show: false,
  openning: false,
  beforeChInfo: {
    chNum: 0,
    chName: '',
    progress: 0,
    broadcast: '',
  },
}

const chList = ['Intro', 'About', 'Project', 'Contact']
const broadcast = ['시작', 'Who Am I?', 'Portfolio', 'Devfolio the movie']
const progress = [0, 10, 60, 90]

const remoteReducer = createReducer<RemoteStateType>(
  channelState,
  (builder) => {
    builder
      .addCase(remoteActions.channelOpenning, (store, _) => {
        return produce(store, (draft) => {
          draft.openning = true
        })
      })
      .addCase(remoteActions.channelSet, (store, { payload }) => {
        return produce(store, (draft) => {
          draft.chInfo.broadcast = broadcast[payload.chNum - 1]
          draft.chInfo.chName = payload.chName
          draft.chInfo.chNum = payload.chNum
          draft.chInfo.progress = progress[payload.chNum - 1]
        })
      })
      // info : 페이지 렌더링시 채널정보 저장 ↓↓
      .addCase(remoteActions.refreshChannel, (store, { payload }) => {
        return produce(store, (draft) => {
          draft.chInfo.chNum = payload
          draft.chInfo.chName = chList[payload - 1]
          draft.beforeChInfo = store.chInfo
        })
      })
      // info : 전원버튼 기능 ↓↓
      .addCase(remoteActions.powerOnOff, (store, _) => {
        return produce(store, (draft) => {
          draft.power = !store.power
        })
      })
      // info : 채널 정보 표시 ↓↓
      .addCase(remoteActions.channelInfoShow, (store, _) => {
        return produce(store, (draft) => {
          draft.chShow = true
          draft.btn_show = true
        })
      })
      // info : 채널 정보 표시 해제 ↓↓
      .addCase(remoteActions.channelInfoHide, (store, _) => {
        return produce(store, (draft) => {
          draft.chShow = false
          draft.btn_show = false
        })
      })
      // info : 채널 변경 ↓↓
      .addCase(remoteActions.changeChannel, (store, { payload }) => {
        return produce(store, (draft) => {
          if (payload === 'up') {
            draft.chInfo.chNum += 1
          }
          if (payload === 'down') {
            draft.chInfo.chNum -= 1
          }
          draft.chInfo.chName = chList[draft.chInfo.chNum - 1]
          Router.push(`/ch/${draft.chInfo.chName.toLowerCase()}`)
        })
      })
      // info : 화살표 버튼 이벤트 ↓↓
      .addCase(remoteActions.arrowBtn, (store, { payload }) => {
        return produce(store, (draft) => {
          switch (payload) {
            case 'up':
              if (store.chInfo.chNum < 4) draft.chInfo.chNum += 1
              break
            case 'down':
              if (store.chInfo.chNum > 1) draft.chInfo.chNum -= 1
              break
            case 'right':
              break
            case 'left':
              break
          }

          if (!store.btn_show) draft.btn_show = true
          draft.chInfo.chName = chList[draft.chInfo.chNum - 1]
          draft.chInfo.progress = progress[draft.chInfo.chNum - 1]
          draft.chInfo.broadcast = broadcast[draft.chInfo.chNum - 1]
        })
      })
      // info : OK 버튼 이벤트 ↓↓
      .addCase(remoteActions.okBtn, (store) => {
        return produce(store, (draft) => {
          if (!store.btn_show) draft.btn_show = true
          if (store.btn_show) {
            if (store.beforeChInfo.chNum !== store.chInfo.chNum) {
              Router.push(`/ch/${draft.chInfo.chName.toLowerCase()}`)
            }
            if (store.beforeChInfo.chNum === store.chInfo.chNum) {
              draft.btn_show = false
              draft.chShow = false
            }
          }
        })
      })
      // info : 화살표 버튼 이벤트 ↓↓
      .addCase(remoteActions.resetChannelInfo, (store) => {
        return produce(store, (draft) => {
          draft.chInfo = store.beforeChInfo
        })
      })
  }
)

export default remoteReducer
