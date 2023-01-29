const express = require("express");
const { getUser, followAction } = require("../controllers/user");

const router = express.Router();

router.route("*").get(getUser);
router.route("*/follow-action").post(followAction);

module.exports = { router };
