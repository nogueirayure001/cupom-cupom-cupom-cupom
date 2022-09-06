class ErrorDTO {
    constructor(error) {
        this.requestInfo = {
            success: false,
            message: error.message
        };
    }
}
export default ErrorDTO;
