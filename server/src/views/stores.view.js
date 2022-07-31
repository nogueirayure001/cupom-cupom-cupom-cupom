import createURL from '../utils/url-creator.utils.js';

class StoresDTO {
  constructor({ page, limit, totalPages, data }) {
    this.requestInfo = {};

    this.setDTO(page, limit, totalPages, data);
  }

  setDTO(page, limit, totalPages, data) {
    if (page) this.setPagination(page, limit, totalPages);

    const operationSucceeded = this.setRequestInfo(page, totalPages, data);
    if (!operationSucceeded) return;

    this.data = data;
  }

  setPagination(page, limit, totalPages) {
    const BASE_PAGINATED_URL = `${process.env.API_BASE_URL}/stores/paginated`;

    const generateURL = (page, limit) =>
      createURL(BASE_PAGINATED_URL, page, limit);

    this.pagination = {
      totalPages,
      page,
      previous: null,
      next: null
    };

    if (page == 1 && totalPages > 1) {
      this.pagination.next = generateURL({ page: page + 1, limit });
    } else if (page < totalPages) {
      this.pagination.previous = generateURL({ page: page - 1, limit });
      this.pagination.next = generateURL({ page: page + 1, limit });
    } else if (page <= totalPages + 1) {
      this.pagination.previous = generateURL({ page: page - 1, limit });
    }
  }

  setRequestInfo(page, totalPages, data) {
    if (page && page > totalPages) {
      this.requestInfo.success = false;
      this.requestInfo.message = 'Invalid page number';

      return false;
    }

    if (!data) {
      this.requestInfo.success = false;
      this.requestInfo.message = 'Server failed to deliver data';

      return false;
    }

    this.requestInfo.success = true;
    this.requestInfo.message = 'Request was sucessful';

    return true;
  }
}

export default StoresDTO;
