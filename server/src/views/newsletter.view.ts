import { Newsletter } from "../schemas/newsletter.schema.d.js";

class NewsletterDTO {
  static MESSAGES = {
    subscribe: 'User subscribed to newsletter successfully',
    unsubscribe: 'User unsubscribed from newsletter successfully',
    send: 'Messages successfully sent to subscribers'
  };

  public requestInfo: object;
  public data: Array<Newsletter> | undefined;

  constructor(args = {}) {
    const { message, data } = args as { 
      message: string, 
      data: Array<Newsletter>
    };

    this.requestInfo = {
      success: true,
      message: message
    };

    if (data) this.data = data;
  }
}

export default NewsletterDTO;
