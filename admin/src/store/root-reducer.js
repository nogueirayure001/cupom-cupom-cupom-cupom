import { combineReducers } from 'redux';

import { createCouponReducer } from './create-coupon';
import { createStoreReducer } from './create-store';
import { storesReducer } from './stores';

const rootReducer = combineReducers({
  createCoupon: createCouponReducer,
  createStore: createStoreReducer,
  stores: storesReducer
});

export default rootReducer;
