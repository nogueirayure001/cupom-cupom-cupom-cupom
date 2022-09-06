import { Coupon } from '../schemas/coupons.schema.d.js';

class CouponsDTO {
  public requestInfo: object;
  public pagination: object | undefined;
  public data: Array<Coupon> | Array<string> | undefined;

  constructor(args = {}) {
    this.requestInfo = {
      success: true,
      message: 'Request was successful'
    };

    const { pagination, data } = args as {
      pagination: object;
      data: Array<Coupon> | Array<string>;
    };

    if (pagination) this.pagination = pagination;

    if (data) this.data = data;
  }
}

export default CouponsDTO;
