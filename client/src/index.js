import React from 'react';
import ReactDOM from 'react-dom';
import { createBrowserHistory } from 'history';
import { applyMiddleware, compose, createStore, combineReducers } from 'redux';
import {
  ConnectedRouter,
  connectRouter,
  routerMiddleware
} from 'connected-react-router';
import { Provider } from 'react-redux';
import logger from 'redux-logger';
import reducer from './reducers';

import './index.scss';
import AppContainer from './containers/AppContainer';

const history = createBrowserHistory();
const store = createStore(
  combineReducers({
    reducer,
    router: connectRouter(history)
  }),
  compose(applyMiddleware(routerMiddleware(history), logger))
);

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <AppContainer {...store} />
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
);
