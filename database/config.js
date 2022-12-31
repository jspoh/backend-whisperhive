require("dotenv").config({ path: "./config.env" }); // path relative to starting file (index.js) ??
const mysql = require("mysql2");

// console.log(env);

const config = {
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PWD,
  database: process.env.DB_DATABASE,
  port: process.env.DB_PORT,
  debug: false,
};

const connectToDb = () => {
  try {
    return mysql.createConnection(config);
  } catch (err) {
    console.error(err);

    return "unable to connect to db";
  }
};

module.exports = connectToDb;
