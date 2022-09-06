import { createAction, httpRequest } from '../../utils';
import { ACTION_TYPES } from './index';

async function requestCouponUpdate(couponId, update, token) {
  const path = '/api/coupons/admin/update';

  const headers = new Headers();
  headers.append('content-type', 'application/json');
  headers.append('accept', 'application/json');
  headers.append('authorization', `Bearer ${token}`);

  const body = JSON.stringify({ couponId, update });

  const configs = {
    method: 'PATCH',
    headers,
    body
  };

  return await httpRequest(path, {}, configs);
}

function updateCouponStart(id) {
  return createAction(ACTION_TYPES.UPDATE_COUPON_START, id);
}

function updateCouponSuccess() {
  return createAction(ACTION_TYPES.UPDATE_COUPON_SUCCESS);
}

function updateCouponFail(payload) {
  return createAction(ACTION_TYPES.UPDATE_COUPON_FAIL, payload);
}

export function updateCouponAsync(id, update, token) {
  return async (dispatch) => {
    dispatch(updateCouponStart(id));

    try {
      const {
        requestInfo: { success, message }
      } = await requestCouponUpdate(id, update, token);

      if (!success) {
        dispatch(updateCouponFail(message));
      }

      dispatch(updateCouponSuccess());
    } catch (e) {
      dispatch(updateCouponFail('Could not send request'));
    }
  };
}

export function clearPreviousState() {
  return createAction(ACTION_TYPES.CLEAR_STATE);
}
