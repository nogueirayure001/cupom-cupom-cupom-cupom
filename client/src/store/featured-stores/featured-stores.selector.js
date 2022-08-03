import { createSelector } from 'reselect';

const selectFeaturedStores = (store) => store.featuredStores;

export const selectAll = createSelector(
  selectFeaturedStores,
  (featuredStores) => featuredStores
);

export const selectStores = createSelector(
  selectFeaturedStores,
  (featuredStores) => featuredStores.stores
);

export const selectLoadingState = createSelector(
  selectFeaturedStores,
  (featuredStores) => featuredStores.isLoading
);
