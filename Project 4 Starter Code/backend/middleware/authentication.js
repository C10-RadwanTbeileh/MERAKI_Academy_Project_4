const jwt = require("jsonwebtoken");

const authentication = async (req, res, next) => {
  if (req.headers.authorization) {
    const token = req.headers.authorization.split(" ").pop();

    try {
      const verify = await jwt.verify(token, process.env.SECRET);
      req.token = verify;
      next();
    } catch (err) {
      res.send("token is invalid");
    }
  } else {
    res.status(401).json("you must login");
  }
};

module.exports = authentication;
