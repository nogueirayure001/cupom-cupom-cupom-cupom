import { ACTION_TYPES } from './index';

const DEFAULT_STATE = {
  query: {
    filters: {
      store: false,
      category: false,
      keyword: false
    },
    searchTerm: ''
  },
  coupons: [],
  isLoading: false,
  error: false
};

export function SearchedCouponsReducer(state = DEFAULT_STATE, action) {
  const { type, payload } = action;

  switch (type) {
    case ACTION_TYPES.UPDATE_QUERY:
      return {
        ...state,
        query: payload
      };

    case ACTION_TYPES.LOAD_DATA_START:
      return {
        ...state,
        isLoading: true
      };

    case ACTION_TYPES.LOAD_DATA_SUCCESS:
      return {
        ...state,
        coupons: payload,
        error: null,
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
