import { ACTION_TYPES } from './index';
import { createAction, httpFetchAPIResource } from '../../utils';

async function getFeaturedStores() {
  const resourcePath = '/stores/featured';

  const { data } = await httpFetchAPIResource(resourcePath);

  return data;
}

export function loadFeaturedStoresStart() {
  return createAction(ACTION_TYPES.LOAD_DATA_START);
}

export function loadFeaturedStoresSuccess(featuredStores) {
  return createAction(ACTION_TYPES.LOAD_DATA_SUCCESS, featuredStores);
}

export function loadFeaturedStoresFail(error) {
  return createAction(ACTION_TYPES.LOAD_DATA_FAIL, error);
}

export async function loadFeaturedStoresAsync(dispatch) {
  dispatch(loadFeaturedStoresStart());

  try {
    const featuredStores = await getFeaturedStores();

    dispatch(loadFeaturedStoresSuccess(featuredStores));
  } catch (e) {
    dispatch(loadFeaturedStoresFail(e));
  }
}
