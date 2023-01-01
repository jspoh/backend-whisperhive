const express = require("express");
const loginUser = require("../controllers/login").loginUser;

const router = express.Router();

router.route("/").put(loginUser);

module.exports = { router };
