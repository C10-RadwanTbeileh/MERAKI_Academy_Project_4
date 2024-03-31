const express = require("express");
const { createNewCategories ,getAllCategories ,upDateCategories} = require("../controllers/categories");

const categoriesRouter = express.Router();

categoriesRouter.post("/create", createNewCategories);
categoriesRouter.get("/", getAllCategories);
categoriesRouter.put("/update", upDateCategories);


module.exports = categoriesRouter;