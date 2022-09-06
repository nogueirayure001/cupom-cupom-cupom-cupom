class AuthDTO {
    constructor(args = {}) {
        this.requestInfo = {
            success: true,
            message: 'Request was successful'
        };
        const { token, user } = args;
        if (!user)
            return;
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
