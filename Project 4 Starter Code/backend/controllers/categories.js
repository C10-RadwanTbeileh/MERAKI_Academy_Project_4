const CategoriesModel = require("../models/categories");

const createNewCategories = (req, res) => {
  const { name , image } = req.body;
  const newCategories = new CategoriesModel({ name, image });
  newCategories
    .save()
    .then((result) => {
      res.status(201).json({
        success: true,
        message: `Categories created`,
        categories : result,
      });
    })
    .catch((err) => {
      res.status(500).json({
        success: false,
        message: `Server Error`,
        err: err.message,
      });
    });
};

module.exports = { createNewCategories };