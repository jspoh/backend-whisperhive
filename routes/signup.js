const express = require("express");
const { env, createUser } = require("../controllers/signup");

const router = express.Router();

router
  .route("/")
  .get((req, res) => res.send("hi"))
  .post(createUser);

module.exports = { env, router };
