import React from 'react';
import { StatusBar } from 'react-native';
import './config/ReactotronConfig';
import { Provider } from 'react-redux';
import Routes from './routes';
import store from './store';

export default function App() {
  return (
    <Provider store={store}>
      <StatusBar backgroundColor="black" barStyle="light-content" />
      <Routes />
    </Provider>
  );
}
