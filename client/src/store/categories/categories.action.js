import { ACTION_TYPES } from './index';
import { createAction, httpFetchAPIResource } from '../../utils';

const getCategories = async () => {
  const resourcePath = '/coupons/categories';

  const { data } = await httpFetchAPIResource(resourcePath);

  return data;
};

export function loadCategoriesStart() {
  return createAction(ACTION_TYPES.LOAD_DATA_START);
}

export function loadCategoriesSuccess(categories) {
  return createAction(ACTION_TYPES.LOAD_DATA_SUCCESS, categories);
}

export function loadCategoriesFail(error) {
  return createAction(ACTION_TYPES.LOAD_DATA_FAIL, error);
}

export async function loadCategoriesAsync(dispatch) {
  dispatch(loadCategoriesStart());

  try {
    const categories = await getCategories();

    dispatch(loadCategoriesSuccess(categories));
  } catch (e) {
    dispatch(loadCategoriesFail(e));
  }
}
