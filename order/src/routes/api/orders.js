import { Router } from 'express';
import passport from 'passport';
import '../../strategies/strategy-autentification.js';
import OrderController from "../../controllers/order.js";
/*
* Define the microservice routes
*/
const ordersRouter = Router();
const authenticateLocal = passport.authenticate('bearer', { session: false });

ordersRouter
    .post('/create',authenticateLocal,OrderController.create)
    .get('/list', authenticateLocal, OrderController.list)
    .get('/find/:orderId',authenticateLocal,OrderController.get)
    .put('/confirm-delivery', authenticateLocal, OrderController.confirmDelivery)
    .put('/cancel-order', authenticateLocal, OrderController.cancelOrder);
export default ordersRouter;
