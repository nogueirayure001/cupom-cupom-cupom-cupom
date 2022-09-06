import { createAction, httpRequest } from '../../utils';
import { ACTION_TYPES } from './index';

async function requestCouponDelete(couponId, token) {
  const path = '/api/coupons/admin/delete';

  const headers = new Headers();
  headers.append('content-type', 'application/json');
  headers.append('accept', 'application/json');
  headers.append('authorization', `Bearer ${token}`);

  const body = JSON.stringify({ couponId });

  const configs = {
    method: 'DELETE',
    headers,
    body
  };

  return await httpRequest(path, {}, configs);
}

function deleteCouponStart(id) {
  return createAction(ACTION_TYPES.DELETE_COUPON_START, id);
}

function deleteCouponSuccess() {
  return createAction(ACTION_TYPES.DELETE_COUPON_SUCCESS);
}

function deleteCouponFail(payload) {
  return createAction(ACTION_TYPES.DELETE_COUPON_FAIL, payload);
}

export function deleteCouponAsync(id, token) {
  return async (dispatch) => {
    dispatch(deleteCouponStart(id));

    try {
      const {
        requestInfo: { success, message }
      } = await requestCouponDelete(id, token);

      if (!success) {
        dispatch(deleteCouponFail(message));
      }

      dispatch(deleteCouponSuccess());
    } catch (e) {
      dispatch(deleteCouponFail('Could not send request'));
    }
  };
}

export function clearPreviousState() {
  return createAction(ACTION_TYPES.CLEAR_STATE);
}
