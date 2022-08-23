import { ACTION_TYPES } from './index';

const DEFAULT_STATE = {
  stores: [],
  paginatedStores: [],
  pagination: {},
  isLoading: false,
  error: null
};

function storesReducer(state = DEFAULT_STATE, action = {}) {
  const { type, payload } = action;

  switch (type) {
    case ACTION_TYPES.FETCH_STORES_START:
      return {
        ...state,
        isLoading: true
      };

    case ACTION_TYPES.FETCH_STORES_SUCCESS:
      return {
        ...state,
        error: null,
        stores: payload,
        isLoading: false
      };

    case ACTION_TYPES.FETCH_STORES_FAIL:
      return {
        ...state,
        error: payload,
        isLoading: false
      };

    case ACTION_TYPES.FETCH_PAGINATED_STORES_START:
      return {
        ...state,
        isLoading: true
      };

    case ACTION_TYPES.FETCH_PAGINATED_STORES_SUCCESS:
      return {
        ...state,
        error: null,
        ...payload,
        isLoading: false
      };

    case ACTION_TYPES.FETCH_PAGINATED_STORES_FAIL:
      return {
        ...state,
        error: payload,
        isLoading: false
      };

    default:
      return state;
  }
}

export default storesReducer;
