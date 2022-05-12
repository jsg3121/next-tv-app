import { AnyAction, combineReducers } from '@reduxjs/toolkit'
import { HYDRATE } from 'next-redux-wrapper'
import test, { TestType } from './src/test.reducer'

export type RootState = {
  test: TestType
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
  })

  return reducer(state, action)
}

export default rootReducer
