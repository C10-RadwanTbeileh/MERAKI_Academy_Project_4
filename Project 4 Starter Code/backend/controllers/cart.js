const CartModel = require("../models/cart");

const getCartByUserId = (req, res) => {
  const id = req.params.id;

  CartModel.findOne({ userId: id })
    .populate("products.product")
    .exec()
    .then((result) => {
      if (!result) {
        return res.status(404).json({
          success: false,
          message: `Cart By This UserId not found`,
        });
      }
      res.status(201).json({
        success: true,
        message: `Cart `,
        product: result,
      });
    })
    .catch((err) => {
      res.status(500).json({
        success: false,
        message: `Server Error`,
        err: err.message,
      });
    });
};
//many product
const upDateCartByUserId = (req, res) => {
  const products = req.body;
  console.log(req.token.userId);
  const id = req.token.userId;

  CartModel.findOneAndUpdate(
    { userId: id },
    { $push: { products: products } },
    { new: true }
  )
    .then((result) => {
      if (!result) {
        // create new prod/>> new cart
        return res.status(404).json({
          success: false,
          message: `Product or Cart  not found`,
        });
      }
      console.log(result);
      res.status(200).json({
        success: true,
        message: `Product upDate`,
        products: result,
      });
    })
    .catch((err) => {
      res.status(500).json({
        success: false,
        message: `Server Error`,
        err: err.message,
      });
    });
};

//delete product
const deleteProductByUserId = (req, res) => {
  const id = req.token.userId;
  const deleteProduct = req.body.product;
  console.log(id);
  console.log(deleteProduct);
  CartModel.findOneAndUpdate(
    { userId: id },
    { $pull: { product: deleteProduct } },
    { new: true }
  )
    .then((result) => {
      console.log(result);
      if (!result) {
        return res.status(404).json({
          success: false,
          message: `Cart By This Id not found`,
        });
      }
      res.status(201).json({
        success: true,
        message: `Cart deleted`,
        product: result,
      });
    })
    .catch((err) => {
      res.status(500).json({
        success: false,
        message: `Server Error`,
        err: err.message,
      });
    });
};
//update Quantity
const upDateQuantityByUserIdAndProductId = (req, res) => {
  const { productID, quantity } = req.body;
  console.log(req.token.userId);
  const id = req.token.userId;

  CartModel.findOneAndUpdate(
    { userId: id, "products._id": productID },
    { $set: { "products.$.quantity": quantity } },
    { new: true }
  )

    .then((result) => {
      if (!result) {
        return res.status(404).json({
          success: false,
          message: `Product or Cart  not found`,
        });
      }
      console.log(result);
      res.status(200).json({
        success: true,
        message: `Product upDate`,
        products: result,
      });
    })
    .catch((err) => {
      res.status(500).json({
        success: false,
        message: `Server Error`,
        err: err.message,
      });
    });
};

module.exports = {
  getCartByUserId,
  upDateCartByUserId,
  deleteProductByUserId,
  upDateQuantityByUserIdAndProductId
};
