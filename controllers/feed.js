// const authenticateUser = require("../database/login").authenticateUser;

const getFeed = async (req, res) => {
  res.status(200).json({ msg: "hi" });
};

module.exports = { getFeed };
