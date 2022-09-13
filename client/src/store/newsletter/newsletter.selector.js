import { createSelector } from 'reselect';

export const selectAll = (store) => store.newsletter;

export const selectShowModal = createSelector(
  selectAll,
  (newsletter) => newsletter.showModal
);

export const selectSuccess = createSelector(
  selectAll,
  (newsletter) => newsletter.success
);

export const selectMessage = createSelector(
  selectAll,
  (newsletter) => newsletter.message
);

export const selectLoadingState = createSelector(
  selectAll,
  (newsletter) => newsletter.isLoading
);
