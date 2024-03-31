const usersModel = require("../models/users");

const register = (req, res) => {
  const {
    firstName,
    lastName,
    age,
    country,
    email,
    password,
    phonNumber,
    role,
  } = req.body;
  const user = new usersModel({
    firstName,
    lastName,
    age,
    country,
    email,
    password,
    role,
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
  const { email, password } = req.body;

  usersModel
    .findOne({ email: email })
    .then((result) => {
      if (result && result.password === password) {
        res.status(201).json({
          success: true,
          message: `Valid login credentials`,
        });
      } else {
        res.status(401).json({
          success: false,
          message: "Invalid login credentials",
        });
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

module.exports = {
  register,
  login,
};
