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

const getCartByUserId = (req, res) => {
    const id = req.params.id;

    CartModel.findOne({ userId: id })
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

const upDateCartById = (req, res) => {
    const update = req.body;
    const id = req.params.id;
  
    Object.keys(update).forEach((key) => {
      update[key] == "" && delete update[key];
    });
  
    CartModel.findByIdAndUpdate({ _id: id }, req.body, { new: true })
      .then((result) => {
        if (!result) {
          return res.status(404).json({
            success: false,
            message: `Cart  not found`,
          });
        }
        res.status(200).json({
          success: true,
          message: `Product upDate`,
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

const deleteCartById = (req, res) => {
    const id = req.params.id;

    CartModel.findByIdAndDelete({ _id: id })
      .then((result) => {
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

module.exports = {
  createNewCart,
  getCartByUserId,
  upDateCartById,
  deleteCartById,
};
