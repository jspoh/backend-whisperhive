const express = require("express");
const favicon = require("serve-favicon");
const morgan = require("morgan");

const env = require("./routes/signup").env;

const signupRouter = require("./routes/signup").router;
const loginRouter = require("./routes/login").router;

const app = express();

app.use(express.json());
// app.use(favicon(__dirname + "/portfolio/assets/avatar/avatar-circle.svg"));
app.use(express.static(`./frontend-build`));
process.env.NODE_ENV === "development" ? app.use(morgan("dev")) : null;

if (process.env.NODE_ENV === "development") {
  //middleware to enable CORS (cross origin resource sharing)
  app.use((req, res, next) => {
    res.header(
      "Access-Control-Allow-Origin",
      req.headers.host === `127.0.0.1:${env.PORT}` ||
        req.headers.host === "127.0.0.1:4200"
        ? "http://localhost:" + req.headers.host.split(":")[1]
        : ""
    );
    res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
    res.header("Access-Control-Allow-Headers", "Content-Type");
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

app.use("/signup/", signupRouter);
app.use("/login/", loginRouter);

app.get("*", (req, res) => {
  res.sendFile(__dirname + `/frontend-build/index.html`);
});

module.exports = { env, app };
