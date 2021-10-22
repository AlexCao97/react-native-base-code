/*
  func Helper gen actionType
*/
export const asyncTypes = action => ({
  HANDLER: `${action}_HANDLER`,
  SUCCESS: `${action}_SUCCESS`,
  FAILURE: `${action}_FAILURE`,
});
// Actions
export const GET_POST_COIN = asyncTypes('GET_POST_COIN');

export const CHANGE_LANGUAGE = asyncTypes('CHANGE_LANGUAGE');
