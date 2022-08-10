class FormError extends Error {
  static MESSAGES = {
    invalidEmail: 'Invalid e-mail address',
    emailAlreadySubscribed: 'E-mail already in use',
    emailNotFound: 'E-mail not currently subscribed to the newsletter',
    emailAlreadyInUse: 'E-mail already in use',
    passwordsDoNotMatch: 'Passwords do not match',
    passwordNotSafe: 'Password is not safe enough',
    invalidUserName: 'Invalid username',
  };

  constructor(message) {
    super();

    this.message = message;
  }
}

export default FormError;
