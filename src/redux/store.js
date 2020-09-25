import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import promise from 'redux-promise-middleware';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './rootReducer';

/* eslint-disable */
const logger = store => next => action => {
  console.group(action.type);
  console.info('dispatching', action);
  let result = next(action);
  console.log('next state', store.getState());
  console.groupEnd();
  return result;
};

const middleware = applyMiddleware(promise, thunk);

const store = createStore(rootReducer, composeWithDevTools(middleware));

export default store;
