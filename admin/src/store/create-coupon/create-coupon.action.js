import { createAction, httpRequest } from '../../utils';
import { ACTION_TYPES } from './index';

async function requestCouponCreation(coupon, token) {
  const path = '/api/coupons/admin/add';

  const headers = new Headers();
  headers.append('content-type', 'application/json');
  headers.append('accept', 'application/json');
  headers.append('authorization', `Bearer ${token}`);

  const configs = {
    method: 'post',
    headers,
    body: JSON.stringify(coupon)
  };

  return await httpRequest(path, {}, configs);
}

function createCouponStart() {
  return createAction(ACTION_TYPES.CREATE_COUPON_START);
}

function createCouponSuccess() {
  return createAction(ACTION_TYPES.CREATE_COUPON_SUCCESS);
}

function createCouponFail(payload) {
  return createAction(ACTION_TYPES.CREATE_COUPON_FAIL, payload);
}

export function createCouponAsync(coupon, token) {
  return async (dispatch) => {
    dispatch(createCouponStart());

    try {
      const {
        requestInfo: { success, message }
      } = await requestCouponCreation(coupon, token);

      if (!success) {
        dispatch(createCouponFail(message));
      }

      dispatch(createCouponSuccess());
    } catch (e) {
      dispatch(createCouponFail('Could not send request'));
    }
  };
}

export function clearPreviousState() {
  return createAction(ACTION_TYPES.CLEAR_STATE);
}
