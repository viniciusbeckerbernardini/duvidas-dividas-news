import { Router } from 'express';
import '../../strategies/strategy-autentification.js';

import PageController from '../../controllers/page.js';

const pageRouter = Router();
/*
* Define the web-app routes
*/

const logoutUser = (req, res) => {
  req.session.destroy();
  res.redirect('/');
  return true;
};

pageRouter
    .get('/', PageController.home)
    .get('/login', PageController.login)
    .get('/create-account', PageController.createAccount)
    .get('/logout', logoutUser)
    .get('/product/detail/:id', PageController.productDetail)
    .get('/cart', PageController.cart)
    .get('/account/me', PageController.me)
    .get('/account/orders', PageController.orders)
    .get('/order/detail/:id', PageController.orderDetail);


export default pageRouter;
