const { getNameFromUsername } = require("../authentication");
const {
  getUserData,
  onFollowAction,
  currentUserIsFollowing,
} = require("../database/user");

const getUser = async (req, res) => {
  const postsToRetrieve = req.query.posts;
  const username = req.path.split("/")[1];
  const name = await getNameFromUsername(username);
  const userData = await getUserData(
    username,
    postsToRetrieve,
    req.cookies.session
  );
  const following = await currentUserIsFollowing(
    userData.data.currentUser,
    username
  );
  res.status(userData.status).json({
    username: username,
    name: name,
    following: following,
    data: userData.data,
  });
};

const followAction = async (req, res) => {
  const dbRes = await onFollowAction(req.body);
  res.status(dbRes.status).json(dbRes.data);
};

module.exports = { getUser, followAction };
