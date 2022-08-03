import { createSelector } from 'reselect';

export const selectAll = (store) => store.featuredCoupons;

export const selectCoupons = createSelector(
  selectAll,
  (featuredCoupons) => featuredCoupons.coupons
);

export const selectLoadingState = createSelector(
  selectAll,
  (featuredCoupons) => featuredCoupons.isLoading
);

export const selectError = createSelector(
  selectAll,
  (featuredCoupons) => featuredCoupons.error
);
