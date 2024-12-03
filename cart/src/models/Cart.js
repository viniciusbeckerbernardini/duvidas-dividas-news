import mongoose from 'mongoose';
/*
* Cart Model defines the properties of the collection
*/
const CartSchema = new mongoose.Schema({
  products: {
    type: Array,
  },
  userId:{
    type: String,
    unique: true,
  },
  dateCreated: {
    type: Date,
    default: Date.now,
  },
  dateUpdated: {
    type: Date,
    default:null,
  },
});

const Order = mongoose.model('carts', CartSchema);
export default Order;
