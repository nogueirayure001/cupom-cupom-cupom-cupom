const {
  getAllCoupons,
  getSearchResults,
} = require("../../model/coupons.model");

function httpGetAllCoupons(req, res) {
  const allCoupons = getAllCoupons();

  if (!allCoupons.length) {
    return res.status(400).json({
      error: "Could not pull data from database",
    });
  }

  return res.status(200).json(allCoupons);
}

async function httpGetSearchResults(req, res) {
  const { filter, filterValue } = req.query;

  const searchedCoupons = await getSearchResults(filter, filterValue);

  if (!searchedCoupons) {
    return res.status(200).json([]);
  }

  return res.status(200).json(searchedCoupons);
}

module.exports = {
  httpGetAllCoupons,
  httpGetSearchResults,
};
