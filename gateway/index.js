import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import httpProxy from 'express-http-proxy'
dotenv.config();

import hosts from './services-hosts.js';

const {
  auth_api_url,
  catalog_api_url,
  rating_api_url,
  order_api_url,
  cart_api_url
} = hosts;

const authServiceProxy = httpProxy(auth_api_url);
const catalogServiceProxy = httpProxy(catalog_api_url);
const ratingServiceProxy = httpProxy(rating_api_url);
const orderServiceProxy = httpProxy(order_api_url);
const cartServiceProxy = httpProxy(cart_api_url);
const app = express();
app.use(cors());

const port = process.env.PORT || 9007;

//auth
app.get('/api/user', (req, res, next) => authServiceProxy(req, res, next));
app.post('/api/user/login', (req, res, next) => authServiceProxy(req, res, next));
app.post('/api/user/create-user', (req, res, next) => authServiceProxy(req, res, next));

//order
app.post('/api/order/create', (req, res, next) => orderServiceProxy(req, res, next));
app.get('/api/order/list', (req, res, next) => orderServiceProxy(req, res, next));
app.get('/api/order/find/:orderId', (req, res, next) => orderServiceProxy(req, res, next));
app.put('/api/order/confirm-delivery', (req, res, next) => orderServiceProxy(req, res, next));
app.put('/api/order/cancel-order', (req, res, next) => orderServiceProxy(req, res, next));

//rating
app.get('/api/rating/list/:isbn', (req, res, next) => ratingServiceProxy(req, res, next));
app.get('/api/rating/find/:isbn', (req, res, next) => ratingServiceProxy(req, res, next));
app.post('/api/rating/create', (req, res, next) => ratingServiceProxy(req, res, next));
app.delete('/api/rating/delete/:isbn', (req, res, next) => ratingServiceProxy(req, res, next));

//catalog
app.get('/api/catalog/list', (req, res, next) => catalogServiceProxy(req, res, next));
app.get('/api/catalog/find/:isbn', (req, res, next) => catalogServiceProxy(req, res, next));

//cart
app.get('/api/carts/get', (req, res, next) => cartServiceProxy(req, res, next));
app.post('/api/carts/add-product', (req, res, next) => cartServiceProxy(req, res, next));
app.post('/api/carts/remove-product', (req, res, next) => cartServiceProxy(req, res, next));



app.listen(port, () => {
  console.log(`Gateway service: listening at port ${port}`);
});
