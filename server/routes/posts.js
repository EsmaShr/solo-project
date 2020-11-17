const express = require('express');
const postsController = require('../controllers/postsController.js');

const router = express.Router();
// localhost:3000/posts
router.get('/', postsController.getPosts);
router.post('/', postsController.createPost);

module.exports = router;
