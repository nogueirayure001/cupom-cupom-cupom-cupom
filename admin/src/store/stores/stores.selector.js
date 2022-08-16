import { createSelector } from 'reselect';

export const selectStoresState = (state) => state.stores;

export const selectStores = createSelector(
  selectStoresState,
  (storesState) => storesState.stores
);
