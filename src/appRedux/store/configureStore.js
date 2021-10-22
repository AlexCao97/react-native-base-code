import {createStore, applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer from 'appRedux/reducers';
import rootSaga from 'appRedux/sagas';
import {persistStore, persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import logger from 'redux-logger';

const sagaMiddleware = createSagaMiddleware();
const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  version: 1.0,
  whitelist: ['languageReducer'],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(
  persistedReducer,
  applyMiddleware(sagaMiddleware, logger),
);

let persistor = persistStore(store);

sagaMiddleware.run(rootSaga);

export default {
  store,
  persistor,
};
