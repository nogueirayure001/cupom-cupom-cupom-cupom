import { ACTION_TYPES } from './index';
import { createAction, httpFetchAPIResource } from '../../utils';

const subscribeToNewsletter = async (email) => {
  const resourcePath = '/newsletter/subscribe';

  const requestConfigs = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email })
  };

  const { requestInfo } = await httpFetchAPIResource(
    resourcePath,
    {},
    requestConfigs
  );

  return requestInfo;
};

function subscribeToNewsletterStart() {
  return createAction(ACTION_TYPES.SUBSCRIBE_START);
}

function subscribeToNewsletterSuccess(operationInfo) {
  return createAction(ACTION_TYPES.SUBSCRIBE_SUCCESS, operationInfo);
}

function subscribeToNewsletterFail(error) {
  return createAction(ACTION_TYPES.SUBSCRIBE_FAIL, error);
}

export function subscribeToNewsletterAsync(email) {
  return async (dispatch) => {
    dispatch(subscribeToNewsletterStart());

    try {
      const operationInfo = await subscribeToNewsletter(email);

      dispatch(subscribeToNewsletterSuccess(operationInfo));
    } catch (e) {
      dispatch(subscribeToNewsletterFail(e.message));
    }
  };
}

export function changeModalState(showing) {
  return createAction(ACTION_TYPES.CHANGE_MODAL_STATE, showing);
}
