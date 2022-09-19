class NewsletterDTO {
    constructor(args = {}) {
        const { message, data } = args;
        this.requestInfo = {
            success: true,
            message: message
        };
        if (data)
            this.data = data;
    }
}
NewsletterDTO.MESSAGES = {
    subscribe: 'User subscribed to newsletter successfully',
    unsubscribe: 'User unsubscribed from newsletter successfully',
    send: 'Messages successfully sent to subscribers'
};
export default NewsletterDTO;
