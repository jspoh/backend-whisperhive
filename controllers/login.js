const authenticateUser = require("../database/login").authenticateUser;

const loginUser = async (req, res) => {
  const dbRes = await authenticateUser(req.body);

  if (dbRes.authenticated === true) {
    res
      .status(200)
      .json({ status: "authenticated" })
      .cookie("session", dbRes.cookie, {
        path: "/",
        secure: true,
        sameSite: "none",
      });
  } else if (dbRes.authenticated === false) {
    res.status(401).json({ status: "wrong username, email or password" });
  } else {
    res.status(dbRes.status).json({ error: dbRes.error });
  }
};

module.exports = { loginUser };
