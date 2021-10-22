import {CHANGE_LANGUAGE} from 'appRedux/actionsType';

const initialState = {
  language: 'vi',
};

const languageReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_LANGUAGE: {
      return {language: action.language};
    }
    default:
      return state;
  }
};

export default languageReducer;
