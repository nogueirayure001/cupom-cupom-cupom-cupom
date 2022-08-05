import { ACTION_TYPES } from './index';

const DEFAULT_STATE = {
  showModal: false,
  success: true,
  message: '',
  isLoading: false
};

export function NewsletterReducer(state = DEFAULT_STATE, action) {
  const { type, payload } = action;

  switch (type) {
    case ACTION_TYPES.CHANGE_MODAL_STATE: {
      return {
        ...state,
        showModal: payload
      };
    }

    case ACTION_TYPES.SUBSCRIBE_START:
      return {
        ...state,
        isLoading: true
      };

    case ACTION_TYPES.SUBSCRIBE_SUCCESS:
      return {
        ...state,
        showModal: true,
        ...payload,
        isLoading: false
      };

    case ACTION_TYPES.SUBSCRIBE_FAIL:
      return {
        ...state,
        showModal: true,
        success: false,
        message: payload,
        isLoading: false
      };

    default:
      return state;
  }
}
