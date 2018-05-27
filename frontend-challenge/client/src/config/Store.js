import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

import rootReducer from '../reducers/index';

const store = createStore(rootReducer, applyMiddleware(thunk, logger));

export default store;
