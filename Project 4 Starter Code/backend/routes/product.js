const express = require("express");
const { createNewProduct ,getProductByCategoriesId, getProductById,upDateProductById,deleteProductById} = require("../controllers/product");

const productRouter = express.Router();

productRouter.post("/create", createNewProduct);
productRouter.get("/byCategories", getProductByCategoriesId);
productRouter.get("/byId", getProductById);
productRouter.put("/update", upDateProductById);
productRouter.delete("/delete", deleteProductById);





module.exports = productRouter;