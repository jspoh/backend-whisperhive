const { getFeedData } = require("../database/feed");

const getFeed = async (req, res) => {
  const feedData = await getFeedData(req.cookies.session);

  res.status(feedData.status).json({ data: feedData.data });
};

module.exports = { getFeed };
