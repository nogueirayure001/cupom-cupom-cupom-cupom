import { createSelector } from 'reselect';

export const selectAll = (store) => store.paginatedCoupons;

export const selectCoupons = createSelector(
  selectAll,
  (paginatedCoupons) => paginatedCoupons.coupons
);

export const selectPagination = createSelector(
  selectAll,
  (paginatedCoupons) => paginatedCoupons.pagination
);

export const selectLoadingState = createSelector(
  selectAll,
  (paginatedCoupons) => paginatedCoupons.isLoading
);

export const selectError = createSelector(
  selectAll,
  (paginatedCoupons) => paginatedCoupons.error
);
