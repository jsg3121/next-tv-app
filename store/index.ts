import { configureStore, EnhancedStore } from '@reduxjs/toolkit'
import { createWrapper } from 'next-redux-wrapper'
import {
  TypedUseSelectorHook,
  useDispatch as useReduxDispatch,
  useSelector as useReduxSelector,
} from 'react-redux'
import rootAction from './src/action'
import rootReducer from './src/reducer'

export type RootState = ReturnType<typeof store.getState>
export type Dispatch = typeof store.dispatch

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
  devTools: process.env.NODE_ENV !== 'production',
})

export const Actions = rootAction
export const useDispatch = () => useReduxDispatch<Dispatch>()

export const useSelector: TypedUseSelectorHook<RootState> = useReduxSelector

const setupStore = (): EnhancedStore => {
  return store
}

const makeStore = () => setupStore()

export const wrapper = createWrapper(makeStore, {
  debug: process.env.NODE_ENV !== 'production',
})
