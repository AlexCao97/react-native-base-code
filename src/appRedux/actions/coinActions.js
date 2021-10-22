import {GET_POST_COIN} from 'appRedux/actionsType';

export const getPostCoinFailure = payload => ({
  type: GET_POST_COIN.FAILURE,
  payload,
});

export const getPostCoinSuccess = payload => ({
  type: GET_POST_COIN.SUCCESS,
  payload,
});

export const getPostCoinHandle = payload => ({
  type: GET_POST_COIN.HANDLER,
  payload,
});
