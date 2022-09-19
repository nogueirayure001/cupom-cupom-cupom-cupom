import { createAction, httpRequest } from '../../utils';
import { ACTION_TYPES } from './index';

async function uploadNewsletterFile(body, token) {
  const path = '/api/newsletter/admin';

  const headers = new Headers();
  headers.append('authorization', `Bearer ${token}`);

  const configs = {
    method: 'post',
    headers,
    body
  };

  return await httpRequest(path, {}, configs);
}

function sendNewsletterStart() {
  return createAction(ACTION_TYPES.SEND_NEWSLETTER_START);
}

function sendNewsletterSuccess() {
  return createAction(ACTION_TYPES.SEND_NEWSLETTER_SUCCESS);
}

function sendNewsletterFail(payload) {
  return createAction(ACTION_TYPES.SEND_NEWSLETTER_FAIL, payload);
}

export function sendNewsletterAsync(body, token) {
  return async (dispatch) => {
    dispatch(sendNewsletterStart());

    try {
      const {
        requestInfo: { success, message }
      } = await uploadNewsletterFile(body, token);

      if (!success) {
        return dispatch(sendNewsletterFail(message));
      }

      dispatch(sendNewsletterSuccess());
    } catch (e) {
      dispatch(sendNewsletterFail('Could not send request'));
    }
  };
}

export function clearPreviousState() {
  return createAction(ACTION_TYPES.CLEAR_STATE);
}
