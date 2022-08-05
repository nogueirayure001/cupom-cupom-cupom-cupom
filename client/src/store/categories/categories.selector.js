import { createSelector } from 'reselect';

export const selectAll = (store) => store.categories;

export const selectCategories = createSelector(
  selectAll,
  (categories) => categories.categories
);

export const selectLoadingState = createSelector(
  selectAll,
  (categories) => categories.isLoading
);

export const selectError = createSelector(
  selectAll,
  (categories) => categories.error
);
