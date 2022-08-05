import { combineReducers } from 'redux';

import { FeaturedStoresReducer } from './featured-stores';
import { FeaturedCouponsReducer } from './featured-coupons';
import { SearchedCouponsReducer } from './searched-coupons';
import { PaginatedCouponsReducer } from './paginated-coupons';
import { PaginatedStoresReducer } from './paginated-stores';

export const rootReducer = combineReducers({
  featuredStores: FeaturedStoresReducer,
  featuredCoupons: FeaturedCouponsReducer,
  searchedCoupons: SearchedCouponsReducer,
  paginatedCoupons: PaginatedCouponsReducer,
  paginatedStores: PaginatedStoresReducer
});
