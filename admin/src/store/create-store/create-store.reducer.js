import { ACTION_TYPES } from './index';

const DEFAULT_STATE = {
  isLoading: false,
  error: null,
  success: false
};

function createStoreReducer(state = DEFAULT_STATE, action = {}) {
  const { type, payload } = action;

  switch (type) {
    case ACTION_TYPES.CREATE_STORE_START:
      return { ...state, isLoading: true };

    case ACTION_TYPES.CREATE_STORE_SUCCESS:
      return { ...state, error: null, success: true, isLoading: false };

    case ACTION_TYPES.CREATE_STORE_FAIL:
      return { ...state, error: payload, success: false, isLoading: false };

    case ACTION_TYPES.CLEAR_STATE:
      return { isLoading: false, error: null, success: false };

    default:
      return state;
  }
}

export default createStoreReducer;
