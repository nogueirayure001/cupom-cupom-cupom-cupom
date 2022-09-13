import { createAction, httpRequest } from '../../utils';
import { ACTION_TYPES } from './index';

async function getStores(token, query, path) {
  const headers = new Headers();
  headers.append('content-type', 'application/json');
  headers.append('accept', 'application/json');
  headers.append('authorization', `Bearer ${token}`);

  const configs = {
    method: 'get',
    headers
  };

  return await httpRequest(path, query, configs);
}

function loadStoresStart() {
  return createAction(ACTION_TYPES.FETCH_STORES_START, null);
}

function loadStoresSuccess(stores) {
  return createAction(ACTION_TYPES.FETCH_STORES_SUCCESS, stores);
}

function loadStoresFail(error) {
  return createAction(ACTION_TYPES.FETCH_STORES_FAIL, error);
}

export function loadStoresAsync(token) {
  const path = '/api/stores/admin';

  return async (dispatch) => {
    dispatch(loadStoresStart());

    try {
      const {
        requestInfo: { success, message },
        data: stores
      } = await getStores(token, {}, path);

      if (!success) {
        dispatch(loadStoresFail(message));
        return;
      }

      dispatch(loadStoresSuccess(stores));
    } catch (e) {
      dispatch(loadStoresFail('Não foi possível enviar a requisição'));
    }
  };
}

function loadPaginatedStoresStart() {
  return createAction(ACTION_TYPES.FETCH_PAGINATED_STORES_START, null);
}

function loadPaginatedStoresSuccess(stores) {
  return createAction(ACTION_TYPES.FETCH_PAGINATED_STORES_SUCCESS, stores);
}

function loadPaginatedStoresFail(error) {
  return createAction(ACTION_TYPES.FETCH_PAGINATED_STORES_FAIL, error);
}

export function loadPaginatedStoresAsync(token, query) {
  const path = '/api/stores/admin/paginated';

  return async (dispatch) => {
    dispatch(loadPaginatedStoresStart());

    try {
      const {
        requestInfo: { success, message },
        pagination,
        data: stores
      } = await getStores(token, query, path);

      if (!success) {
        dispatch(loadPaginatedStoresFail(message));
        return;
      }

      const payload = { pagination, paginatedStores: stores };

      dispatch(loadPaginatedStoresSuccess(payload));
    } catch (e) {
      dispatch(loadPaginatedStoresFail('Não foi possível enviar a requisição'));
    }
  };
}
