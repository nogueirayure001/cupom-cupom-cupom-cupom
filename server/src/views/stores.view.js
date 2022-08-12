class StoresDTO {
  constructor(args = {}) {
    this.requestInfo = {
      success: true,
      message: 'Request was successful'
    };

    const { pagination, data } = args;

    if (pagination) this.pagination = pagination;

    if (data) this.data = data;
  }
}

export default StoresDTO;
