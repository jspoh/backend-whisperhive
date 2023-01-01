const express = require("express");
const { env, createUser } = require("../controllers/signup");

const router = express.Router();

router.route("/").post(createUser);

module.exports = { env, router };
