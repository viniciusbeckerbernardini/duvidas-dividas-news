import bcryptjs from 'bcryptjs';
import Rating from '../models/Rating.js';
import generateToken from '../helpers/generate-token.js';

class RatingController {

  static get = async (req,res) => {
    try {
      const {isbn, userId} = req.params;

      const rating = await Rating.findOne({ id: userId, isbn: isbn });

      return res.status(201).json({ rating });
    } catch (err) {
      return res.status(500).send({ message: err.message });
    }
  }

  static list = async (req,res) => {
    try {
      const { isbn } = req.params;

      const ratings = await Rating.find({ isbn: isbn });

      return res.status(201).json({ ratings });
    } catch (err) {
      return res.status(500).send({ message: err.message });
    }
  }
  static create = async (req, res) => {
    try {
      const { rating, isbn, comment } = req.body;
      const { userId } = req.params;

      const query = {
        $and: [{ userId }, { isbn }],
      };

      const existingRating = await Rating.findOne(query);

      if (existingRating) {
        existingRating.update({rating:rating, comment:comment});
        return res.status(201).json(existingRating);
      }

      const newRating = new Rating({rating:rating, comment:comment, isbn:isbn, userId:userId});

      await newRating.save();

      return res.status(201).json(newRating);
    } catch (err) {
      return res.status(500).send({ message: err.message });
    }
  };
}

export default RatingController;
