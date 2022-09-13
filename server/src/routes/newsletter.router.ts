import { Router } from 'express';

import {
  httpSubscribeToNewsletter,
  httpUnsubscribeFromNewsletter,
  httpGetSubscribers
} from '../controllers/newsletter.controller.js';

const router = Router();

router
  .route('/')
  .get(httpGetSubscribers)
  .post(httpSubscribeToNewsletter)
  .delete(httpUnsubscribeFromNewsletter);

// TODO
// router.post('/subscribe', httpSubscribeToNewsletter);
// router.post('/unsubscribe', httpUnsubscribeFromNewsletter);
// router.get('/subscribers', httpGetSubscribers);

export default router;
