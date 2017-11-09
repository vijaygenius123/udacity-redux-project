import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducers from '../reducers/index';

const logger = createLogger();

const middleware = [thunk];

if (process.env.NODE_ENV === 'development') {
  middleware.push(logger);
}

const store = createStore(
  reducers,
  composeWithDevTools(applyMiddleware(...middleware)),
);

export default store;
