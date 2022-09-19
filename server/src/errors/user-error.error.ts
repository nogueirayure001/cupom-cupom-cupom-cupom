class UserError extends Error {
  static MESSAGES = {
    invalidEmail: 'Invalid e-mail address',
    emailNotFound: 'E-mail not currently in out database',
    emailAlreadyInUse: 'E-mail already in use',
    passwordsDoNotMatch: 'Passwords do not match',
    passwordNotSafe: 'Password is not safe enough',
    invalidUserName: 'Invalid username',
    invalidResourceId: 'Invalid resource identifier',
    invalidDataFormat: 'Did not pass data validation',
    invalidQuery: 'Invalid query parameters',
    invalidCredentials: 'Credentials do not match with any users',
    invalidFile: 'No file was sent',
    invalidSubject: 'Invalid subject'
  };

  constructor(message: string) {
    super();

    this.message = message;
  }
}

export default UserError;
