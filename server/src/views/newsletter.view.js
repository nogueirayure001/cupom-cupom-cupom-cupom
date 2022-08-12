class NewsletterDTO {
  static MESSAGES = {
    subscribe: 'User subscribed to newsletter successfully',
    unsubscribe: 'User unsubscribed from newsletter successfully',
    fetch: 'Subscribers fetched successfully'
  };

  constructor(args = {}) {
    const { message, data } = args;

    this.requestInfo = {
      success: true,
      message: message
    };

    if (data) this.data = data;
  }
}

export default NewsletterDTO;
