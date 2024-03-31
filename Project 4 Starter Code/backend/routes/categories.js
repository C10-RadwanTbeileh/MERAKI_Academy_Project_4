const express = require("express");
const { createNewCategories } = require("../controllers/categories");

const categoriesRouter = express.Router();

categoriesRouter.post("/", createNewCategories);

module.exports = categoriesRouter;