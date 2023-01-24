const { createPost } = require("../database/post");

const createNewPost = async (req, res) => {
  const response = await createPost(req.body);

  response.status === 200
    ? res.status(response.status).json({ data: response.data })
    : res.status(response.status).json({ error: response.error });
};

module.exports = { createNewPost };
