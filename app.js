const express = require("express");
const favicon = require("serve-favicon");
const morgan = require("morgan");
const cookieParser = require("cookie-parser");
const { getUserIdFromCookie } = require("./authentication");

const env = require("./routes/signup").env;

const signupRouter = require("./routes/signup").router;
const loginRouter = require("./routes/login").router;
const feedRouter = require("./routes/feed").router;
const userRouter = require("./routes/user").router;

const app = express();

app.use(express.json());
// app.use(favicon(__dirname + "/portfolio/assets/avatar/avatar-circle.svg"));
app.use(express.static(`./frontend-build`)); // this serves pages by itself just fine. looks for index.html in dir
app.use(cookieParser());

if (env.NODE_ENV === "development") {
  // enable logging
  app.use(morgan("dev"));

  // middleware to enable CORS (cross origin resource sharing)
  app.use((req, res, next) => {
    res.header(
      "Access-Control-Allow-Origin",
      env.DEV_TYPE === "frontend"
        ? "http://localhost:4200"
        : `http://localhost:${env.PORT}`
    );
    res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
    res.header("Access-Control-Allow-Headers", "Content-Type");
    res.header("Access-Control-Allow-Credentials", "true"); // for cookies with frontend
    next();
  });

  // middleware for general logging
  app.use((req, res, next) => {
    next();
  });
}

// middleware to set requestTime
app.use((req, res, next) => {
  req.requestTime = Date();
  req.requestTimeMs = Date.now();
  // console.log(req.path);
  // console.log(req.params);
  next();
});

app.route("/authentication/").get(async (req, res) => {
  if (typeof (await getUserIdFromCookie(req.cookies.session)) === "number")
    res.status(200).send(true);
  else res.status(403).send(false);
});
app.use("/signup/", signupRouter);
app.use("/login/", loginRouter);
app.use("/feed/", feedRouter);
app.use("/user/", userRouter);

app.get("*", (req, res) => {
  res.sendFile(__dirname + `/frontend-build/index.html`);
});

module.exports = { env, app };
