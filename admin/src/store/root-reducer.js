import { combineReducers } from 'redux';

import { createCouponReducer } from './create-coupon';
import { storesReducer } from './stores';

const rootReducer = combineReducers({
  createCoupon: createCouponReducer,
  stores: storesReducer
});

export default rootReducer;
