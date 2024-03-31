const mongoose = require("mongoose");

const cartSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User"  },
  product: [{ type: mongoose.Schema.Types.ObjectId, ref: "Product"  }],
});

module.exports = mongoose.model("Cart", cartSchema);