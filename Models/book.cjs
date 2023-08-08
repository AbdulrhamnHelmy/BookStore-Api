const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookSchema = new Schema({
  name: String,
  author: String,
  discription: String,
  price: Number,
});

module.exports = mongoose.model("Books", bookSchema);
