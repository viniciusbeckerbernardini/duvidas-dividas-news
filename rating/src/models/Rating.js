import mongoose from 'mongoose';
/*
* Rating Model defines the properties of the collection
*/
const RatingSchema = new mongoose.Schema({
  rating: {
    type: Intl,
  },
  isbn: {
    type: String,
  },
  userId: {
    type: String,
  },
  comment: {
    type: String,
  },
  dateCreated: {
    type: Date,
    default: Date.now,
  },
});

const Rating = mongoose.model('Rating', RatingSchema);
export default Rating;
