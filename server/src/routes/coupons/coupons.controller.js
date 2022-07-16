import { couponsModelHandler } from "../../model/coupons.model.js";
import { couponsViewHandler } from "../../views/coupons.view.js";

async function httpGetPaginatedCoupons(req, res) {
  const { page = 1, limit = 10 } = req.query;

  const totalCoupons = couponsModelHandler.getCouponsNumber();
  const totalPages = Math.ceil(totalCoupons / limit);

  const requestState = {
    page,
    limit,
    totalPages,
  };

  if (page > totalPages || page < 1 || limit < 1) {
    const DTO = couponsViewHandler.getPaginatedDTO(requestState, null);
    return res.status(404).json(DTO);
  }

  const responseData = couponsModelHandler.getPaginatedCoupons(page, limit);

  const DTO = couponsViewHandler.getPaginatedDTO(requestState, responseData);

  return res.status(200).json(DTO);
}

export { httpGetPaginatedCoupons };
