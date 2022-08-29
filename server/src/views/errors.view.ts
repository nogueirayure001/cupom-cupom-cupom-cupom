class ErrorDTO {
  public requestInfo: object;

  constructor(error: any) {
    this.requestInfo = {
      success: false,
      message: error.message
    };
  }
}

export default ErrorDTO;
