class AuthError extends Error {
  constructor() {
    super();
    this.message = 'Must authenticate to have access to requested resources';
  }
}

export default AuthError;
