import { Router } from 'express';
import passport from 'passport';
import '../../strategies/strategy-autentification.js';
import RatingController from "../../controllers/rating.js";

const ratingsRouter = Router();
const authenticateLocal = passport.authenticate('bearer', { session: false });

ratingsRouter
    .post('/create',authenticateLocal,RatingController.create)
    .get('/list/:isbn', RatingController.list)
    .get('/find/:isbn',authenticateLocal,RatingController.get)
    .delete('/delete/:isbn', authenticateLocal, RatingController.delete);
export default ratingsRouter;
