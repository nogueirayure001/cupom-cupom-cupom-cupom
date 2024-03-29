import { ACTION_TYPES } from './index';
import { createAction, httpFetchAPIResource } from '../../utils';

const getSearchedCoupons = async ({ searchTerm, filters }) => {
  const resourcePath = '/coupons/search';

  const searchFilters = Object.entries(filters)
    .filter(([_, value]) => value)
    .map(([key]) => key)
    .join(',');

  const queryParams = { searchTerm, searchFilters };

  const { data } = await httpFetchAPIResource(resourcePath, queryParams);

  return data;
};

export function updateQuery(updatedQuery) {
  return createAction(ACTION_TYPES.UPDATE_QUERY, updatedQuery);
}

function loadSearchedCouponsStart() {
  return createAction(ACTION_TYPES.LOAD_DATA_START);
}

function loadSearchedCouponsSuccess(searchResults) {
  return createAction(ACTION_TYPES.LOAD_DATA_SUCCESS, searchResults);
}

function loadSearchedCouponsFail(error) {
  return createAction(ACTION_TYPES.LOAD_DATA_FAIL, error);
}

export function loadSearchedCouponsAsync(query) {
  return async (dispatch) => {
    dispatch(loadSearchedCouponsStart());

    try {
      const searchResults = await getSearchedCoupons(query);

      dispatch(loadSearchedCouponsSuccess(searchResults));
    } catch (e) {
      dispatch(loadSearchedCouponsFail(e));
    }
  };
}
