import express from 'express';
import dotenv from 'dotenv';
import path from 'path';
import cors from 'cors';
import connectDataBase from './src/config/db.js';
import routers from './src/routes/index.js';
import mongoose from "mongoose";

const dirname = path.resolve();

dotenv.config();

connectDataBase();

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(dirname, 'public')));
app.set('view engine', 'ejs');
app.set('views', path.join(dirname, 'src/views'));

// Api routes
app.use('/api/user', routers.userRouter);

const port = process.env.PORT || 9001;

app.listen(port, () => {
  console.log(`Auth service: listening at port ${port}`);
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
