import { combineReducers } from 'redux';

import { FeaturedStoresReducer } from './featured-stores';
import { FeaturedCouponsReducer } from './featured-coupons';
import { SearchedCouponsReducer } from './searched-coupons';
import { PaginatedCouponsReducer } from './paginated-coupons';
import { PaginatedStoresReducer } from './paginated-stores';
import { SearchedStoresReducer } from './searched-stores';
import { CategoriesReducer } from './categories';
import { NewsletterReducer } from './newsletter';

export const rootReducer = combineReducers({
  featuredStores: FeaturedStoresReducer,
  featuredCoupons: FeaturedCouponsReducer,
  searchedStores: SearchedStoresReducer,
  searchedCoupons: SearchedCouponsReducer,
  paginatedStores: PaginatedStoresReducer,
  paginatedCoupons: PaginatedCouponsReducer,
  categories: CategoriesReducer,
  newsletter: NewsletterReducer
});
