import mongoose from 'mongoose';

const OrderSchema = new mongoose.Schema({
  products: {
    type: Array,
  },
  userId:{
    type: String,
  },
  status:{
    type: String,
    default:'pending-payment'
  },
  cost: {
    type: String,
  },
  sendCost: {
    type: String,
  },
  sendAddress: {
    type: Object,
  },
  paymentMethod: {
    type: String,
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

const Order = mongoose.model('orders', OrderSchema);
export default Order;
