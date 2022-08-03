import { combineReducers } from 'redux';

import { FeaturedStoresReducer } from './featured-stores';

export const rootReducer = combineReducers({
  featuredStores: FeaturedStoresReducer
});
