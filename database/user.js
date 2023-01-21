const { env, tables, connectToDb } = require("./config");
const getUserIdFromUsername =
  require("../authentication").getUserIdFromUsername;

const getUserData = async (username) => {
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

  return {
    status: 200,
    data: {
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

const getPosts = async (db, userId) => {
  const posts = (
    await db
      .promise()
      .query(
        `SELECT * FROM ${tables.posts} WHERE TO_USER_ID IN (${userId}) AND IS_COMMENT = FALSE`
      )
  )[0];
  const postIds = posts.map((obj) => obj.POST_ID);
  let comments;
  try {
    comments = (
      await db
        .promise()
        .query(`SELECT * FROM ${tables.posts} WHERE COMMENT_ON IN (${postIds})`)
    )[0];
  } catch (err) {
    comments = [];
  }
  const consolidated = posts.map((post) => {
    post.COMMENTS = [];
    comments.forEach((comment) => {
      comment.COMMENT_ON === post.POST_ID ? post.COMMENTS.push(comment) : null;
    });
    return post;
  });
  return consolidated;
};

module.exports = { getUserData };
