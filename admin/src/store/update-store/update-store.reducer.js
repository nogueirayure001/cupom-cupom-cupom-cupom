import { ACTION_TYPES } from './index';

const DEFAULT_STATE = {
  target: '',
  isLoading: false,
  error: null,
  success: false
};

function updateStoreReducer(state = DEFAULT_STATE, action = {}) {
  const { type, payload } = action;

  switch (type) {
    case ACTION_TYPES.UPDATE_STORE_START:
      return { ...state, target: payload, isLoading: true };

    case ACTION_TYPES.UPDATE_STORE_SUCCESS:
      return { ...state, error: null, success: true, isLoading: false };

    case ACTION_TYPES.UPDATE_STORE_FAIL:
      return { ...state, error: payload, success: false, isLoading: false };

    case ACTION_TYPES.CLEAR_STATE:
      return DEFAULT_STATE;

    default:
      return state;
  }
}

export default updateStoreReducer;
