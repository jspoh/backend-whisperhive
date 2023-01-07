const authenticateUser = require("../database/login").authenticateUser;

const loginUser = async (req, res) => {
  const dbRes = await authenticateUser(req.body);

  if (dbRes.authenticated === true) {
    res
      .cookie("session", dbRes.cookie, {
        path: "/",
        secure: true,
        sameSite: "lax",
      })
      .status(200)
      .json({ status: "authenticated", cookie: dbRes.cookie });
  } else if (dbRes.authenticated === false) {
    res.status(401).json({ status: "wrong username, email or password" });
  } else {
    res.status(dbRes.status).json({ error: dbRes.error });
  }
};

module.exports = { loginUser };
