import { createReducer } from '@reduxjs/toolkit'
import { remoteActions } from 'store/src/action'
import produce from 'immer'
import Router from 'next/router'

export type RemoteType = {
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

const channelState: RemoteType = {
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

const remoteReducer = createReducer<RemoteType>(channelState, (builder) => {
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
    .addCase(remoteActions.refreshChannel, (store, { payload }) => {
      return produce(store, (draft) => {
        draft.chInfo.chNum = payload
        draft.chInfo.chName = chList[payload - 1]
      })
    })
    .addCase(remoteActions.powerOnOff, (store, { payload }) => {
      return produce(store, (draft) => {
        draft.power = payload
      })
    })
    .addCase(remoteActions.channelInfoShow, (store, { payload }) => {
      return produce(store, (draft) => {
        draft.chShow = payload
        draft.btn_show = payload
      })
    })
    .addCase(remoteActions.showBtnInfo, (store, { payload }) => {
      return produce(store, (draft) => {
        if (store.chShow && store.btn_show) {
          console.log('yes')
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
})

export default remoteReducer