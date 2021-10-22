import {put} from 'redux-saga/effects';
import {getPost} from 'apis/postApi';
import {
  getPostCoinFailure,
  getPostCoinSuccess,
} from 'appRedux/actions/coinActions';
import {callApi} from 'helpers/sagas';

export function* getPostCoinSaga({payload = {}}) {
  const {page, per_page, author, offset, categories, _embed} = payload;
  try {
    let params = {
      _embed,
      page,
      per_page,
      author,
      offset,
      categories,
    };
    const result = yield callApi(getPost, params);
    yield put(
      getPostCoinSuccess({
        listPostCoin: result,
      }),
    );
  } catch (err) {
    yield put(getPostCoinFailure({err: err}));
  }
}
