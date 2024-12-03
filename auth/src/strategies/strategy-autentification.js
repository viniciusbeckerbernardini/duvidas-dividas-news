import passport from 'passport';
import BearerStrategy from 'passport-http-bearer';
import jwt from 'jsonwebtoken';
import User from '../models/User.js';

/*
* Defines how passport will handle with requests, and what he will return
* to application procedure
*/
passport.use(
  new BearerStrategy(async (token, done) => {
    try {
      const payload = jwt.verify(token, process.env.CHAVE_JWT);
      const user = await User.findById(payload.id);

      const account = {
            userId: user.id,
            name: user.name,
            cpf: user.cpf
      }

      done(null, account, { token });
    } catch (error) {
      done(error);
    }
  }),
);
