import { ACTION_TYPES } from './index';
import { createAction, httpFetchAPIResource } from '../../utils';

const getSearchedStores = async (searchTerm) => {
  const resourcePath = '/stores/search';

  const { data } = await httpFetchAPIResource(resourcePath, { searchTerm });

  return data;
};

function loadSearchedStoresStart() {
  return createAction(ACTION_TYPES.LOAD_DATA_START);
}

function loadSearchedStoresSuccess(stores) {
  return createAction(ACTION_TYPES.LOAD_DATA_SUCCESS, stores);
}

function loadSearchedStoresFail(error) {
  return createAction(ACTION_TYPES.LOAD_DATA_FAIL, error);
}

export function loadSearchedStoresAsync(searchTerm) {
  return async (dispatch) => {
    dispatch(loadSearchedStoresStart());

    try {
      const stores = await getSearchedStores(searchTerm);

      dispatch(loadSearchedStoresSuccess(stores));
    } catch (e) {
      dispatch(loadSearchedStoresFail(e));
    }
  };
}
