import { createReducer } from '@reduxjs/toolkit'
import { remoteActions } from 'store/src/action'
import produce from 'immer'
import Router from 'next/router'

export type RemoteType = {
  chNum: number
  chName: string
  power: boolean
  chShow: boolean
}

const channelState: RemoteType = {
  chName: 'Intro',
  chNum: 1,
  power: true,
  chShow: true,
}

const chList = ['Intro', 'About', 'Project', 'Contact']

const remoteReducer = createReducer<RemoteType>(channelState, (builder) => {
  builder
    .addCase(remoteActions.changeChannel, (store, { payload }) => {
      return produce(store, (draft) => {
        if (payload === 'up') {
          draft.chNum += 1
          draft.chName = chList[draft.chNum - 1]
          Router.push(`/ch/${draft.chName.toLowerCase()}`)
        }
        if (payload === 'down') {
          draft.chNum -= 1
          draft.chName = chList[draft.chNum - 1]
          Router.push(`/ch/${draft.chName.toLowerCase()}`)
        }
      })
    })
    .addCase(remoteActions.powerOnOff, (store, { payload }) => {
      return produce(store, (draft) => {
        draft.power = payload
      })
    })
    .addCase(remoteActions.channelInfoShow, (store, _) => {
      produce(store, (draft) => {
        draft.chShow = false
        draft.chShow = true
        const timeout = setTimeout(() => {
          console.log('asdfasd')
          draft.chShow = false
        }, 1500)
        return clearTimeout(timeout)
      })
      return
    })
})

export default remoteReducer
