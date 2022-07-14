const axios = require("axios");

const {
  allCouponsModel,
  lomadeeCouponsModel,
  miscellaneousCouponsModel,
} = require("./mongo/coupons.mongo");

const TIME_LIMIT = 3600000;
const BASE_URL = `https://api.lomadee.com/v2/${process.env.LOMADEE_APP_TOKEN}/coupon/_all?sourceId=${process.env.LOMADEE_SOURCE_ID}`;

function startCouponsModel() {
  let allCoupons = [];
  let miscellaneousCoupons = [];

  const updateCoupons = async () => {
    let miscCoupons;

    const {
      data: { lomadeeCoupons },
    } = await axios.get(BASE_URL, {
      method: "get",
      responseType: "json",
    });

    if (!miscellaneousCoupons.length) {
      miscCoupons = await miscellaneousCouponsModel.find({});

      miscellaneousCoupons = [...miscCoupons];
    }

    if (lomadeeCoupons) {
      allCoupons = [...lomadeeCoupons, ...miscellaneousCoupons];

      await lomadeeCouponsModel.deleteMany({});
      await lomadeeCouponsModel.create(coupons);

      await allCouponsModel.deleteMany({});
      await allCouponsModel.create(coupons);
    }
  };

  const loadCoupons = async () => await updateCoupons();

  const getAllCoupons = () => {
    return allCoupons;
  };

  const getSearchResults = async (filter, filterValue) => {
    const VALID_FILTERS = {
      store: "store.name",
      category: "category.name",
    };

    let searchResult = [];

    if (VALID_FILTERS[filter]) {
      searchResult = await allCouponsModel.find({
        [VALID_FILTERS[filter]]: new RegExp(filterValue, "i"),
      });
    }

    return searchResult;
  };

  setInterval(updateCoupons, TIME_LIMIT);

  return {
    loadCoupons,
    getAllCoupons,
    getSearchResults,
  };
}

const modelFunctions = startCouponsModel();

module.exports = {
  ...modelFunctions,
};
