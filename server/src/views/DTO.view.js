const BASE_PAGINATED_URL = `${process.env.API_BASE_URL}/coupons/paginated`;

class DTO {
  static ACTIONS = Object.freeze({
    paginated: 'paginated',
    featured: 'featured',
    search: 'search',
    categories: 'categories'
  });

  constructor({ page, limit, totalPages, data, action }) {
    this.requestInfo = {};

    const { ACTIONS } = DTO;

    switch (action) {
      case ACTIONS.paginated:
        this.setPaginatedDTO(page, limit, totalPages, data);
        break;

      case ACTIONS.featured:
        this.setFeaturedDTO(data);
        break;

      case ACTIONS.search:
        this.setSearchDTO(data);
        break;

      case ACTIONS.categories:
        this.setCategoriesDTO(data);
        break;

      default:
        console.log('Action not allowed');
    }
  }

  setPaginatedDTO(page, limit, totalPages, data) {
    const overallOperationSucess = this.setPaginatedRequestInfo(
      page,
      totalPages,
      data
    );
    if (!overallOperationSucess) return;

    this.setPagination(page, limit, totalPages);

    this.data = data;
  }

  setFeaturedDTO(data) {
    const overallOperationSucess = this.setFeaturedRequestInfo(data);
    if (!overallOperationSucess) return;

    this.data = data;
  }

  setSearchDTO(data) {
    const overallOperationSucess = this.setSearchRequestInfo(data);
    if (!overallOperationSucess) return;

    this.data = data;
  }

  setCategoriesDTO(data) {
    const overallOperationSucess = this.setCategoriesRequestInfo(data);
    if (!overallOperationSucess) return;

    this.data = data;
  }

  setPaginatedRequestInfo(page, totalPages, data) {
    if (page > totalPages) {
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

  setFeaturedRequestInfo(data) {
    if (!data) {
      this.requestInfo.success = false;
      this.requestInfo.message = 'Server failed to deliver data';

      return false;
    }

    this.requestInfo.success = true;
    this.requestInfo.message = 'Request was sucessful';

    return true;
  }

  setSearchRequestInfo(data) {
    if (!data) {
      this.requestInfo.success = false;
      this.requestInfo.message = 'Server failed to deliver data';

      return false;
    }

    this.requestInfo.success = true;
    this.requestInfo.message = 'Request was sucessful';

    return true;
  }

  setCategoriesRequestInfo(data) {
    if (!data) {
      this.requestInfo.success = false;
      this.requestInfo.message = 'Server failed to deliver data';

      return false;
    }

    this.requestInfo.success = true;
    this.requestInfo.message = 'Request was sucessful';

    return true;
  }

  setPagination(page, limit, totalPages) {
    this.pagination = {
      totalPages,
      page
    };

    if (page == 1) {
      this.pagination.previous = null;

      if (totalPages > 1) {
        this.pagination.next = `${BASE_PAGINATED_URL}?page=${
          page + 1
        }&limit=${limit}`;
      } else {
        this.pagination.next = null;
      }
    } else if (page < totalPages) {
      this.pagination.previous = `${BASE_PAGINATED_URL}?page=${
        page - 1
      }&limit=${limit}`;

      this.pagination.next = `${BASE_PAGINATED_URL}?page=${
        page + 1
      }&limit=${limit}`;
    } else {
      this.pagination.previous = `${BASE_PAGINATED_URL}?page=${
        page - 1
      }&limit=${limit}`;

      this.pagination.next = null;
    }
  }
}

export default DTO;
