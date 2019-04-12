import React from 'react';
import ReactDOM from 'react-dom';
import { applyMiddleware, compose, createStore } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';
import reducer from './reducers';

import './index.scss';
import AppContainer from './containers/AppContainer';

const store = createStore(reducer, compose(applyMiddleware(logger)));

ReactDOM.render(
  <Provider store={store}>
    <AppContainer />
  </Provider>,
  document.getElementById('root')
);
