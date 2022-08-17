class UsersDTO {
  constructor(args = {}) {
    this.requestInfo = {
      success: true,
      message: 'Request was successful'
    };

    const { user, data } = args;

    if (user) {
      const { userName, email, isMaster, _id } = user;

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

export default UsersDTO;
