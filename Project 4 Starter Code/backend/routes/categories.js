const express = require("express");
const { createNewCategories ,getAllCategories ,upDateCategoriesById} = require("../controllers/categories");
const authentication = require("../middleware/authentication");
const authorization = require("../middleware/authorization")

const categoriesRouter = express.Router();

categoriesRouter.post("/create",authentication ,authorization(""), createNewCategories);
categoriesRouter.get("/",authentication ,authorization(""), getAllCategories);
categoriesRouter.put("/update/:id",authentication ,authorization(""), upDateCategoriesById);


module.exports = categoriesRouter;