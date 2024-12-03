import mongoose from 'mongoose';

/*
* This middleware intercepts requests to validated if the id passed
* is in fact an ObjectId
*/
// eslint-disable-next-line consistent-return
const validId = (req, res, next) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).send({ message: 'Invalid ID' });
  }

  next();
};

export default validId;
