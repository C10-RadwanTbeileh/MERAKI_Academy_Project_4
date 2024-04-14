const CategoriesModel = require("../models/categories");

const createNewCategories = (req, res) => {
  const { name, image } = req.body;
  const newCategories = new CategoriesModel({ name, image });
  newCategories
    .save()
    .then((result) => {
      res.status(201).json({
        success: true,
        message: `Categories created`,
        categories: result,
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

const getAllCategories = (req, res) => {
  CategoriesModel.find({})
  
    .then((result) => {
      res.status(201).json({
        success: true,
        message: `Categories`,
        categories: result,
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

const upDateCategoriesById = (req, res) => {
  const update = req.body;
  const id = req.params.id;

  Object.keys(update).forEach((key) => {
    update[key] == "" && delete update[key];
  });

  CategoriesModel.findByIdAndUpdate({ _id: id }, req.body, { new: true })
    .then((result) => {
      if (!result) {
        return res.status(404).json({
          success: false,
          message: `Categories not found`,
        });
      }
      res.status(200).json({
        success: true,
        message: `Categories upDate`,
        categories: result,
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

module.exports = {
  createNewCategories,
  getAllCategories,
  upDateCategoriesById,
};
