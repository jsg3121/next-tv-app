import { AnyAction, combineReducers } from '@reduxjs/toolkit'
import { HYDRATE } from 'next-redux-wrapper'
import channel, { RemoteType } from './src/remote.reducer'
import test, { TestType } from './src/test.reducer'

export type RootState = {
  test: TestType
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
    test,
    channel,
  })

  return reducer(state, action)
}

export default rootReducer
