import { ACTION_TYPES } from './index';

const DEFAULT_STATE = {
  paginatedCoupons: [],
  pagination: {},
  isLoading: false,
  error: null
};

function couponsReducer(state = DEFAULT_STATE, action = {}) {
  const { type, payload } = action;

  switch (type) {
    case ACTION_TYPES.FETCH_PAGINATED_COUPONS_START:
      return {
        ...state,
        isLoading: true
      };

    case ACTION_TYPES.FETCH_PAGINATED_COUPONS_SUCCESS:
      return {
        ...state,
        error: null,
        ...payload,
        isLoading: false
      };

    case ACTION_TYPES.FETCH_PAGINATED_COUPONS_FAIL:
      return {
        ...state,
        error: payload,
        isLoading: false
      };

    default:
      return state;
  }
}

export default couponsReducer;
