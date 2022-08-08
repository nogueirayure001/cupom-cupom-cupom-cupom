class FormError extends Error {
  static MESSAGES = {
    invalidEmail: 'User sent invalid e-mail address',
    emailAlreadySubscribed:
      'User tried to subscribe with an e-mail already in use',
    emailNotFound: 'This e-mail is not currently subscribed to the newsletter'
  };

  constructor(message) {
    super();

    this.message = message;
  }
}

export default FormError;
