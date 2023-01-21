const { env, tables, connectToDb, db } = require("./config");
const getUserIdFromCookie = require("../authentication").getUserIdFromCookie;
const getUsernameFromUserId =
  require("../authentication").getUsernameFromUserId;

const getFeedData = async (cookie) => {
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
  const posts = await getPosts(db, followingList);

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

const getPosts = async (db, followingList) => {
  const posts = (
    await db
      .promise()
      .query(
        `SELECT * FROM ${tables.posts} WHERE TO_USER_ID IN (${followingList}) AND IS_COMMENT = FALSE`
      )
  )[0];
  const postIds = posts.map((obj) => obj.POST_ID);
  const comments = (
    await db
      .promise()
      .query(`SELECT * FROM ${tables.posts} WHERE COMMENT_ON IN (${postIds})`)
  )[0];
  const consolidated = posts.map((post) => {
    post.COMMENTS = [];
    console.log(post);
    comments.forEach((comment) => {
      comment.COMMENT_ON === post.POST_ID ? post.COMMENTS.push(comment) : null;
    });
    return post;
  });
  return consolidated;
};

module.exports = { getFeedData };
