import { createAction, httpRequest } from '../../utils';
import { ACTION_TYPES } from './index';

async function getStores() {
  const path = '/stores/admin/all';

  const configs = {
    method: 'get',
    headers: {
      Accept: 'application/json'
    }
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

export async function loadStoresAsync(dispatch) {
  dispatch(loadStoresStart());

  try {
    const {
      requestInfo: { success, message },
      data: stores
    } = await getStores();

    if (!success) {
      dispatch(loadStoresFail(message));
      return;
    }

    dispatch(loadStoresSuccess(stores));
  } catch (e) {
    dispatch(loadStoresFail('Não foi possível enviar a requisição'));
  }
}
