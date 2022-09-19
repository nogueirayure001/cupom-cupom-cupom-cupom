import { Router } from 'express';
import { httpSubscribeToNewsletter, httpUnsubscribeFromNewsletter, httpAdminSendNewsletter } from '../controllers/newsletter.controller.js';
const router = Router();
router
    .route('/')
    .post(httpSubscribeToNewsletter)
    .delete(httpUnsubscribeFromNewsletter);
router
    .post('/admin', httpAdminSendNewsletter);
export default router;
