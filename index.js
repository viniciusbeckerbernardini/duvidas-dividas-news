import express from 'express';
import session from 'express-session';
import dotenv from 'dotenv';
import path from 'path';
import cors from 'cors';
import connectDataBase from './src/config/db.js';
import routers from './src/routes/index.js';

const dirname = path.resolve();

dotenv.config();

connectDataBase();

const app = express();
app.use(session({
  secret: process.env.CHAVE_JWT,
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false },
}));
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(dirname, 'public')));
app.set('view engine', 'ejs');
app.set('views', path.join(dirname, 'src/views'));

// Api routes
app.use('/api/users', routers.userRouter);
// Web routes
app.use('/', routers.pageRouter);

const port = process.env.PORT || 9003;

app.listen(port, () => {
  console.log(`Listening at port ${port}`);
});

export default app;
