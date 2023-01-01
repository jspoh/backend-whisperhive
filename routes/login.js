const express = require("express");
const loginUser = require("../controllers/login").loginUser;

const router = express.Router();

router.route("/").post(loginUser);

module.exports = { router };
