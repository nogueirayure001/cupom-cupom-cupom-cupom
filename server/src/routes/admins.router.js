import { Router } from 'express';

import {
  httpGetAllAdmins,
  httpCreateNewAdmin,
  httpUpdateAdmin,
  httpDeleteAdmin
} from '../controllers/admins.controller.js';

const adminsRouter = Router();

adminsRouter.get('/all', httpGetAllAdmins);
adminsRouter.post('/create', httpCreateNewAdmin);
adminsRouter.patch('/update', httpUpdateAdmin);
adminsRouter.delete('/delete', httpDeleteAdmin);

export default adminsRouter;
