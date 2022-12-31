const { connectToDb } = require("./config");

const usersTable = "users";

const createUser = async (data) => {
  try {
    const db = await connectToDb();
    db.promise().query(`INSERT INTO ${usersTable} VALUES()`);
  } catch (err) {
    console.error(err);

    return err;
  }
};

module.exports = createUser;
