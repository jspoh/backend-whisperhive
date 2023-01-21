const { getUserData } = require("../database/user");

const getUser = async (req, res) => {
  const username = req.path.replace("/", "");
  const userData = await getUserData(username);
  res.status(userData.status).json(userData.data);

  // res.status(feedData.status).json({ data: feedData.data });
};

module.exports = { getUser };
