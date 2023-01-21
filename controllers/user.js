const { getUserData } = require("../database/user");

const getUser = async (req, res) => {
  const username = req.path.replace("/", "");
  const userData = await getUserData(username);
  res.status(userData.status).json({ username: username, data: userData.data });
};

module.exports = { getUser };
