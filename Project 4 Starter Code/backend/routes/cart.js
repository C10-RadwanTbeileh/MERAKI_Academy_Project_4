const express = require("express");
const { createNewCart,getCartByUserId,upDateCartById,deleteCartById} = require("../controllers/cart");

const cartRouter = express.Router();

cartRouter.post("/create", createNewCart);
cartRouter.get("/byUserId/:id", getCartByUserId);
cartRouter.put("/update/:id", upDateCartById);
cartRouter.delete("/delete/:id", deleteCartById);





module.exports = cartRouter;