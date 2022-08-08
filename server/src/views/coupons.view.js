class CouponsDTO {
  constructor({ pagination, data }) {
    this.requestInfo = {
      success: true,
      message: 'Request was successful'
    };

    if (pagination) this.pagination = pagination;

    if (data) this.data = data;
  }
}

export default CouponsDTO;
