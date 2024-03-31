const express = require("express");
const { createNewCategories ,getAllCategories ,upDateCategoriesById} = require("../controllers/categories");

const categoriesRouter = express.Router();

categoriesRouter.post("/create", createNewCategories);
categoriesRouter.get("/", getAllCategories);
categoriesRouter.put("/update/:id", upDateCategoriesById);


module.exports = categoriesRouter;