class newsletterDTO {
  static ACTIONS = {
    subscribe: 'subscribe',
    unsubscribe: 'unsubscribe',
    fetchSubscribers: 'fetchSubscribers'
  };

  constructor(args) {
    this.requestInfo = {};

    this.setDTO(args);
  }

  setDTO(args) {
    const { data, action, ...otherArgs } = args;

    const { ACTIONS } = newsletterDTO;

    switch (action) {
      case ACTIONS.subscribe:
        this.setSubscribingRequestInfo(otherArgs);
        break;

      case ACTIONS.unsubscribe:
        this.setUnsubscribingRequestInfo(otherArgs);
        break;

      case ACTIONS.fetchSubscribers:
        this.setFetchSubscribersRequestInfo(data);
        break;

      default:
        console.log('This action is invalid');
    }

    this.data = data;
  }

  setSubscribingRequestInfo(args) {
    const { validEmail, operationSuccess, previouslySubscribed } = args;

    if (!validEmail) {
      this.requestInfo.success = false;
      this.requestInfo.message = 'User sent invalid e-mail address';

      return;
    }

    if (!operationSuccess && previouslySubscribed) {
      this.requestInfo.success = false;
      this.requestInfo.message =
        'User tried to subscribe with an e-mail already in use';

      return;
    }

    if (!operationSuccess && !previouslySubscribed) {
      this.requestInfo.success = false;
      this.requestInfo.message =
        'Server failed to subscribe user. Please try again';

      return;
    }

    this.requestInfo.success = true;
    this.requestInfo.message = 'User subscribed to newsletter successfully';
  }

  setUnsubscribingRequestInfo(args) {
    const { operationSuccess, previouslySubscribed } = args;

    if (!operationSuccess) {
      this.requestInfo.success = false;
      this.requestInfo.message =
        'Server failed to unsubscribe user. Please try again';

      return;
    }

    if (!previouslySubscribed) {
      this.requestInfo.success = false;
      this.requestInfo.message =
        'This e-mail is not currently subscribed to the newsletter';

      return;
    }

    this.requestInfo.success = true;
    this.requestInfo.message = 'User unsubscribed to newsletter successfully';
  }

  setFetchSubscribersRequestInfo(data) {
    if (!data) {
      this.requestInfo.success = false;
      this.requestInfo.message =
        'Server failed to fetch subscribers. Please try again';

      return;
    }

    this.requestInfo.success = true;
    this.requestInfo.message = 'Subscribers fetched successfully';
  }
}

export default newsletterDTO;
