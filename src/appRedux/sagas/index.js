import {fork, all} from 'redux-saga/effects';
import coinSagas from './coinSagas';

export default function* rootSaga() {
  yield all([fork(coinSagas)]);
}
