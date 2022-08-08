class QueryError extends Error {
  constructor() {
    super();
    this.message = 'Bad query parameters';
  }
}

export default QueryError;
