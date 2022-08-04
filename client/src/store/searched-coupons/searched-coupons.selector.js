import { createSelector } from 'reselect';

export const selectAll = (store) => store.searchedCoupons;

export const selectQuery = createSelector(
  selectAll,
  (searchedCoupons) => searchedCoupons.query
);

export const selectSearchedCoupons = createSelector(
  selectAll,
  (searchedCoupons) => searchedCoupons.searchResults
);

export const selectLoadingState = createSelector(
  selectAll,
  (searchedCoupons) => searchedCoupons.isLoading
);

export const selectError = createSelector(
  selectAll,
  (searchedCoupons) => searchedCoupons.error
);
