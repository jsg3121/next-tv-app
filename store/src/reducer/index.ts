import { AnyAction, combineReducers } from '@reduxjs/toolkit'
import { HYDRATE } from 'next-redux-wrapper'
import channel, { RemoteType } from './src/remote.reducer'

export type RootState = {
  channel: RemoteType
}

const rootReducer = (state: RootState | undefined, action: AnyAction) => {
  if (action.type === HYDRATE) {
    const rootState = {
      ...state,
      ...action.payload,
    }

    return rootState
  }

  const reducer = combineReducers({
    channel,
  })

  return reducer(state, action)
}

export default rootReducer
