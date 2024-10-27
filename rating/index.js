import express from 'express';
import dotenv from 'dotenv';
import path from 'path';
import cors from 'cors';
import connectDataBase from './src/config/db.js';
import routers from './src/routes/index.js';

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
app.use('/api/rating', routers.ratingsRouter);

const port = process.env.PORT || 9003;

app.listen(port, () => {
  console.log(`Listening at port ${port}`);
});

export default app;