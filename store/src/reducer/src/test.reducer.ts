import { createReducer } from '@reduxjs/toolkit'
import { testActions } from 'store/src/action'

export type TestType = {
  test: string
  num: number
}

const testState: TestType = {
  test: '',
  num: 1,
}

const testReducer = createReducer<TestType>(testState, (builder) => {
  builder.addCase(testActions.test, (store, { payload }) => {
    return
  })
})

export default testReducer
