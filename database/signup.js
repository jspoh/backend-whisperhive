const { connectToDb } = require("./config");

const usersTable = "users";

const createUser = async (data) => {
  try {
    const db = await connectToDb();
    db.promise().query(`INSERT INTO ${usersTable} VALUES()`);
  } catch (err) {
    console.error(err);

    return { error: err };
  }
};

const getUserCount = async () => {
  try {
    const db = await connectToDb();
    const userCount = await db.promise().query("SELECT COUNT(*) FROM USERS");
    return { data: userCount };
  } catch (err) {
    console.error(err);

    return { error: err };
  }
};

module.exports = { createUser, getUserCount };
