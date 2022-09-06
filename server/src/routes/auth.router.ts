import { Router } from 'express';

import {
  httpLogUserIn,
  httpLogUserOut
} from '../controllers/auth.controller.js';

const authRouter = Router();

authRouter.post('/login', httpLogUserIn);
authRouter.delete('/logout', httpLogUserOut);

export default authRouter;
