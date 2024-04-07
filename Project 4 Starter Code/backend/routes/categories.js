const express = require("express");
const { createNewCategories ,getAllCategories ,upDateCategoriesById} = require("../controllers/categories");
const authentication = require("../middleware/authentication");
const authorization = require("../middleware/authorization")

const categoriesRouter = express.Router();

categoriesRouter.post("/create",authentication, createNewCategories);
categoriesRouter.get("/",authentication, getAllCategories);
categoriesRouter.put("/update/:id",authentication , upDateCategoriesById);


module.exports = categoriesRouter;