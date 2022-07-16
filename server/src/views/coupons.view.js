class CouponsView {
  constructor() {
    this.PAGINATED_URL = `${process.env.API_BASE_URL}/coupons/paginated`;
  }

  getPaginatedDTO(state, data) {
    const { page, limit, totalPages } = state;

    if (!data && limit > 0) {
      return {
        requestInfo: {
          success: false,
          message: "Invalid page number",
        },
      };
    } else if (!data) {
      return {
        requestInfo: {
          success: false,
          message: "Invalid limit number",
        },
      };
    }

    if (page == totalPages) {
      return {
        requestInfo: {
          success: true,
          message: null,
        },
        pagination: {
          previous: `${this.PAGINATED_URL}?page=${page - 1}&limit=${limit}`,
          next: null,
        },
        data: data,
      };
    } else if (page == 1) {
      return {
        requestInfo: {
          success: true,
          message: null,
        },
        pagination: {
          previous: null,
          next: `${this.PAGINATED_URL}?page=${page + 1}&limit=${limit}`,
        },
        data: data,
      };
    }

    return {
      requestInfo: {
        success: true,
        message: null,
      },
      pagination: {
        previous: `${this.PAGINATED_URL}?page=${page - 1}&limit=${limit}`,
        next: `${this.PAGINATED_URL}?page=${page + 1}&limit=${limit}`,
      },
      data: data,
    };
  }

  getFeaturedDTO(data) {
    console.log(data);
    if (!data || !data.length) {
      return {
        requestInfo: {
          success: false,
          message: "Could not fetch featured coupons",
        },
      };
    }

    return {
      requestInfo: {
        success: true,
        message: null,
      },
      data: data,
    };
  }
}

const couponsViewHandler = new CouponsView();

export { couponsViewHandler };
