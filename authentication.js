const crypto = require("crypto");

const { env, tables, connectToDb } = require("./database/config");

async function hash(password) {
  return new Promise((resolve, reject) => {
    const salt = crypto.randomBytes(8).toString("hex");

    crypto.scrypt(password, salt, 64, (err, derivedKey) => {
      if (err) reject(err);
      resolve(salt + ":" + derivedKey.toString("hex"));
    });
  });
}

async function verify(password, hash) {
  return new Promise((resolve, reject) => {
    const [salt, key] = hash.split(":");
    crypto.scrypt(password, salt, 64, (err, derivedKey) => {
      if (err) reject(err);
      resolve(key == derivedKey.toString("hex"));
    });
  });
}

const getUserIdFromCookie = async (cookieValue) => {
  const db = await connectToDb();
  if (!db) {
    return { status: 500 };
  }

  try {
    const userId = (
      await db
        .promise()
        .query(
          `SELECT USER_ID FROM ${tables.sessions} WHERE COOKIE = '${cookieValue}'`
        )
    )[0][0].USER_ID;
    return userId;
  } catch (err) {
    return { status: 500, error: err };
  }
};

const getUserIdFromUsername = async (username) => {
  const db = await connectToDb();
  if (!db) {
    return { status: 500 };
  }

  try {
    const userId = (
      await db
        .promise()
        .query(
          `SELECT USER_ID FROM ${tables.users} WHERE USERNAME = '${username}'`
        )
    )[0][0].USER_ID;
    return userId;
  } catch (err) {
    return { status: 500, error: err };
  }
};

module.exports = { hash, verify, getUserIdFromCookie, getUserIdFromUsername };

// (async function run() {
//   const password1 = await hash("123456");
//   const password2 = await hash("123456");
//   console.log("password1", await verify("123456", password1));
//   console.log("password2", await verify("123456", password2));
//   console.log("password1 === password2", password1 === password2);
//   console.log(password1 + "\n" + password2);
// })();
