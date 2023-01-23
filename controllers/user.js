const { getNameFromUsername } = require("../authentication");
const { getUserData } = require("../database/user");

const getUser = async (req, res) => {
  const username = req.path.replace("/", "");
  const name = getNameFromUsername(username);
  const userData = await getUserData(username, req.cookies.session);
  res
    .status(userData.status)
    .json({ username: username, name: name, data: userData.data });
};

module.exports = { getUser };
