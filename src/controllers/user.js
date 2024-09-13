import bcryptjs from 'bcryptjs';
import User from '../models/User.js';
import generateToken from '../helpers/generate-token.js';

class UserController {
  static createUser = async (req, res) => {
    try {
      const { cpf, email } = req.body;

      const query = {
        $or: [{ cpf }, { email }],
      };

      const existingUser = await User.findOne(query);

      if (existingUser) {
        return res
          .status(400)
          .send({ error: 'CPF or email has already registered' });
      }

      const napiUser = new User(req.body);

      await napiUser.save();

      return res.status(201).json(napiUser);
    } catch (err) {
      return res.status(500).send({ message: err.message });
    }
  };

  static login = async (req, res) => {
    const { email, password } = req.body;

    try {
      const user = await User.findOne({ email }).select('+password');

      if (!user) {
        return res.status(400).send({ message: 'Password or email invalid!' });
      }

      const matchPassword = await bcryptjs.compare(password, user.password);
      if (!matchPassword) {
        return res.status(400).send({ message: 'Password or email invalid!' });
      }

      const token = generateToken(user._id);
      res.set('Authorization', token);
      req.session.user = user;
      return res.status(200).send({ token });
    } catch (error) {
      return res.status(500).send(error.message);
    }
  };

  static listUsers = async (_req, res) => {
    try {
      const result = await User.find();
      if (!result) {
        return res.status(404).send({ error: 'No users were found' });
      }

      return res.status(200).send({ result });
    } catch (error) {
      return res.status(500).send({ message: 'Something went wrong' });
    }
  };

  static removeUser = async (req, res) => {
    const { id } = req.params;

    try {
      const result = await User.findByIdAndDelete(id);

      if (!result) {
        return res.status(404).send({ message: 'User not found' });
      }
      return res.status(204).send('ok');
    } catch (error) {
      return res.status(500).send({ message: error.message });
    }
  };
}

export default UserController;
