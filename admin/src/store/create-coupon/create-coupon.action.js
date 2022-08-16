import { createAction, httpRequest } from '../../utils';
import { ACTION_TYPES } from './index';

async function requestCouponCreation(coupon) {
  const path = '/coupons/admin/add';

  const configs = {
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json'
    },
    body: JSON.stringify(coupon)
  };

  return await httpRequest(path, {}, configs);
}

export function createCouponStart() {
  return createAction(ACTION_TYPES.CREATE_COUPON_START);
}

export function createCouponSuccess() {
  return createAction(ACTION_TYPES.CREATE_COUPON_SUCCESS);
}

export function createCouponFail(payload) {
  return createAction(ACTION_TYPES.CREATE_COUPON_FAIL, payload);
}

export function createCouponAsync(coupon) {
  return async (dispatch) => {
    dispatch(createCouponStart());

    try {
      const {
        requestInfo: { success, message }
      } = await requestCouponCreation(coupon);

      if (!success) {
        dispatch(createCouponFail(message));
      }

      dispatch(createCouponSuccess());
    } catch (e) {
      dispatch(createCouponFail('Could not send request'));
    }
  };
}