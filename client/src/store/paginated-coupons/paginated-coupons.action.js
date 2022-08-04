import { ACTION_TYPES } from './index';
import { createAction, httpFetchAPIResource } from '../../utils';

const getPaginatedCouponsData = async (page) => {
  const resourcePath = '/coupons/paginated';

  const queryParams = { page };

  const { data, pagination } = await httpFetchAPIResource(
    resourcePath,
    queryParams
  );

  return { data, pagination };
};

export function loadPaginatedCouponsDataStart() {
  return createAction(ACTION_TYPES.LOAD_DATA_START);
}

export function loadPaginatedCouponsDataSuccess(payload) {
  return createAction(ACTION_TYPES.LOAD_DATA_SUCCESS, payload);
}

export function loadPaginatedCouponsDataFail(error) {
  return createAction(ACTION_TYPES.LOAD_DATA_FAIL, error);
}

export function loadPaginatedCouponsDataAsync(page) {
  return async (dispatch) => {
    dispatch(loadPaginatedCouponsDataStart());

    try {
      const { data: coupons, pagination } = await getPaginatedCouponsData(page);

      const payload = { coupons, pagination };

      dispatch(loadPaginatedCouponsDataSuccess(payload));
    } catch (e) {
      dispatch(loadPaginatedCouponsDataFail(e));
    }
  };
}
