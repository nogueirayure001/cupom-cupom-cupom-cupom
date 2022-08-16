import { createAction, httpRequest } from '../../utils';
import { ACTION_TYPES } from './index';

async function requestStoreCreation(store) {
  const path = '/stores/admin/add';

  const configs = {
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json'
    },
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

export function createStoreAsync(store) {
  return async (dispatch) => {
    dispatch(createStoreStart());

    try {
      const {
        requestInfo: { success, message }
      } = await requestStoreCreation(store);

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
