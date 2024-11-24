import express from 'express';
import dotenv from 'dotenv';
import path from 'path';
import cors from 'cors';
import connectDataBase from './src/config/db.js';
import routers from './src/routes/index.js';

dotenv.config();

connectDataBase();

const app = express();
app.use(cors());
app.use(express.json());

// Api routes
app.use('/api/orders', routers.ordersRouter);

const port = process.env.PORT || 9004;

app.listen(port, () => {
  console.log(`Order service: listening at port ${port}`);
});

export default app;
