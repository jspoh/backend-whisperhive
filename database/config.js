require("dotenv").config({ path: "./config.env" }); // path relative to starting file (index.js) ??
const mysql = require("mysql2");

const env = {
  PORT: process.env.PORT,
  NODE_ENV: process.env.NODE_ENV,
  DEV_TYPE: process.env.DEV_TYPE,
};

// console.log(env);

const config = {
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PWD,
  database: process.env.DB_DATABASE,
  port: process.env.DB_PORT,
  debug: false,
};

const tables = {
  auth: "AUTH",
  users: "USERS",
  posts: "POSTS",
  likes: "LIKES",
  follows: "FOLLOWS",
  sessions: "SESSIONS",
};

let db;

const connectToDb = () => {
  if (db) return db;
  try {
    db = mysql.createConnection(config);
    return db;
  } catch (err) {
    console.error(err);
    return false;
  }
};

module.exports = { env, tables, connectToDb };
