export function selectStoresState(state) {
  return state.stores;
}

export function selectStores(state) {
  return state.stores.stores;
}

export function selectPaginatedStores(state) {
  return state.stores.paginatedStores;
}
