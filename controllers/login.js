const authenticateUser = require("../database/login").authenticateUser;

const loginUser = async (req, res) => {
  const authenticated = await authenticateUser(req.body);

  authenticated
    ? res.status(200).json({ status: "authenticated" })
    : res.status(401).json({ status: "wrong username, email or password" });
};

module.exports = { loginUser };