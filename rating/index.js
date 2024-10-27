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
app.use('/api/rating', routers.ratingsRouter);

const port = process.env.PORT || 9003;

app.listen(port, () => {
  console.log(`Rating: listening at port ${port}`);
});

export default app;
