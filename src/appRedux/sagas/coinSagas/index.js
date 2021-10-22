import {takeLatest} from 'redux-saga/effects';
import {GET_POST_COIN} from 'appRedux/actionsType';
import {getPostCoinSaga} from './getPostCoinSaga';

export default function* coinSagas() {
  yield takeLatest(GET_POST_COIN.HANDLER, getPostCoinSaga);
}
