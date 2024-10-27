import Order from '../models/Order.js';
import Rating from "../models/Rating.js";

class OrderController {

  static get = async (req,res) => {
    try {
      const {orderId} = req.params;
      const {userId} = req.user;

      const order = await Order.findOne({ _id: orderId, userId: userId });

      if(order){
        return res.status(201).json({ order });
      }

      return res.status(404).send({ message: 'Order not Found' });
    } catch (err) {
      return res.status(500).send({ message: err.message });
    }
  }

  static list = async (req,res) => {
    try {
      const {userId} = req.user;

      const orders = await Order.find({ userId: userId });

      if(orders){
        return res.status(201).json({ orders });
      }

      return res.status(404).json({ message: 'No orders found' });

    } catch (err) {
      return res.status(500).send({ message: err.message });
    }
  }
  static create = async (req, res) => {
    try {
      const { products, cost, sendCost, sendAddress, paymentMethod } = req.body;
      const { userId } = req.user;

      const newOrder = new Order({
        userId:userId,
        products:products,
        cost:cost,
        sendCost:sendCost,
        sendAddress:sendAddress,
        paymentMethod:paymentMethod,
      });

      await newOrder.save();

      return res.status(201).json(newOrder);
    } catch (err) {
      return res.status(500).send({ message: err.message });
    }
  };

  static confirmDelivery = async (req, res) => {
    try {
      const { orderId } = req.body;
      const { userId } = req.user;

      const query = {
        $and: [{ userId }, { id:orderId }],
      };

      const existingRating = await Order.findOneAndUpdate(query,{status:'delivered'});

      if (existingRating) {
        return res.status(200).json(existingRating);
      }

      return res.status(404).json({ message: 'Order not found' });

    } catch (err) {
      return res.status(500).send({ message: err.message });
    }
  };
}

export default OrderController;
