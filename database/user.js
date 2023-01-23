const {
  getUserIdFromCookie,
  getUsernameFromUserId,
} = require("../authentication");
const { env, tables, connectToDb } = require("./config");
const getUserIdFromUsername =
  require("../authentication").getUserIdFromUsername;
const getPosts = require("./post").getPosts;

const getUserData = async (username, sessionCookie) => {
  const db = await connectToDb();
  if (!db) {
    return { status: 500 };
  }

  const userId = await getUserIdFromUsername(username);
  if (typeof userId !== "number") {
    return userId;
  }
  const followingList = await getFollowings(db, userId);
  const followerList = await getFollowers(db, userId);
  const posts = await getPosts(db, userId);
  let currentUserUsername;
  if ((sessionCookie !== null) | undefined) {
    const currentUserId = await getUserIdFromCookie(sessionCookie);
    currentUserUsername = await getUsernameFromUserId(currentUserId);
  } else {
    currentUserUsername = "";
  }

  return {
    status: 200,
    data: {
      currentUser: currentUserUsername,
      followingList: followingList,
      followerList: followerList,
      posts: posts,
    },
  };
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

const getFollowers = async (db, userId) => {
  const followerList = (
    await db
      .promise()
      .query(
        `SELECT FOLLOWER_ID FROM ${tables.follows} WHERE USER_ID = ${userId}`
      )
  )[0].map((obj) => obj.FOLLOWER_ID);
  return followerList;
};

module.exports = { getUserData };
