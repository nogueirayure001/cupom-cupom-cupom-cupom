import { Auth } from '../schemas/auth.schema.d.js'
import { User } from '../schemas/users.schema.d.js';

class AuthDTO {
  public requestInfo: object;
  public data: object | undefined;

  constructor(args: Auth | undefined | null = {}) {
    this.requestInfo = {
      success: true,
      message: 'Request was successful'
    };

    console.log('args', args);

    const { token, user } = args as { token: string, user: User };

    if (!user) return;

    this.data = {
      token,
      user: {
        userName: user.userName,
        isMaster: user.isMaster
      }
    };
  }
}

export default AuthDTO;
