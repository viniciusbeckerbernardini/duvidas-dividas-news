import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import connectDataBase from './src/config/db.js';
import routers from './src/routes/index.js';
import mongoose from "mongoose";

dotenv.config();
connectDataBase();

const app = express();
app.use(cors());
app.use(express.json());

// Api routes
app.use('/api/catalog', routers.catalogRouter);

const port = process.env.PORT || 9002;
app.listen(port, () => {
  console.log(`Catalog service: listening at port ${port}`);
});

process.on('SIGINT', async () => {
  console.log('SIGINT signal received: closing MongoDB connection.');
  await mongoose.connection.close();
  console.log('MongoDB connection closed.');
  process.exit(0);
});

process.on('SIGTERM', async () => {
  console.log('SIGTERM signal received: closing MongoDB connection.');
  await mongoose.connection.close();
  console.log('MongoDB connection closed.');
  process.exit(0);
});

export default app;
