import { createAction, httpRequest } from '../../utils';
import { ACTION_TYPES } from './index';

async function requestStoreUpdate(storeId, update, token) {
  const path = '/api/stores/admin';

  const headers = new Headers();
  headers.append('content-type', 'application/json');
  headers.append('accept', 'application/json');
  headers.append('authorization', `Bearer ${token}`);

  const body = JSON.stringify({ storeId, update });

  const configs = {
    method: 'PATCH',
    headers,
    body
  };

  return await httpRequest(path, {}, configs);
}

function updateStoreStart(id) {
  return createAction(ACTION_TYPES.UPDATE_STORE_START, id);
}

function updateStoreSuccess() {
  return createAction(ACTION_TYPES.UPDATE_STORE_SUCCESS);
}

function updateStoreFail(payload) {
  return createAction(ACTION_TYPES.UPDATE_STORE_FAIL, payload);
}

export function updateStoreAsync(id, update, token) {
  return async (dispatch) => {
    dispatch(updateStoreStart(id));

    try {
      const {
        requestInfo: { success, message }
      } = await requestStoreUpdate(id, update, token);

      if (!success) {
        dispatch(updateStoreFail(message));
      }

      dispatch(updateStoreSuccess());
    } catch (e) {
      dispatch(updateStoreFail('Could not send request'));
    }
  };
}

export function clearPreviousState() {
  return createAction(ACTION_TYPES.CLEAR_STATE);
}
