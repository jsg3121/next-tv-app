import { combineEpics } from 'redux-observable'
import * as remoteEpics from './src/remote.epic'

export default combineEpics(...Object.values(remoteEpics))
