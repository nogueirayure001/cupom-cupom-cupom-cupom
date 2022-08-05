import { ACTION_TYPES } from './index';
import { createAction, httpFetchAPIResource } from '../../utils';

const getPaginatedStoresData = async (page) => {
  const resourcePath = '/stores/paginated';

  const queryParams = { page };

  const { data, pagination } = await httpFetchAPIResource(
    resourcePath,
    queryParams
  );

  return { data, pagination };
};

export function loadPaginatedStoresDataStart() {
  return createAction(ACTION_TYPES.LOAD_DATA_START);
}

export function loadPaginatedStoresDataSuccess(payload) {
  return createAction(ACTION_TYPES.LOAD_DATA_SUCCESS, payload);
}

export function loadPaginatedStoresDataFail(error) {
  return createAction(ACTION_TYPES.LOAD_DATA_FAIL, error);
}

export function loadPaginatedStoresDataAsync(page) {
  return async (dispatch) => {
    dispatch(loadPaginatedStoresDataStart());

    try {
      const { data: stores, pagination } = await getPaginatedStoresData(page);

      const payload = { stores, pagination };

      dispatch(loadPaginatedStoresDataSuccess(payload));
    } catch (e) {
      dispatch(loadPaginatedStoresDataFail(e));
    }
  };
}
