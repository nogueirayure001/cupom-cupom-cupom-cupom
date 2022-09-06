class UserError extends Error {
    constructor(message) {
        super();
        this.message = message;
    }
}
UserError.MESSAGES = {
    invalidEmail: 'Invalid e-mail address',
    emailNotFound: 'E-mail not currently in out database',
    emailAlreadyInUse: 'E-mail already in use',
    passwordsDoNotMatch: 'Passwords do not match',
    passwordNotSafe: 'Password is not safe enough',
    invalidUserName: 'Invalid username',
    invalidResourceId: 'Invalid resource identifier',
    invalidDataFormat: 'Did not pass data validation',
    invalidQuery: 'Invalid query parameters',
    invalidCredentials: 'Credentials do not match with any users'
};
export default UserError;
