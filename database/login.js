const { env, tables, connectToDb } = require("./config");
const verify = require("../authentication").verify;

const authenticateUser = async (data) => {
  const db = await connectToDb();

  const userData = (
    await db
      .promise()
      .query(
        `SELECT U.USER_ID, U.USERNAME, U.EMAIL, A.PASSWORD FROM ${tables.users} U JOIN ${tables.auth} A ON U.USER_ID = A.USER_ID WHERE USERNAME = '${data.username}' OR EMAIL = '${data.username}';`
      )
  )[0][0];

  return userData != undefined
    ? await verify(data.password, userData.PASSWORD)
    : false;
};

module.exports = { authenticateUser };
