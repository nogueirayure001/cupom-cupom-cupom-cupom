import {
  subscribeToNewsletter,
  unsubscribeFromNewsletter,
  getSubscribers
} from '../model/newsletter.model.js';
import DTO from '../views/DTO.view.js';

async function httpSubscribeToNewsletter(req, res) {
  const { email } = req.body;

  const requestState = {
    action: DTO.ACTIONS.newsletter,
    email: email,
    validEmail: true,
    operationSuccess: false,
    previouslySubscribed: false
  };

  // check email validity
  const validEmail = true;

  if (!validEmail) {
    requestState.validEmail = false;

    return res.status(400).json(new DTO(requestState));
  }

  try {
    const subscribed = await subscribeToNewsletter(email);

    if (!subscribed) {
      requestState.previouslySubscribed = true;

      return res.status(400).json(new DTO(requestState));
    }

    requestState.operationSuccess = true;

    return res.status(201).json(new DTO(requestState));
  } catch (e) {
    return res.status(500).json(new DTO(requestState));
  }
}

async function httpUnsubscribeFromNewsletter(req, res) {
  const { id, email } = req.query;

  const requestState = {
    action: DTO.ACTIONS.newsletter,
    email: email,
    operationSuccess: true,
    previouslySubscribed: false
  };

  try {
    const unsubscribed = await unsubscribeFromNewsletter(id, email);

    if (!unsubscribed) return res.status(404).json(new DTO(requestState));

    requestState.previouslySubscribed = true;

    return res.status(200).json(new DTO(requestState));
  } catch (e) {
    requestState.operationSuccess = false;

    return res.status(500).json(new DTO(requestState));
  }
}

async function httpGetSubscribers(req, res) {
  const requestState = {
    action: DTO.ACTIONS.newsletter,
    data: null
  };

  try {
    const subscribers = await getSubscribers();

    requestState.data = subscribers;

    return res.status(200).json(new DTO(requestState));
  } catch (e) {
    return res.status(500).json(new DTO(requestState));
  }
}

export {
  httpSubscribeToNewsletter,
  httpUnsubscribeFromNewsletter,
  httpGetSubscribers
};
