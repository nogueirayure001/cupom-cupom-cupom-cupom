import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import { rootReducer } from './index';

const middlewares = [thunk];

const composedEnhancers = compose(applyMiddleware(...middlewares));

const store = createStore(rootReducer, composedEnhancers);

export default store;
