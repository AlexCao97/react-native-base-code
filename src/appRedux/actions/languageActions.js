import {CHANGE_LANGUAGE} from 'appRedux/actionsType';

export const changeLanguageLocal = language => {
  return {
    type: CHANGE_LANGUAGE,
    language,
  };
};
