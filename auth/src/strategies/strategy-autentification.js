import passport from 'passport';
import BearerStrategy from 'passport-http-bearer';
import jwt from 'jsonwebtoken';
import User from '../models/User.js';

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
