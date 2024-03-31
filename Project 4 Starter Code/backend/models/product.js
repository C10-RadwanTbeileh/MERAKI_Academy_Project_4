const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const productSchema = new mongoose.Schema({
  availability: { type: Boolean },
  title: { type: String, required: true },
  price: { type: Number, required: true },
  description: { type: String, required: true },
  size: { type: String },
  password: { type: String },
  image: { type: String },
  categoriesId: { type: mongoose.Schema.Types.ObjectId, ref: "Categories" },
});

module.exports = mongoose.model("Product", productSchema);
