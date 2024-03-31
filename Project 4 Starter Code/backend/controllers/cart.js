const CartModel = require("../models/cart");

const createNewCart = (req, res) => {
  const {userId,product} = req.body;
  const newCart = new CartModel({userId,product});
  newCart
    .save()
    .then((result) => {
      res.status(201).json({
        success: true,
        message: `Cart created`,
        categories: result,
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

const getCartByUserId = (req, res) => {};

const upDateCartById = (req, res) => {};

const deleteCartById = (req, res) => {};

module.exports = {
  createNewCart,
  getCartByUserId,
  upDateCartById,
  deleteCartById,
};
