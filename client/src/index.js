import React from 'react';
import ReactDOM from 'react-dom';
import { applyMiddleware, compose, createStore } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';
import { Redirect, Route, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import { ConnectedRouter, routerMiddleware } from 'connected-react-router';
import createRootReducer from './reducers';
import './index.scss';
import AppContainer from './containers/AppContainer';
import NotFound from 'NotFound';

const history = createBrowserHistory();
const middlewares =
  process.env.NODE_ENV === 'development'
    ? [routerMiddleware(history), logger]
    : [routerMiddleware(history)];

const store = createStore(
  createRootReducer(history),
  compose(applyMiddleware(...middlewares))
);

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Switch>
        <Redirect exact from="/" to="/santa/toeic-part6" />
        <Route exact path="/santa/:type" component={AppContainer} />
        <Route
          exact
          path="/santa/question/:questionId"
          component={AppContainer}
        />
        <Route component={NotFound} />
      </Switch>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
);
