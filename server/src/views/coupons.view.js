class CouponsView {
  constructor() {
    this.PAGINATED_URL = `${process.env.API_BASE_URL}/coupons/paginated`;
  }

  getPaginatedDTO(state, data) {
    const { page, limit, totalPages } = state;

    if (!data && limit > 0) {
      return {
        message: "Invalid page number",
      };
    } else if (!data) {
      return {
        message: "Invalid limit number",
      };
    }

    if (page == totalPages) {
      return {
        pagination: {
          previous: `${this.PAGINATED_URL}?page=${page - 1}&limit=${limit}`,
          next: null,
        },
        data: data,
      };
    }

    return {
      pagination: {
        previous: `${this.PAGINATED_URL}?page=${page - 1}&limit=${limit}`,
        next: `${this.PAGINATED_URL}?page=${page + 1}&limit=${limit}`,
      },
      data: data,
    };
  }
}

const couponsViewHandler = new CouponsView();

export { couponsViewHandler };
