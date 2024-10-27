import { Router } from 'express';
import CatalogController from "../../controllers/catalog.js";

const catalogRouter = Router();

catalogRouter
    .get('/list', CatalogController.list)
    .get('/find/:isbn', CatalogController.find)
export default catalogRouter;
