const express = require("express");
const {
  createNewProduct,
  getProductByCategoriesId,
  getProductById,
  upDateProductById,
  deleteProductById,
} = require("../controllers/product");
const authentication = require("../middleware/authentication");
const authorization = require("../middleware/authorization")

const productRouter = express.Router();

productRouter.post("/create", authentication, authorization("CREATE_PRODUCT"), createNewProduct);

productRouter.get("/byCategories/:id", getProductByCategoriesId);

productRouter.get("/byId/:id", getProductById);

productRouter.put(
  "/update/:id",
  authentication,
  authorization("UPDATE_PRODUCT"),
  upDateProductById
);

productRouter.delete(
  "/delete/:id",
  authentication,
  authorization("DELETE_PRODUCT"),
  deleteProductById
);

module.exports = productRouter;
