const { env, connectToDb } = require("./config");

const usersTable = "users";

const postNewUser = async (data) => {
  console.log(data);
  try {
    const db = await connectToDb();
    await db
      .promise()
      .query(
        `INSERT INTO ${usersTable} VALUES(${data.id}, '${data.username}', '${data.name}', '${data.dob}', '${data.gender}', '${data.bio}', CURRENT_TIMESTAMP, ${data.photo})`
      );
  } catch (err) {
    console.error(err);

    return err.code === "ER_BAD_FIELD_ERROR"
      ? { status: 400, error: err }
      : { status: 500, error: err };
  }
};

const getUserCount = async () => {
  try {
    const db = await connectToDb();
    const userCount = await db.promise().query("SELECT COUNT(*) FROM USERS");
    return { data: userCount };
  } catch (err) {
    console.error(err);

    return { status: 500, error: err };
  }
};

module.exports = { env, postNewUser, getUserCount };
