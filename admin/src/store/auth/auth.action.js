import { createAction, httpRequest } from '../../utils';
import { ACTION_TYPES } from './index';

async function requestLogin(credentials) {
  const path = '/auth';

  const configs = {
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json'
    },
    body: JSON.stringify(credentials)
  };

  return await httpRequest(path, {}, configs);
}

async function requestLogout(token) {
  const path = '/auth';

  const headers = new Headers();
  headers.append('content-type', 'application/json');
  headers.append('accept', 'application/json');
  headers.append('authorization', `Bearer ${token}`);

  const configs = {
    method: 'delete',
    headers
  };

  return await httpRequest(path, {}, configs);
}

function loginStart() {
  return createAction(ACTION_TYPES.LOGIN_START);
}

function loginSuccess(data) {
  return createAction(ACTION_TYPES.LOGIN_SUCCESS, data);
}

function loginFail(error) {
  return createAction(ACTION_TYPES.LOGIN_FAIL, error);
}

export function loginAsync(credentials) {
  return async (dispatch) => {
    dispatch(loginStart());

    try {
      const {
        requestInfo: { success, message },
        data
      } = await requestLogin(credentials);

      if (!success) {
        dispatch(loginFail(message));
      }

      dispatch(loginSuccess(data));
    } catch (e) {
      dispatch(loginFail('Could not send request'));
    }
  };
}

function logoutStart() {
  return createAction(ACTION_TYPES.LOGOUT_START);
}

function logoutSuccess() {
  return createAction(ACTION_TYPES.LOGOUT_SUCCESS);
}

function logoutFail(error) {
  return createAction(ACTION_TYPES.LOGOUT_FAIL, error);
}

export function logoutAsync(token) {
  return async (dispatch) => {
    dispatch(logoutStart());

    try {
      const {
        requestInfo: { success, message }
      } = await requestLogout(token);

      if (!success) {
        dispatch(logoutFail(message));
      }

      dispatch(logoutSuccess());
    } catch (e) {
      dispatch(logoutFail('Could not send request'));
    }
  };
}
