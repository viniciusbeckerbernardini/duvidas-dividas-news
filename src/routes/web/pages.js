import { Router } from 'express';
import '../../strategies/strategy-autentification.js';

import PageController from '../../controllers/page.js';

const pageRouter = Router();

pageRouter
  .get('/', PageController.index)
export default pageRouter;
