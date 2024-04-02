const express = require("express");
const { createNewCart,getCartByUserId,upDateCartById,deleteCartById} = require("../controllers/cart");
const authentication = require("../middleware/authentication");
const authorization = require("../middleware/authorization");

const cartRouter = express.Router();

cartRouter.post("/create",authentication ,authorization(""),createNewCart);
cartRouter.get("/byUserId/:id",authentication ,authorization(""), getCartByUserId);
cartRouter.put("/update/:id",authentication ,authorization(""), upDateCartById);
cartRouter.delete("/delete/:id",authentication ,authorization(""), deleteCartById);





module.exports = cartRouter;