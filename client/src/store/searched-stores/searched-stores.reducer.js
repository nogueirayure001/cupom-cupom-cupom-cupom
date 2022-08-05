import { ACTION_TYPES } from './index';

const DEFAULT_STATE = {
  stores: [],
  isLoading: false,
  error: false
};

export function SearchedStoresReducer(state = DEFAULT_STATE, action) {
  const { type, payload } = action;

  switch (type) {
    case ACTION_TYPES.LOAD_DATA_START:
      return {
        ...state,
        isLoading: true
      };

    case ACTION_TYPES.LOAD_DATA_SUCCESS:
      return {
        stores: payload,
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
