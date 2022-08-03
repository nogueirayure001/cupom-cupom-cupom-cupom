import { ACTION_TYPES } from './index';
import { createAction, httpFetchAPIResource } from '../../utils';

const getFeaturedCoupons = async () => {
  const resourcePath = '/coupons/featured';

  const { data } = await httpFetchAPIResource(resourcePath);

  return data;
};

export function loadFeaturedCouponsStart() {
  return createAction(ACTION_TYPES.LOAD_DATA_START);
}

export function loadFeaturedCouponsSuccess(featuredCoupons) {
  return createAction(ACTION_TYPES.LOAD_DATA_SUCCESS, featuredCoupons);
}

export function loadFeaturedCouponsFail(error) {
  return createAction(ACTION_TYPES.LOAD_DATA_FAIL, error);
}

export async function loadFeaturedCouponsAsync(dispatch) {
  dispatch(loadFeaturedCouponsStart());

  try {
    const featuredCoupons = await getFeaturedCoupons();

    dispatch(loadFeaturedCouponsSuccess(featuredCoupons));
  } catch (e) {
    dispatch(loadFeaturedCouponsFail(e));
  }
}
