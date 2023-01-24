const express = require("express");
const { createNewPost } = require("../controllers/post");

const router = express.Router();

router.route("/").post(createNewPost);

module.exports = { router };
