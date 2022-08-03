import { createSelector } from 'reselect';

export const selectAll = (store) => store.featuredStores;

export const selectStores = createSelector(
  selectAll,
  (featuredStores) => featuredStores.stores
);

export const selectLoadingState = createSelector(
  selectAll,
  (featuredStores) => featuredStores.isLoading
);

export const selectError = createSelector(
  selectAll,
  (featuredStores) => featuredStores.error
);
