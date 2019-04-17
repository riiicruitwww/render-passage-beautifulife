import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import contentReducer from './contentReducer';
import uiReducer from './uiReducer';

const createRootReducer = history =>
  combineReducers({
    content: contentReducer,
    ui: uiReducer,
    router: connectRouter(history)
  });

export default createRootReducer;
