const mongoose = require("mongoose");
const dotenv = require("dotenv");
const fs = require("fs");
const user = require("./../model/userModel");

dotenv.config({
  path: "./config.env",
});

const DB = process.env.DB_LOCAL;

mongoose
  .connect(DB, {
    useNewUrlParser: true,
  })
  .then(() => {
    console.log("DB Connection Success");
  })
  .catch((err) => {
    console.log(err.message);
  });

// Reading JSON file data to Import it to Database
const usersData = fs.readFileSync("./../usersList.json", "utf-8");

// Function to Actually Import the Data to the Database.
const importData = async () => {
  try {
    await user.create(usersData);
    console.log("Data imported to the Database !");
    process.exit();
  } catch (err) {
    res.status(404).json({
      status: "Fail",
      message: err.message,
    });
  }
};

// Useing process variables to import Data using Terminal
importData()
