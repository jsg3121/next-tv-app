import { createAction } from '@reduxjs/toolkit'

export const test = createAction<string, string>('@@TEST/TESTING')
