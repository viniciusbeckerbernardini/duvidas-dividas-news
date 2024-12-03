import Cart from '../models/Cart.js';

class CartController {
  /*
  * User controller class is used to set the responses for the https
  * requests of the routes/api/carts.js
  */
  static get = async (req,res) => {
    try {
      const {userId} = req.user;

      const cart = await Cart.findOne({ userId: userId });

      if(cart){
        return res.status(201).json({ cart });
      }else{
        const newCart = new Cart({
          userId:userId,
          products:[],
        });
        await newCart.save();
        return res.status(200).json(newCart);
      }

    } catch (err) {
      return res.status(500).send({ message: err.message });
    }
  }

  static addProductCart = async (req, res) => {
    try {
      let { product } = req.body;
      const { userId } = req.user;

      let existentCart = await Cart.findOne({userId: userId});

      if(existentCart == null){
        const newCart = new Cart({
          userId:userId,
          products:[product],
        });
        await newCart.save();
        return res.status(200).json(newCart);
      }else{
        const existentProductIndex = existentCart.products.findIndex((p) => p.isbn === product.isbn )
        let cartUpdated;

        if(existentProductIndex >= 0){
          let productQuantity = existentCart.products[existentProductIndex]?.quantity ?? 1;

          existentCart.products[existentProductIndex].quantity = productQuantity + 1;

          cartUpdated = existentCart.products

        }else{
          cartUpdated = [...existentCart.products, product]
        }

        const updatedCart= await Cart.findOneAndUpdate({_id:existentCart._id},{products: cartUpdated}, {new: true})

        if (existentCart) {
          return res.status(200).json(updatedCart);
        }
      }

      return res.status(404).json({ message: 'Cart not found' });

    } catch (err) {
      return res.status(500).send({ message: err.message });
    }
  };

  static removeProductCart = async (req, res) => {
    try {
      let { product } = req.body;
      const { userId } = req.user;

      let existentCart = await Cart.findOne({userId: userId});

      if(existentCart == null){
        const newCart = new Cart({
          userId:userId,
          products:[product],
        });
        await newCart.save();
        return res.status(200).json(newCart);
      }else{
        const existentProductIndex = existentCart.products.findIndex((p) => p.isbn === product.isbn )
        let cartUpdated;

        if(existentProductIndex >= 0){
          let productQuantity = existentCart.products[existentProductIndex]?.quantity - 1;
          existentCart.products[existentProductIndex].quantity = productQuantity;

          if(productQuantity < 1 || isNaN(productQuantity)){
            existentCart.products.splice(existentProductIndex,1);
          }
          cartUpdated = existentCart.products

        }else{
          return res.status(404).json({ message: 'Not found in cart' });
        }

        const updatedCart= await Cart.findOneAndUpdate({_id:existentCart._id},{products: cartUpdated}, {new: true})

        if (existentCart) {
          return res.status(200).json(updatedCart);
        }
      }

      return res.status(404).json({ message: 'Cart not found' });

    } catch (err) {
      return res.status(500).send({ message: err.message });
    }
  };

  static clearCart = async (req, res) => {
    try {
      const { userId } = req.user;

      let existentCart = await Cart.findOne({userId: userId});

      if(existentCart == null){
        const newCart = new Cart({
          userId:userId,
          products:[],
        });
        await newCart.save();
        return res.status(200).json(newCart);
      }else{
       const updatedCart= await Cart.findOneAndUpdate({_id:existentCart._id},{products: []}, {new: true})
        if (existentCart) {
          return res.status(200).json(updatedCart);
        }
      }

      return res.status(404).json({ message: 'Cart not found' });

    } catch (err) {
      return res.status(500).send({ message: err.message });
    }
  };
}

export default CartController;
