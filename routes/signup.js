const express = require("express");
const signupController = require("../controllers/signup");

const router = express.Router();

router.route("/signup").post(signupController.createUser);

module.exports = router;
