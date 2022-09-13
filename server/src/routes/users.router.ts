import { Router } from 'express';

import {
  httpGetAllUsers,
  httpCreateNewUser,
  httpUpdateUser,
  httpDeleteUser
} from '../controllers/users.controller.js';

const router = Router();

router
  .route("/")
  .get(httpGetAllUsers)
  .post(httpCreateNewUser)
  .patch(httpUpdateUser)
  .delete(httpDeleteUser);

export default router;
