import { Router } from 'express';
import passport from 'passport';
import '../../strategies/strategy-autentification.js';
import CartController from "../../controllers/cart.js";

const ordersRouter = Router();
const authenticateLocal = passport.authenticate('bearer', { session: false });

ordersRouter
    .post('/add-product',authenticateLocal,CartController.addProductCart)
    .post('/remove-product', authenticateLocal, CartController.removeProductCart)
    .post('/clear', authenticateLocal, CartController.clearCart)
    .get('/get',authenticateLocal,CartController.get)
export default ordersRouter;
