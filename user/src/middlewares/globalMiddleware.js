import mongoose from 'mongoose';

// eslint-disable-next-line consistent-return
const validId = (req, res, next) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).send({ message: 'Invalid ID' });
  }

  next();
};

export default validId;
