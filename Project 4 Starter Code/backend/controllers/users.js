const usersModel = require("../models/users");
const CartModel = require("../models/cart");

const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const register = (req, res) => {
  const {
    firstName,
    lastName,
    age,
    country,
    email,
    password,
    phonNumber,
    // role,

  } = req.body;
  const user = new usersModel({
    firstName,
    lastName,
    age,
    country,
    email,
    password,
    role :"6609deaa3a617c2ceb64c4b4",
    phonNumber,
  
  });

  user
    .save()
    .then((result) => {
      res.status(201).json({
        success: true,
        message: `Account Created Successfully`,
        author: result,
      });

      // creat cart

      const newCart = new CartModel({ userId: result._id });
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
    })
    .catch((err) => {
      if (err.keyPattern) {
        return res.status(409).json({
          success: false,
          message: `The email already exists`,
        });
      }
      res.status(500).json({
        success: false,
        message: `Server Error`,
        err: err.message,
      });
    });
};

const login = (req, res) => {
  const email = req.body.email.toLowerCase();
  const password = req.body.password;

  usersModel
    .findOne({ email })
    .populate("role")
    .then(async (result) => {
      if (!result) {
        return res.status(403).json({
          success: false,
          message: `The email doesn't exist or The password you’ve entered is incorrect`,
        });
      }
      try {
        const valid = await bcrypt.compare(password, result.password);
        if (!valid) {
          return res.status(403).json({
            success: false,
            message: `The email doesn't exist or The password you’ve entered is incorrect`,
          });
        }
        const payload = {
          userId: result._id,
          userName: result.firstName,
          role: result.role,
          country: result.country,
        };

        const options = {
          expiresIn: "60m",
        };
        const token = jwt.sign(payload, process.env.SECRET, options);
        res.status(200).json({
          success: true,
          message: `Valid login credentials`,
          token: token,
          userId: result._id,
          userName: result.firstName,

        });
      } catch (error) {
        throw new Error(error.message);
      }
    })
    .catch((err) => {
      res.status(500).json({
        success: false,
        message: `Server Error`,
        err: err.message,
      });
    });
};



const userById = (req,res)=>{
const id= req.params.id;

  usersModel.findOne({_id:id})
  .populate("wishList")
    .then((result) => {
      res.status(201).json({
        success: true,
        message: `user found`,
        user: result,
      });
    })
    .catch((err) => {
      res.status(500).json({
        success: false,
        message: `Server Error`,
        err: err.message,
      });
    });
}


const upDatWishByUserId = (req,res)=>{

  const update = req.body.test;
  const id = req.params.id;
console.log(req.body.test)
  usersModel.findByIdAndUpdate({ _id: id }, {$push:{wishList:update}}, { new: true })
    .then((result) => {
      console.log(result)
      if (!result) {
        return res.status(404).json({
          success: false,
          message: `Wish not found`,
        });
      }
      res.status(200).json({
        success: true,
        message: `Wish upDate`,
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



}

const upDateDeleteWishList =(req,res)=>{

  const update = req.body.test;
  const id = req.params.id;
console.log(update)
  usersModel.findByIdAndUpdate({ _id: id }, {$pull:{wishList:update}}, { new: true })
    .then((result) => {
      if (!result) {
        return res.status(404).json({
          success: false,
          message: `Wish not found`,
        });
      }
      res.status(200).json({
        success: true,
        message: `Wish upDate`,
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
}



module.exports = {
  register,
  login,
  userById,
  upDatWishByUserId,
  upDateDeleteWishList
};
