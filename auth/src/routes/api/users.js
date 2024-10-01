import { Router } from 'express';
import passport from 'passport';
import UserController from '../../controllers/user.js';
import '../../strategies/strategy-autentification.js';
import validId from '../../middlewares/globalMiddleware.js';

const userRouter = Router();
const authenticateLocal = passport.authenticate('bearer', { session: false });

userRouter
  .post('/create-user', UserController.createUser)
  .get('/list-users', authenticateLocal, UserController.listUsers)
  .delete('/remove-napi-user/:id', authenticateLocal, validId, UserController.removeUser)
  .post('/login', UserController.login);
export default userRouter;