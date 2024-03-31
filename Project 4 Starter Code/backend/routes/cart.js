const express = require("express");
const { createNewCart,getCartByUserId,upDateCartById,deleteCartById} = require("../controllers/cart");

const cartRouter = express.Router();

cartRouter.post("/create", createNewCart);
cartRouter.get("/byUserId", getCartByUserId);
cartRouter.put("/update", upDateCartById);
cartRouter.delete("/delete", deleteCartById);





module.exports = cartRouter;