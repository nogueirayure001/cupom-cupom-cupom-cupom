import { createAction, httpRequest } from '../../utils';
import { ACTION_TYPES } from './index';

async function requestStoreCreation(store, token) {
  const path = '/api/stores/admin';

  const headers = new Headers();
  headers.append('content-type', 'application/json');
  headers.append('accept', 'application/json');
  headers.append('authorization', `Bearer ${token}`);

  const configs = {
    method: 'post',
    headers,
    body: JSON.stringify(store)
  };

  return await httpRequest(path, {}, configs);
}

function createStoreStart() {
  return createAction(ACTION_TYPES.CREATE_STORE_START);
}

function createStoreSuccess() {
  return createAction(ACTION_TYPES.CREATE_STORE_SUCCESS);
}

function createStoreFail(payload) {
  return createAction(ACTION_TYPES.CREATE_STORE_FAIL, payload);
}

export function createStoreAsync(store, token) {
  return async (dispatch) => {
    dispatch(createStoreStart());

    try {
      const {
        requestInfo: { success, message }
      } = await requestStoreCreation(store, token);

      if (!success) {
        dispatch(createStoreFail(message));
      }

      dispatch(createStoreSuccess());
    } catch (e) {
      dispatch(createStoreFail('Could not send request'));
    }
  };
}

export function clearPreviousState() {
  return createAction(ACTION_TYPES.CLEAR_STATE);
}
