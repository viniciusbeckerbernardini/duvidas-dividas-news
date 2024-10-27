import Rating from '../models/Rating.js';

class RatingController {

  static get = async (req,res) => {
    try {
      const {isbn} = req.params;
      const {userId} = req.user;

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
      const { userId } = req.user;

      const query = {
        $and: [{ userId }, { isbn }],
      };

      const existingRating = await Rating.findOneAndUpdate(query,{rating:rating, comment:comment});

      if (existingRating) {
        return res.status(201).json(existingRating);
      }

      const newRating = new Rating({rating:rating, comment:comment, isbn:isbn, userId:userId});

      await newRating.save();

      return res.status(201).json(newRating);
    } catch (err) {
      return res.status(500).send({ message: err.message });
    }
  };

  static delete = async (req,res) => {
    try {
      const { isbn } = req.params;
      const { userId } = req.user;
      console.log(isbn,userId)

      const query = {
        $and: [{ userId }, { isbn }],
      };

      const existingRating = await Rating.findOneAndDelete(query);

      if (existingRating) {
        return res.status(204).send();
      }

      return res.status(404).json({message:'Rating not found'});
    } catch (err) {
      return res.status(500).send({ message: err.message });
    }
  }
}

export default RatingController;
