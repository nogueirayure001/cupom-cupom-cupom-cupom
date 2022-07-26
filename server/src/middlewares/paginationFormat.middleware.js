function paginationFormat(req, res, next) {
  let { page, limit } = req.query;

  if (!page || isNaN(page) || page < 1) {
    req.query.page = 1;
  } else {
    req.query.page = Number(page);
  }

  if (!limit || isNaN(limit) || limit < 1) {
    req.query.limit = 10;
  } else {
    req.query.limit = Number(limit);
  }

  next();
}

export default paginationFormat;
