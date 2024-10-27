import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import connectDataBase from './src/config/db.js';
import routers from './src/routes/index.js';

dotenv.config();
connectDataBase();

const app = express();
app.use(cors());
app.use(express.json());

// Api routes
app.use('/api/catalog', routers.catalogRouter);

const port = process.env.PORT || 9002;
app.listen(port, () => {
  console.log(`Listening at port ${port}`);
});

export default app;
