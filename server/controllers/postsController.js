const express = require('express');
const mongoose = require('mongoose');
const PostMessage = require('../models/postMessage');

// const router = express.Router();
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
postsController.getPost = (req, res) => {
  const { id } = req.params;

  try {
    PostMessage.findById(id).then((post) => {
      return res.status(200).json(post);
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
      return res.status(201).json(newPost);
    });
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

postsController.deletePost = (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send(`No post with id: ${id}`);

  PostMessage.findByIdAndRemove(id).then(() => {
    return res.json({ message: 'Post deleted successfully.' });
  });
};

module.exports = postsController;
// module.exports = router;
