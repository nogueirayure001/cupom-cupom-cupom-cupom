import { combineReducers } from 'redux';

import { createCouponReducer } from './create-coupon';
import { createStoreReducer } from './create-store';
import { updateCouponReducer } from './update-coupon';
import { updateStoreReducer } from './update-store';
import { deleteCouponReducer } from './delete-coupon';
import { deleteStoreReducer } from './delete-store';
import { couponsReducer } from './coupons';
import { storesReducer } from './stores';
import { authReducer } from './auth';

const rootReducer = combineReducers({
  createCoupon: createCouponReducer,
  createStore: createStoreReducer,
  updateCoupon: updateCouponReducer,
  updateStore: updateStoreReducer,
  deleteCoupon: deleteCouponReducer,
  deleteStore: deleteStoreReducer,
  coupons: couponsReducer,
  stores: storesReducer,
  auth: authReducer
});

export default rootReducer;
