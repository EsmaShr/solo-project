const PostMessage = require('../models/postMessage');

const postsController = {};

postsController.getPosts = (req, res) => {
  try {
    // retrieve all the post from DB
    PostMessage.find().then((data) => {
      console.log(data);
      res.status(200).json(data);
    });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
postsController.createPost = (req, res) => {
  const post = req.body;
  const newPost = new PostMessage(post);
  try {
    newPost.save().then(() => {
      res.status(201).json(newPost);
    });
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};
module.exports = postsController;
