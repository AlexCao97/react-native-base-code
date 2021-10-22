import {GET_POST_COIN} from 'appRedux/actionsType';

const initialState = {
  listCoinPost: [],
  fetching: false,
};

const coinReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_POST_COIN.SUCCESS: {
      return {
        ...state,
        listCoinPost: state.listCoinPost,
        fetching: true,
      };
    }
    case GET_POST_COIN.HANDLER: {
      return {
        ...state,
        fetching: true,
      };
    }
    case GET_POST_COIN.FAILURE: {
      return {
        ...state,
        fetching: false,
      };
    }
    default:
      return state;
  }
};

export default coinReducer;
