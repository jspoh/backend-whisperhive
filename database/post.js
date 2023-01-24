const { getUserIdFromUsername } = require("../authentication");
const { env, tables, connectToDb, db } = require("./config");
const getUsernameFromUserId =
  require("../authentication").getUsernameFromUserId;
const getNameFromUserId = require("../authentication").getNameFromUserId;

/**
 * Get posts posted to an array of users
 * @param {number} postedToArr Accepts an array of userIds
 * @param {number} count Refers to the number of posts to retrieve
 * @returns an array of 10 posts ordered by date in descending order
 */
const getPosts = async (postedToArr, count) => {
  const db = await connectToDb();
  if (!db) {
    return { status: 500 };
  }

  const posts = (
    await db
      .promise()
      .query(
        `SELECT * FROM ${tables.posts} WHERE TO_USER_ID IN (${postedToArr}) AND IS_COMMENT = FALSE ORDER BY POSTED_ON DESC LIMIT ${count}`
      )
  )[0];

  // add usernames to post object
  await Promise.all(
    posts.map(async (post) => {
      post.FROM_USERNAME = await getUsernameFromUserId(post.FROM_USER_ID);
      post.TO_USERNAME = await getUsernameFromUserId(post.TO_USER_ID);
      post.FROM_NAME = await getNameFromUserId(post.FROM_USER_ID);
      post.TO_NAME = await getNameFromUserId(post.TO_USER_ID);
      return post;
    })
  );

  const postIds = await Promise.all(posts.map(async (post) => post.POST_ID));

  // if no posts
  if (postIds.length === 0) return posts;

  const comments = (
    await db
      .promise()
      .query(`SELECT * FROM ${tables.posts} WHERE COMMENT_ON IN (${postIds})`)
  )[0];

  // add usernames to comment object
  await Promise.all(
    comments.map(async (comment) => {
      comment.FROM_USERNAME = await getUsernameFromUserId(comment.FROM_USER_ID);
      comment.TO_USERNAME = await getUsernameFromUserId(comment.TO_USER_ID);
      comment.FROM_NAME = await getNameFromUserId(comment.FROM_USER_ID);
      comment.TO_NAME = await getNameFromUserId(comment.TO_USER_ID);
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

const createPost = async (post) => {
  const db = await connectToDb();
  if (!db) {
    return { status: 500 };
  }

  [post.toUserId, post.fromUserId] = await Promise.all([
    getUserIdFromUsername(post.to),
    getUserIdFromUsername(post.from),
  ]);

  try {
    const postCount = (
      await db.promise().query(`SELECT COUNT(*) FROM ${tables.posts}`)
    )[0][0]["COUNT(*)"];

    await db.promise().query(`INSERT INTO ${
      tables.posts
    }(POST_ID, FROM_USER_ID, TO_USER_ID, MESSAGE, POSTED_ON, IS_ANON, IS_COMMENT, COMMENT_ON)\
    VALUES(${postCount + 1}, ${post.fromUserId}, ${post.toUserId}, '${
      post.content
    }', CURRENT_TIMESTAMP, ${post.anon}, ${post.comment}, ${post.comment_on})`);

    const newPost = (
      await db
        .promise()
        .query(`SELECT * FROM ${tables.posts} WHERE POST_ID = ${postCount + 1}`)
    )[0][0];

    return { status: 200, data: newPost };
  } catch (error) {
    return { status: 500, error: error };
  }
};

module.exports = { getPosts, createPost };
