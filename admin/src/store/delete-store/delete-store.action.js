import { createAction, httpRequest } from '../../utils';
import { ACTION_TYPES } from './index';

async function requestStoreDelete(storeId, token) {
  const path = '/api/stores/admin';

  const headers = new Headers();
  headers.append('content-type', 'application/json');
  headers.append('accept', 'application/json');
  headers.append('authorization', `Bearer ${token}`);

  const body = JSON.stringify({ storeId });

  const configs = {
    method: 'DELETE',
    headers,
    body
  };

  return await httpRequest(path, {}, configs);
}

function deleteStoreStart(id) {
  return createAction(ACTION_TYPES.DELETE_STORE_START, id);
}

function deleteStoreSuccess() {
  return createAction(ACTION_TYPES.DELETE_STORE_SUCCESS);
}

function deleteStoreFail(payload) {
  return createAction(ACTION_TYPES.DELETE_STORE_FAIL, payload);
}

export function deleteStoreAsync(id, token) {
  return async (dispatch) => {
    dispatch(deleteStoreStart(id));

    try {
      const {
        requestInfo: { success, message }
      } = await requestStoreDelete(id, token);

      if (!success) {
        dispatch(deleteStoreFail(message));
      }

      dispatch(deleteStoreSuccess());
    } catch (e) {
      dispatch(deleteStoreFail('Could not send request'));
    }
  };
}

export function clearPreviousState() {
  return createAction(ACTION_TYPES.CLEAR_STATE);
}
