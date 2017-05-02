
import { all } from 'redux-saga/effects'
import {getEventsAsync,addEventAsync} from './sagas/calendar.saga'
export default function* rootSaga() {
  yield all([
    getEventsAsync(),
    addEventAsync()
  ])
}