import { combineReducers } from 'redux';

import { createCouponReducer } from './create-coupon';
import { createStoreReducer } from './create-store';
import { updateStoreReducer } from './update-store';
import { deleteStoreReducer } from './delete-store';
import { storesReducer } from './stores';
import { authReducer } from './auth';

const rootReducer = combineReducers({
  createCoupon: createCouponReducer,
  createStore: createStoreReducer,
  updateStore: updateStoreReducer,
  deleteStore: deleteStoreReducer,
  stores: storesReducer,
  auth: authReducer
});

export default rootReducer;
