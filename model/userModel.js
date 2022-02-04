const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config({
  path: "./config.env",
});

const DB = process.env.DB_LOCAL;

mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
  })
  .then(() => {
    console.log("DB Connection Success");
  })
  .catch((err) => {
    console.log(err.message);
  });

const userSchema = new mongoose.Schema({
  Name: {
    type: String,
    required: true,
  },
  id:{
    type:Number,
    required: true,
    unique: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  ReferredUser: {
    type: String,
  },
  isPaymentMade: {
    type: Boolean,
    required: true,
    validate: {
      validator: function (val) {
        return val == true || false; // True || false
      },
      message: `isPaymentMade is must be TRUE or FALSE`,
    },
  },
  TotalEarnings: {
    type: Number,
    required: true,
  },
});

const users = mongoose.model("users", userSchema);

module.exports = users;
