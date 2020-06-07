import { createStore, compose, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './modules/rootReducer';
import rootSagas from './modules/rootSagas';

const sagaMiddleare = createSagaMiddleware();

const enhancer =
  process.env.NODE_ENV === 'development'
    ? compose(console.tron.createEnhancer(), applyMiddleware(sagaMiddleare))
    : applyMiddleware(sagaMiddleare);

const store = createStore(rootReducer, enhancer);
sagaMiddleare.run(rootSagas);

export default store;
