const express = require("express");
const favicon = require("serve-favicon");
const morgan = require("morgan");

const env = require("./routes/signup").env;

const signupRouter = require("./routes/signup").router;
const loginRouter = require("./routes/login").router;

const app = express();

app.use(express.json());
// app.use(favicon(__dirname + "/portfolio/assets/avatar/avatar-circle.svg"));
app.use(express.static(`${__dirname}/frontend-build`));
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
  res.sendFile(`index.html`);
});

app.use("/signup/", signupRouter);
app.use("/login/", loginRouter);

module.exports = { env, app };
