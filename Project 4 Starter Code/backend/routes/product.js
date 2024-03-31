const express = require("express");
const { createNewProduct ,getProductByCategoriesId, getProductById,upDateProductById,deleteProductById} = require("../controllers/product");

const productRouter = express.Router();

productRouter.post("/create", createNewProduct);
productRouter.get("/byCategories/:id", getProductByCategoriesId);
productRouter.get("/byId/:id", getProductById);
productRouter.put("/update/:id", upDateProductById);
productRouter.delete("/delete/:id", deleteProductById);





module.exports = productRouter;