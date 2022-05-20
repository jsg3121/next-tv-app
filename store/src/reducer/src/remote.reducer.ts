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
  beforeChInfo?: {
    chNum: number
    chName: string
    progress: number
    broadcast: string
  }
  openning: boolean
}

const channelState: RemoteStateType = {
  chInfo: {
    broadcast: '',
    chName: 'Intro',
    chNum: 1,
    progress: 0,
  },
  power: true,
  chShow: true,
  btn_show: false,
  openning: false,
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
      .addCase(remoteActions.refreshChannel, (store, { payload }) => {
        return produce(store, (draft) => {
          draft.chInfo.chNum = payload
          draft.chInfo.chName = chList[payload - 1]
        })
      })
      .addCase(remoteActions.showBtnInfo, (store, { payload }) => {
        return produce(store, (draft) => {
          if (store.chShow && store.btn_show) {
            draft.btn_show === false
            draft.chShow === false
          }

          if (store.btn_show === false) {
            draft.btn_show = payload
          }

          if (store.btn_show === true) {
            if (store.beforeChInfo) {
              if (store.beforeChInfo.chNum !== store.chInfo.chNum) {
                Router.push(`/ch/${draft.chInfo.chName.toLowerCase()}`)
                draft.beforeChInfo = undefined
              } else if (store.beforeChInfo.chNum === store.chInfo.chNum) {
                draft.btn_show = false
              }
            } else if (!store.beforeChInfo) {
              draft.btn_show = false
            }
          }
        })
      })
      .addCase(remoteActions.channelBtnArrow, (store, { payload }) => {
        return produce(store, (draft) => {
          if (draft.btn_show === false) {
            draft.beforeChInfo = store.chInfo
            draft.btn_show = true
          }

          if (draft.btn_show === true && draft.beforeChInfo === undefined) {
            draft.beforeChInfo = store.chInfo
          }

          switch (payload) {
            case 'up':
              draft.chInfo.chNum += 1
              break
            case 'down':
              draft.chInfo.chNum -= 1
              break
            case 'right':
              break
            case 'left':
              break
          }

          draft.chInfo.chName = chList[draft.chInfo.chNum - 1]
          draft.chInfo.progress = progress[draft.chInfo.chNum - 1]
          draft.chInfo.broadcast = broadcast[draft.chInfo.chNum - 1]
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
  }
)

export default remoteReducer
