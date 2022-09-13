import { Router } from 'express';

import {
  httpLogUserIn,
  httpLogUserOut
} from '../controllers/auth.controller.js';

const router = Router();

router
  .route('/')
  .post(httpLogUserIn)
  .delete(httpLogUserOut);

export default router;
