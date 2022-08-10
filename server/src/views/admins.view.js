class AdminsDTO {
  constructor(args = {}) {
    this.requestInfo = {
      success: true,
      message: 'Request was successful'
    };

    const { admin, data } = args;

    if (admin) {
      const { userName, email, isMaster, _id } = admin;

      this.data = {
        userName,
        email,
        isMaster,
        id: _id
      };
    }

    if (data) {
      this.data = data;
    }
  }
}

export default AdminsDTO;
