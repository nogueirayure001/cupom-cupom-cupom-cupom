import { Store } from '../schemas/stores.schema.d.js';

class StoresDTO {
  public requestInfo: object;
  public pagination: object | undefined;
  public data: Array<Store> | undefined;

  constructor(args = {}) {
    this.requestInfo = {
      success: true,
      message: 'Request was successful'
    };

    const { pagination, data } = args as {
      pagination: object, 
      data: Array<Store>
    };

    if (pagination) this.pagination = pagination;

    if (data) this.data = data;
  }
}

export default StoresDTO;
