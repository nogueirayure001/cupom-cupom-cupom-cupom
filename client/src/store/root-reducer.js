import { combineReducers } from 'redux';

import { FeaturedStoresReducer } from './featured-stores';
import { FeaturedCouponsReducer } from './featured-coupons';

export const rootReducer = combineReducers({
  featuredStores: FeaturedStoresReducer,
  featuredCoupons: FeaturedCouponsReducer
});
