import { combineReducers } from 'redux';

import { createCouponReducer } from './create-coupon';
import { createStoreReducer } from './create-store';
import { storesReducer } from './stores';
import { authReducer } from './auth';

const rootReducer = combineReducers({
  createCoupon: createCouponReducer,
  createStore: createStoreReducer,
  stores: storesReducer,
  auth: authReducer
});

export default rootReducer;
