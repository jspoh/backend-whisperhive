const { env, tables, connectToDb, db } = require("./config");
const getUserIdFromCookie = require("../authentication").getUserIdFromCookie;
const getUsernameFromUserId =
  require("../authentication").getUsernameFromUserId;
const getPosts = require("./post").getPosts;

const getFeedData = async (postsToRetrieve, cookie) => {
  const db = await connectToDb();
  if (!db) {
    return { status: 500 };
  }

  const userId = await getUserIdFromCookie(cookie);
  if (typeof userId !== "number") {
    return userId;
  }

  const username = await getUsernameFromUserId(userId);
  const followingList = await getFollowings(db, userId);
  const posts = await getPosts(followingList, postsToRetrieve);

  return { status: 200, username: username, data: posts };
};

const getFollowings = async (db, userId) => {
  const followingList = (
    await db
      .promise()
      .query(
        `SELECT USER_ID FROM ${tables.follows} WHERE FOLLOWER_ID = ${userId}`
      )
  )[0].map((obj) => obj.USER_ID);
  return followingList;
};

module.exports = { getFeedData };
