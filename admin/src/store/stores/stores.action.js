import { createAction, httpRequest } from '../../utils';
import { ACTION_TYPES } from './index';

async function getStores(token) {
  const path = '/api/stores/admin/all';

  const headers = new Headers();
  headers.append('content-type', 'application/json');
  headers.append('accept', 'application/json');
  headers.append('authorization', `Bearer ${token}`);

  const configs = {
    method: 'get',
    headers
  };

  return await httpRequest(path, {}, configs);
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
  return async (dispatch) => {
    dispatch(loadStoresStart());

    try {
      const {
        requestInfo: { success, message },
        data: stores
      } = await getStores(token);

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
