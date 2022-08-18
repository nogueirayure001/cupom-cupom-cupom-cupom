export function selectAuthState(store) {
  return store.auth;
}

export function selectToken(store) {
  return store.auth.token;
}

export function selectUser(store) {
  return store.auth.user;
}
