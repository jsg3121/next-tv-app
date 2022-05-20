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
export const epicChannelInfoHide: Epic<Action, Action> = (action$, _) => {
  return action$.pipe(
    ofType('@@CHANNEL/INFO_SHOW'),
    debounceTime(2000),
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
export const epicArrowClickShow: Epic<Action, Action> = (action$, _) => {
  return action$.pipe(
    ofType('@@CHANNEL/ARROW'),
    debounceTime(2000),
    map(() => {
      return {
        type: '@@CHANNEL/INFO_HIDE',
      }
    })
  )
}
