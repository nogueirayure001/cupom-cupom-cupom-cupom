import {
  subscribeToNewsletter,
  unsubscribeFromNewsletter,
  getSubscribers
} from '../model/newsletter.model.js';
import newsletterDTO from '../views/newsletter.view.js';
import Validation from '../utils/validation.utils.js';

async function httpSubscribeToNewsletter(req, res) {
  const { email } = req.body;

  const requestState = {
    action: newsletterDTO.ACTIONS.subscribe,
    data: email,
    validEmail: true,
    operationSuccess: false,
    previouslySubscribed: false
  };

  const validationType = Validation.TYPES.email;
  const validEmail = Validation.validate(validationType, email);

  if (!validEmail) {
    requestState.validEmail = false;

    return res.status(400).json(new newsletterDTO(requestState));
  }

  try {
    const subscribed = await subscribeToNewsletter(email);

    if (!subscribed) {
      requestState.previouslySubscribed = true;

      return res.status(400).json(new newsletterDTO(requestState));
    }

    requestState.operationSuccess = true;

    return res.status(201).json(new newsletterDTO(requestState));
  } catch (e) {
    return res.status(500).json(new newsletterDTO(requestState));
  }
}

async function httpUnsubscribeFromNewsletter(req, res) {
  const { id, email } = req.query;

  const requestState = {
    action: newsletterDTO.ACTIONS.unsubscribe,
    data: email,
    operationSuccess: true,
    previouslySubscribed: true
  };

  try {
    const unsubscribed = await unsubscribeFromNewsletter(id, email);

    if (unsubscribed) {
      return res.status(200).json(new newsletterDTO(requestState));
    }

    requestState.previouslySubscribed = false;

    return res.status(404).json(new newsletterDTO(requestState));
  } catch (e) {
    requestState.operationSuccess = false;

    return res.status(500).json(new newsletterDTO(requestState));
  }
}

async function httpGetSubscribers(req, res) {
  const requestState = {
    action: newsletterDTO.ACTIONS.fetchSubscribers,
    data: null
  };

  try {
    const subscribers = await getSubscribers();

    requestState.data = subscribers;

    return res.status(200).json(new newsletterDTO(requestState));
  } catch (e) {
    return res.status(500).json(new newsletterDTO(requestState));
  }
}

export {
  httpSubscribeToNewsletter,
  httpUnsubscribeFromNewsletter,
  httpGetSubscribers
};
