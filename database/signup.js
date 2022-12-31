const { env, connectToDb } = require("./config");
const hash = require("../authentication").hash;

const usersTable = "USERS";
const authTable = "AUTH";

const postNewUser = async (data) => {
  try {
    const db = await connectToDb();

    // console.log(
    //   Object.values(
    //     (await db.promise().query("SELECT MAX(USER_ID) FROM USERS"))[0][0]
    //   )[0]
    // );

    const userCount = Object.values(
      (await db.promise().query("SELECT COUNT(*) FROM USERS"))[0][0]
    )[0];

    data.user_id =
      userCount !== 0
        ? Object.values(
            (await db.promise().query("SELECT MAX(USER_ID) FROM USERS"))[0][0]
          )[0] + 1
        : 0;

    const hashedPassword = await hash(data.password);
    await db
      .promise()
      .query(
        `INSERT INTO ${authTable}(USER_ID, PASSWORD) VALUES(${data.user_id}, '${hashedPassword}')`
      );
    await db.promise().query(
      `INSERT INTO ${usersTable}(USER_ID, USERNAME, EMAIL, NAME, DOB, GENDER, BIO, CREATED_ON, PHOTO)\
         VALUES(${data.user_id}, '${data.username}', '${data.email}', '${data.name}', '${data.dob}', '${data.gender}', '${data.bio}', CURRENT_TIMESTAMP, ${data.photo})`
    );
  } catch (err) {
    console.error(err);

    return err.code === "ER_BAD_FIELD_ERROR" || err.code === "ER_DATA_TOO_LONG"
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
