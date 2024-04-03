const express = require("express");
const { getCartByUserId,upDateCartByUserId,deleteProductByUserId,upDateQuantityByUserIdAndProductId} = require("../controllers/cart");
const authentication = require("../middleware/authentication");
const authorization = require("../middleware/authorization");

const cartRouter = express.Router();


cartRouter.get("/byUserId/:id" , getCartByUserId);
cartRouter.put("/update",authentication , upDateCartByUserId);
cartRouter.delete("/delete/:id",authentication, deleteProductByUserId);
cartRouter.put("/updateQuantity",authentication , upDateQuantityByUserIdAndProductId);




module.exports = cartRouter;