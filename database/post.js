const { env, tables, connectToDb, db } = require("./config");
const getUsernameFromUserId =
  require("../authentication").getUsernameFromUserId;

const getPosts = async (db, postedToArr) => {
  let posts = (
    await db
      .promise()
      .query(
        `SELECT * FROM ${tables.posts} WHERE TO_USER_ID IN (${postedToArr}) AND IS_COMMENT = FALSE`
      )
  )[0];

  // add usernames to post object
  posts = await Promise.all(
    posts.map(async (post) => {
      post.FROM_USERNAME = await getUsernameFromUserId(post.FROM_USER_ID);
      post.TO_USERNAME = await getUsernameFromUserId(post.TO_USER_ID);
      post.FROM_NAME = await getUsernameFromUserId(post.FROM_USER_ID);
      post.TO_NAME = await getUsernameFromUserId(post.TO_USER_ID);
      return post;
    })
  );

  const postIds = await Promise.all(posts.map(async (post) => post.POST_ID));

  // if no posts
  if (postIds.length === 0) return posts;

  let comments = (
    await db
      .promise()
      .query(`SELECT * FROM ${tables.posts} WHERE COMMENT_ON IN (${postIds})`)
  )[0];

  // add usernames to comment object
  comments = await Promise.all(
    comments.map(async (comment) => {
      comment.FROM_USERNAME = await getUsernameFromUserId(comment.FROM_USER_ID);
      comment.TO_USERNAME = await getUsernameFromUserId(comment.TO_USER_ID);
      comment.FROM_NAME = await getUsernameFromUserId(comment.FROM_USER_ID);
      comment.TO_NAME = await getUsernameFromUserId(comment.TO_USER_ID);
      return comment;
    })
  );

  const consolidated = posts.map((post) => {
    post.COMMENTS = [];
    comments.forEach((comment) => {
      comment.COMMENT_ON === post.POST_ID ? post.COMMENTS.push(comment) : null;
    });
    return post;
  });

  return consolidated;
};

module.exports = { getPosts };
