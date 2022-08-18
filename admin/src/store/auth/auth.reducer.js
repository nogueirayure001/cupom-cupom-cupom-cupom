import { ACTION_TYPES } from './index';

const DEFAULT_STATE = {
  token: '',
  user: null,
  isLoading: false,
  error: null
};

function authReducer(state = DEFAULT_STATE, action = {}) {
  const { type, payload } = action;

  switch (type) {
    case ACTION_TYPES.LOGIN_START:
      return { ...state, isLoading: true };

    case ACTION_TYPES.LOGIN_SUCCESS:
      return { ...state, ...payload, error: null, isLoading: false };

    case ACTION_TYPES.LOGIN_FAIL:
      return {
        ...state,
        token: '',
        user: null,
        error: payload,
        isLoading: false
      };

    case ACTION_TYPES.LOGOUT_START:
      return { ...state, isLoading: true };

    case ACTION_TYPES.LOGOUT_SUCCESS:
      return {
        ...state,
        token: '',
        user: null,
        error: null,
        isLoading: false
      };

    case ACTION_TYPES.LOGOUT_FAIL:
      return {
        ...state,
        error: payload,
        isLoading: false
      };

    default:
      return state;
  }
}

export default authReducer;
