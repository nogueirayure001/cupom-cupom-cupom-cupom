import { ACTION_TYPES } from './index';

const DEFAULT_STATE = {
  stores: [],
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

    default:
      return state;
  }
}

export default storesReducer;
