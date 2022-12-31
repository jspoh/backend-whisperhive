const { env, postNewUser, getUserCount } = require("../database/signup");

const createUser = async (req, res) => {
  const dbRes = await postNewUser(req.body);

  dbRes === undefined
    ? res.status(201).json({
        requestedAt: req.requestTime,
        data: req.body,
      })
    : res.status(dbRes.status).json({
        error: dbRes.error,
      });
  (err) => {
    res.status(500).json({
      requestedAt: req.requestTime,
      error: err,
    });
  };
};

module.exports = { env, createUser };
