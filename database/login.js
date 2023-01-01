const uuidv4 = require("uuid").v4;

const { env, tables, connectToDb } = require("./config");
const verify = require("../authentication").verify;

const authenticateUser = async (data) => {
  const db = await connectToDb();
  if (!db) {
    return { status: 500 };
  }

  // get user data
  try {
    const userData = (
      await db
        .promise()
        .query(
          `SELECT U.USER_ID, U.USERNAME, U.EMAIL, A.PASSWORD FROM ${tables.users} U JOIN ${tables.auth} A ON U.USER_ID = A.USER_ID WHERE USERNAME = '${data.username}' OR EMAIL = '${data.username}';`
        )
    )[0][0];

    if (
      userData != undefined &&
      (await verify(data.password, userData.PASSWORD))
    ) {
      const sessionId = uuidv4();
      console.log(sessionId);
      await db
        .promise()
        .query(
          `INSERT INTO ${tables.sessions}(USER_ID, COOKIE) VALUES(${userData.USER_ID}, '${sessionId}')`
        );
      return { authenticated: true, cookie: sessionId };
    } else {
      return { authenticated: false };
    }
  } catch (err) {
    return { authenticated: null, status: 500, error: err };
  }
};

module.exports = { authenticateUser };
