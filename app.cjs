const express = require("express");
const mongoose = require("mongoose");
const bodyparser = require("body-parser");
const userRouter = require("./Routes/user.cjs");
const bookRouter = require("./Routes/book.cjs");
const app = express();
app.use(bodyparser.json());

const url = "mongodb+srv://mac:mac123mac@mac.vrxfwye.mongodb.net/mac";

const connectDB = async () => {
  try {
    mongoose.set("strictQuery", false);
    mongoose.connect(url);
    console.log("Connected to Mongo DB");
  } catch (err) {
    console.log("Error while connect to mongo DB" + err);
    process.exit();
  }
};
connectDB();

app.use("/", userRouter);
app.use("/", bookRouter);

app.listen(6000);
