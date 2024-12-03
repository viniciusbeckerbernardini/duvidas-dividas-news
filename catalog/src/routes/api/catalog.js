import { Router } from 'express';
import CatalogController from "../../controllers/catalog.js";
/*
* Define the microservice routes
*/
const catalogRouter = Router();

catalogRouter
    .get('/list', CatalogController.list)
    .get('/find/:isbn', CatalogController.find)
export default catalogRouter;
