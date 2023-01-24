const { getFeedData } = require("../database/feed");

const getFeed = async (req, res) => {
  const postsToRetrieve = req.query.posts;
  const feedData = await getFeedData(postsToRetrieve, req.cookies.session);

  res
    .status(feedData.status)
    .json({ username: feedData.username, data: feedData.data });
};

module.exports = { getFeed };
