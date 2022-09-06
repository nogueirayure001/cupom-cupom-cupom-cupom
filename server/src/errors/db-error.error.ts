class DBError extends Error {
  constructor() {
    super();
    this.message = 'Sorry, the server could not complete the request';
  }
}

export default DBError;
