const express = require("express");
const favicon = require("serve-favicon");
const morgan = require("morgan");

const signupRouter = require("./routes/signup").router;
const env = require("./routes/signup").env;

const app = express();

app.use(express.json());
// app.use(favicon(__dirname + "/portfolio/assets/avatar/avatar-circle.svg"));
app.use(express.static(`${__dirname}/`));
process.env.NODE_ENV === "development" ? app.use(morgan("dev")) : null;

// middleware to set requestTime
app.use((req, res, next) => {
  req.requestTime = Date();
  req.requestTimeMs = Date.now();
  // console.log(req.path);
  // console.log(req.params);
  next();
});

app.get("/", (req, res) => {
  //   res.sendFile(`index.html`);
  res.send("received");
});

app.use("/signup/", signupRouter);

module.exports = { env, app };
