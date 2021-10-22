import {combineReducers} from 'redux';
import coinReducer from './coinReducer';
import languageReducer from './languageReducer';

const rootReducer = combineReducers({
  // Reducers
  coinReducer,
  languageReducer,
});

export default rootReducer;
