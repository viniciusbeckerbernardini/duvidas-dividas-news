import express from 'express';
import session from 'express-session';
import dotenv from 'dotenv';
import path from 'path';
import connectDataBase from './src/config/db.js';
import routers from './src/routes/index.js';

const dirname = path.resolve();

dotenv.config();

connectDataBase();

const app = express();
app.use(session({
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false },
  secret:process.env.SECRET
}));

app.use(express.static(path.join(dirname, 'public')));
app.set('view engine', 'ejs');
app.set('views', path.join(dirname, 'src/views'));

// Web routes
app.use('/', routers.pageRouter);

const port = process.env.PORT || 9005;

app.listen(port, () => {
  console.log(`Web app: listening at port ${port}`);
});

export default app;
