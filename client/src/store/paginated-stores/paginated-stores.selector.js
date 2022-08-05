import { createSelector } from 'reselect';

export const selectAll = (store) => store.paginatedStores;

export const selectStores = createSelector(
  selectAll,
  (paginatedStores) => paginatedStores.stores
);

export const selectPagination = createSelector(
  selectAll,
  (paginatedStores) => paginatedStores.pagination
);

export const selectLoadingState = createSelector(
  selectAll,
  (paginatedStores) => paginatedStores.isLoading
);

export const selectError = createSelector(
  selectAll,
  (paginatedStores) => paginatedStores.error
);
