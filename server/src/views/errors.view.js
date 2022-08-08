class ErrorDTO {
  constructor({ message }) {
    this.requestInfo = {
      success: false,
      message: message
    };
  }
}

export default ErrorDTO;
