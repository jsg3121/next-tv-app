import { Action } from '@reduxjs/toolkit'
import { Epic, ofType } from 'redux-observable'
import { debounceTime, filter, map } from 'rxjs'

/**
 * info : 페이지가 변경되거나 화면이 켜졌을 때 채널 번호, 정보등이 표시
 * @author 장선규
 * @param action$
 * @param store$
 * @returns
 */
export const epicChannelInfoShow: Epic<Action, Action> = (action$, store$) => {
  return action$.pipe(
    ofType('@@CHANNEL/POWER_ON_OFF'),
    filter(() => store$.value.channel.power === true),
    map(() => {
      return {
        type: '@@CHANNEL/INFO_SHOW',
        payload: true,
      }
    })
  )
}

/**
 * info : 표시된 채널 정보 숨김처리
 * @author 장선규
 * @param action$
 * @param store$
 * @returns
 */
export const epicChannelInfoHide: Epic<Action, Action> = (action$, store$) => {
  return action$.pipe(
    ofType('@@CHANNEL/INFO_SHOW'),
    debounceTime(3000),
    filter(() => store$.value.channel.btn_show === true),
    map(() => {
      return {
        type: '@@CHANNEL/INFO_HIDE',
      }
    })
  )
}

/**
 * info : 화살표 버튼 미입력시 자동 숨김처리
 * @author 장선규
 * @param action$
 * @param store$
 * @returns
 */
export const epicArrowClickShow: Epic<Action, Action> = (action$, store$) => {
  return action$.pipe(
    ofType('@@CHANNEL/ARROW', '@@CHANNEL/OK'),
    debounceTime(3000),
    filter(() => store$.value.channel.btn_show === true),
    map(() => {
      return {
        type: '@@CHANNEL/INFO_HIDE',
      }
    })
  )
}

/**
 * info : 채널 정보 리셋
 * @author 장선규
 * @param action$
 * @param store$
 * @returns
 */
export const epicChannelReset: Epic<Action, Action> = (action$, store$) => {
  return action$.pipe(
    ofType('@@CHANNEL/INFO_HIDE'),
    filter(
      () => store$.value.channel.beforeChInfo !== store$.value.channel.chInfo
    ),
    map(() => {
      return { type: '@@CHANNEL/RESET_CHANNEL_INFO' }
    })
  )
}

/**
 * info : 화면이 다시 켜질 때 채널 정보 리셋
 * @author 장선규
 * @param action$
 * @param store$
 * @returns
 */
export const epicPowerOn: Epic<Action, Action> = (action$, store$) => {
  return action$.pipe(
    ofType('@@CHANNEL/POWER_ON_OFF'),
    filter(() => store$.value.channel.power === true),
    map(() => {
      return { type: '@@CHANNEL/RESET_CHANNEL_INFO' }
    })
  )
}
