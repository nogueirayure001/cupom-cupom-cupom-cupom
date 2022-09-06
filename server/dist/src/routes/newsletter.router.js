import { Router } from 'express';
import { httpSubscribeToNewsletter, httpUnsubscribeFromNewsletter, httpGetSubscribers } from '../controllers/newsletter.controller.js';
const newsletterRouter = Router();
newsletterRouter.post('/subscribe', httpSubscribeToNewsletter);
newsletterRouter.post('/unsubscribe', httpUnsubscribeFromNewsletter);
newsletterRouter.get('/subscribers', httpGetSubscribers);
export default newsletterRouter;
