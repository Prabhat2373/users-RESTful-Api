const express = require("express");
const userController = require("./../controller/userController");
const { getUser, createUser, referAndIncrement } = userController;

const router = express.Router();

router.route("/").get(getUser).post(createUser)


module.exports = router;
