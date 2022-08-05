import { createSelector } from 'reselect';

export const selectAll = (store) => store.searchedStores;

export const selectStores = createSelector(
  selectAll,
  (searchedStores) => searchedStores.stores
);

export const selectLoadingState = createSelector(
  selectAll,
  (searchedStores) => searchedStores.isLoading
);

export const selectError = createSelector(
  selectAll,
  (searchedStores) => searchedStores.error
);
