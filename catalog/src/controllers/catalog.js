import bcryptjs from 'bcryptjs';
import User from '../models/User.js';
import generateToken from '../helpers/generate-token.js';

class UserController {

  static getUser = async (req,res) => {
    try {
      const {userId} = req.params;

      const { name, email, cpf } = await User.findOne({ id: userId });

      return res.status(201).json({ user: {name, email, cpf } });
    } catch (err) {
      return res.status(500).send({ message: err.message });
    }
  }
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

      const user = new User(req.body);

      await user.save();

      return res.status(201).json(user);
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
      return res.status(200).send({ token:token, userId:user._id });
    } catch (error) {
      return res.status(500).send(error.message);
    }
  };
}

export default UserController;
