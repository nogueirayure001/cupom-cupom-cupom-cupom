import { Router } from 'express';
import { httpGetAllUsers, httpCreateNewUser, httpUpdateUser, httpDeleteUser } from '../controllers/users.controller.js';
const usersRouter = Router();
usersRouter.get('/all', httpGetAllUsers);
usersRouter.post('/create', httpCreateNewUser);
usersRouter.patch('/update', httpUpdateUser);
usersRouter.delete('/delete', httpDeleteUser);
export default usersRouter;
