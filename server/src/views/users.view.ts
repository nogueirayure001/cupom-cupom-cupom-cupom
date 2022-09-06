import { User } from "../schemas/users.schema.d.js";

class UsersDTO {
  public requestInfo: object;
  public data: User | Array<User> | undefined;

  constructor(args = {}) {
    this.requestInfo = {
      success: true,
      message: 'Request was successful'
    };

    const { user, data } = args as {user: User, data: Array<User>};

    if (user) {
      const { userName, email, isMaster, _id } = user;

      this.data = {
        userName,
        email,
        isMaster,
        _id
      };
    }

    if (data) {
      this.data = data;
    }
  }
}

export default UsersDTO;
