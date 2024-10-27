import bcryptjs from 'bcryptjs';
import User from '../models/User.js';
import generateToken from '../helpers/generate-token.js';

class UserController {
  static getUserInfo = async (_req, res) => {
    try {
      const result = await User.find();
      if (!result) {
        return res.status(404).send({ error: 'No user were found' });
      }

      return res.status(200).send({ result });
    } catch (error) {
      return res.status(500).send({ message: 'Something went wrong' });
    }
  };
}

export default UserController;
