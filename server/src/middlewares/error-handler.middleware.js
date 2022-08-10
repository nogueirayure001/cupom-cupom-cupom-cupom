import ErrorDTO from '../views/errors.view.js';
import QueryError from '../errors/query-error.error.js';
import DBError from '../errors/db-error.error.js';
import FormError from '../errors/form-error.error.js';

function errorHandler(error, req, res, next) {
  if (error instanceof QueryError) {
    return res.status(400).json(new ErrorDTO(error));
  }

  if (error instanceof DBError) {
    return res.status(500).json(new ErrorDTO(error));
  }

  if (error instanceof FormError) {
    return res.status(400).json(new ErrorDTO(error));
  }

  return res.status(400).json(new ErrorDTO(error));
}

export default errorHandler;
