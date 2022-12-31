const db = require("../database/signup");

const createUser = async (req, res) => {
  const userCount = await db.getUserCount().data;
  req.body.id = userCount + 1;

  const dbRes = await db.createUser(req.body);

  Array.isArray(submissions) && dbRes === undefined
    ? res.status(201).json({
        requestedAt: req.requestTime,
        data: req.body,
      })
    : res.status(500).json({
        message: {
          // get: submissions,
          post: dbRes,
        },
      });
  (err) => {
    sendEmail(req);

    res.status(500).json({
      requestedAt: req.requestTime,
      error: err,
    });
  };
};

module.exports = { getSubmissions, submitForm };
