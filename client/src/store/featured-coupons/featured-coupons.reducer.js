import { ACTION_TYPES } from './index';

const DEFAULT_STATE = {
  coupons: [],
  isLoading: false,
  error: null
};

export function FeaturedCouponsReducer(state = DEFAULT_STATE, action) {
  const { type, payload } = action;

  switch (type) {
    case ACTION_TYPES.LOAD_DATA_START:
      return {
        ...state,
        isLoading: true
      };

    case ACTION_TYPES.LOAD_DATA_SUCCESS:
      return {
        ...state,
        error: null,
        coupons: payload,
        isLoading: false
      };

    case ACTION_TYPES.LOAD_DATA_FAIL:
      return {
        ...state,
        error: payload,
        isLoading: false
      };

    default:
      return state;
  }
}
