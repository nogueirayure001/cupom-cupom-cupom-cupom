export function selectCouponsState(state) {
  return state.coupons;
}

export function selectPaginatedCoupons(state) {
  return state.coupons.paginatedCoupons;
}
