import { createAction, httpRequest } from '../../utils';
import { ACTION_TYPES } from './index';

async function getCoupons(token, query) {
  const path = '/api/coupons/admin/paginated';

  const headers = new Headers();
  headers.append('content-type', 'application/json');
  headers.append('accept', 'application/json');
  headers.append('authorization', `Bearer ${token}`);

  const configs = {
    method: 'get',
    headers
  };

  return await httpRequest(path, query, configs);
}

function loadPaginatedCouponsStart() {
  return createAction(ACTION_TYPES.FETCH_PAGINATED_COUPONS_START, null);
}

function loadPaginatedCouponsSuccess(payload) {
  return createAction(ACTION_TYPES.FETCH_PAGINATED_COUPONS_SUCCESS, payload);
}

function loadPaginatedCouponsFail(error) {
  return createAction(ACTION_TYPES.FETCH_PAGINATED_COUPONS_FAIL, error);
}

export function loadPaginatedCouponsAsync(token, query) {
  return async (dispatch) => {
    dispatch(loadPaginatedCouponsStart());

    try {
      const {
        requestInfo: { success, message },
        pagination,
        data: coupons
      } = await getCoupons(token, query);

      if (!success) {
        dispatch(loadPaginatedCouponsFail(message));
        return;
      }

      const payload = { pagination, paginatedCoupons: coupons };

      dispatch(loadPaginatedCouponsSuccess(payload));
    } catch (e) {
      dispatch(
        loadPaginatedCouponsFail('Não foi possível enviar a requisição')
      );
    }
  };
}
