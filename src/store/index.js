import { createStore } from 'redux';
import RootReducer from './modules/RootReducer';

const enhancer =
  process.env.NODE_ENV === 'development' ? console.tron.createEnhancer() : null;

const store = createStore(RootReducer, enhancer);

export default store;
